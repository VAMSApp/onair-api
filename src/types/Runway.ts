export interface Runway {
  Id: string;
  AirportId: string,
  Name: string,
  Latitude: string,
  Longitude: number,
  MagneticHeading: number,
  Length: number,
  Width: number,
  HasIls: boolean,
  IlsFrequency: number,
  IlsId: string,
  IlsSlope: number,
  IlsMagneticHeading: number,
  ThresholdElevation: number,
  SurfaceType: number,
  RunwayType: number,
  ApproachLights: string,
  EndLights: boolean,
  CenterLights: number,
  EdgeLights: number;
}