import { action, makeObservable, observable } from 'mobx'
import Geocode from 'react-geocode'
import config from '../config.json'
import axios from 'axios'
import { efficiency, globalRadiation } from './utils'

export default class SolarCulator {
  public powerUsagePerYear: number = 0
  public roofArea: number = 0
  public roofOrientation: number = 0
  public roofAngle: number = 0
  public address: string = ''
  public lng: number = 0
  public lat: number = 0
  public sunHoursPerYear: number = 0
  public currentPowerPrice: number = 0

  public powerOutputPerYear: number = 0
  public powerSavingPerYear: number = 0
  public moneySavingPerYear: number = 0

  public constructor() {
    Geocode.setLanguage('de')
    Geocode.setRegion('de')
    Geocode.enableDebug()
    Geocode.setApiKey(config.goolgeMapsApiKey)
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
    })
  }

  setPowerUsagePerYear(powerUsagePerYear: number) {
    this.powerUsagePerYear = powerUsagePerYear
  }

  setRoofArea(roofArea: number) {
    this.roofArea = roofArea
  }

  setRoofOrientation(roofOrientation: number) {
    this.roofOrientation = roofOrientation
  }

  setRoofAngle(roofAngle: number) {
    this.roofAngle = roofAngle
  }

  setAddress(address: string) {
    this.address = address
  }

  public async setLocation(adress: string) {
    const result = (await Geocode.fromAddress(adress)).results[0]
    this.lat = result.geometry.location.lat
    this.lng = result.geometry.location.lng
    await this.setSunHours()
  }

  public async setSunHours() {
    const result = (
      await axios.get(
        `https://re.jrc.ec.europa.eu/api/mrcalc?lat=${this.lat}&lon=${this.lng}&horirrad=1&outputformat=json`,
      )
    ).data
    this.sunHoursPerYear = result.outputs.monthly
      .filter((m: any) => m.year === 2016)
      .reduce((v: number, m: any) => (v += m['H(h)_m']), 0)
  }

  public getPowerOutputPerYear() {
    const solarPanel = config.solarPanel
    const usableArea = 0.9
    this.powerOutputPerYear =
      (solarPanel.wattPeak / ((solarPanel.length * solarPanel.width) / 10e6)) *
      this.roofArea *
      usableArea *
      (solarPanel.efficiency / 100) *
      this.sunHoursPerYear *
      globalRadiation(this.lat) *
      efficiency(this.roofAngle, this.roofOrientation)
  }

  PerYear() {
    this.powerSavingPerYear = this.powerUsagePerYear - this.powerOutputPerYear
  }

  public getMoneySavingPerYear() {
    this.moneySavingPerYear = this.powerSavingPerYear * this.currentPowerPrice
  }
}
