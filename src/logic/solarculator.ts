import { action, makeObservable, observable } from "mobx";
import Geocode from "react-geocode";
import config from "../config.json";
import axios from "axios";
import { efficiency, globalRadiation } from "./utils";

export default class SolarCulator {
  public powerUsagePerYear: number = 0;
  public roofAngle: number = 30;
  public roofOrientation: number = 0;
  public roofArea: number = 0;
  public roofType: number = 0;
  public address: string = "";
  public lng: number = 0;
  public lat: number = 0;
  public sunHoursPerYear: number = 0;
  public currentPowerPrice: number = config.defaultValues.currentPowerPrice.germany.averagePrice;

  public graph: any = {};
  public powerOutputPerYear: number = 0;
  public powerSavingPerYear: number = 0;
  public moneySavingPerYear: number = 0;
  public totalMoneySaving: number = 0;

  public constructor() {
    Geocode.setLanguage("de");
    Geocode.setRegion("de");
    Geocode.enableDebug();
    Geocode.setApiKey(config.goolgeMapsApiKey);
    makeObservable(this, {
      powerUsagePerYear: observable,
      setPowerUsagePerYear: action,
      roofArea: observable,
      setRoofArea: action,
      roofAngle: observable,
      setRoofAngle: action,
      roofOrientation: observable,
      setRoofOrientation: action,
      address: observable,
      setAddress: action,
      currentPowerPrice: observable,
      setCurrentPowerPrice: action,
      roofType: observable,
      setRoofType: action,
    });
  }

  setRoofType(roofType: number) {
    this.roofType = roofType;
  }

  setPowerUsagePerYear(powerUsagePerYear: number) {
    this.powerUsagePerYear = powerUsagePerYear;
  }

  setRoofArea(roofArea: number) {
    this.roofArea = roofArea;
  }

  setRoofOrientation(roofOrientation: number) {
    this.roofOrientation = roofOrientation;
  }

  setRoofAngle(roofAngle: number) {
    this.roofAngle = roofAngle;
  }

  setAddress(address: string) {
    this.address = address;
  }

  setCurrentPowerPrice(currentPowerPrice: number) {
    this.currentPowerPrice = currentPowerPrice;
  }

  private async getLocation() {
    const result = (await Geocode.fromAddress(this.address)).results[0];
    this.lat = result.geometry.location.lat;
    this.lng = result.geometry.location.lng;
  }

  private async getSunHours() {
    const result = (
      await axios.get(
        `https://cors-anywhere.herokuapp.com/https://re.jrc.ec.europa.eu/api/mrcalc?lat=${this.lat}&lon=${this.lng}&horirrad=1&outputformat=json`
      )
    ).data;
    console.log(result);
    this.sunHoursPerYear = result.outputs.monthly
      .filter((m: any) => m.year === 2016)
      .reduce((v: number, m: any) => (v += m["H(h)_m"]), 0);
  }

  private getPowerOutputPerYear() {
    const solarPanel = config.solarPanel;
    const usableArea = 0.9;
    const correctionFactor = 300;
    this.powerOutputPerYear =
      ((solarPanel.wattPeak /
        correctionFactor /
        ((solarPanel.length * solarPanel.width) / 1000000)) *
        this.roofArea *
        usableArea *
        (solarPanel.efficiency / 100) *
        this.sunHoursPerYear *
        globalRadiation(this.lat) *
        efficiency(this.roofAngle, this.roofOrientation)) /
      100;
    // Wh to kWh
    this.powerOutputPerYear /= 1000;
  }

  private getPowerSavingPerYear() {
    this.powerSavingPerYear = Math.max(this.powerUsagePerYear, this.powerOutputPerYear);
  }

  private getMoneySavingPerYear() {
    this.moneySavingPerYear = this.powerSavingPerYear * this.currentPowerPrice;
    if (this.powerUsagePerYear - this.powerOutputPerYear < 0) {
      this.moneySavingPerYear -=
        (this.powerUsagePerYear - this.powerOutputPerYear) *
        config.defaultValues.currentPowerPrice.germany.averagePriceSelling;
    }
  }

  private calculateGraph() {
    const solarPanel = config.solarPanel;
    const roofCellPrice =
      (1.5 * solarPanel.wattPeak * this.roofArea) /
      ((solarPanel.length * solarPanel.width) / 1000000);
    const roofCellInstallationPrice =
      (0.15 * solarPanel.wattPeak * this.roofArea) /
      ((solarPanel.length * solarPanel.width) / 1000000);
    const powerConverterPrice =
      (0.2 * solarPanel.wattPeak * this.roofArea) /
      ((solarPanel.length * solarPanel.width) / 1000000);
    const investment = roofCellPrice + roofCellInstallationPrice + powerConverterPrice;
    const cost = [this.moneySavingPerYear - investment];
    for (let i = 1; i < 20; i++) {
      cost.push(cost[i - 1] + this.moneySavingPerYear - config.maintenanceCostPerYear);
    }
    this.totalMoneySaving = cost[19];
    this.graph = cost.map((c, i) => {
      return { x: i, y: c };
    });
  }

  public async calculate() {
    await this.getLocation();
    await this.getSunHours();
    this.getPowerOutputPerYear();
    this.getPowerSavingPerYear();
    this.getMoneySavingPerYear();
    this.calculateGraph();
  }
}
