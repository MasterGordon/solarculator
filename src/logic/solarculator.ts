import { observable } from "mobx";

export default class SolarCulator {
  @observable public powerUsage: number = 0;
  @observable public roofArea: number = 0;
  @observable public rootOrientation: number = 0;
  @observable public roofAngle: number = 0;
  @observable public longditude: number = 0;
  @observable public latitude: number = 0;
  @observable public currentPowerPrice: number = 0;
}