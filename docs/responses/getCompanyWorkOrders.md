## getCompanyWorkOrders()

- [Cargos](./Jobs-Cargos.md)
- [Charters](./Jobs-Charters.md)
- [WorkOrdersCrew](./WorkOrders-Crew.md)
- [WorkOrdersActions](./WorkOrderActions.md)

### response
```javascript
const x = [
  {
    Id: '0a6377bd-5c7f-425b-ba4d-28c83b5409eb',
    AircraftId: 'd3ef9f34-e2a4-414e-989f-8db66c50f35d',
    CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
    StartDate: '2022-01-10T03:26:21.517',
    Name: 'Work Order U',
    Aircraft: {
      Id: 'd3ef9f34-e2a4-414e-989f-8db66c50f35d',
      AircraftTypeId: '33d742b7-77f8-42e7-9ee5-e9c511950ed8',
      AircraftType: [Object],
      Nickname: '11/01/2022 07:02:36 set idle 9',
      WorldId: 'ad3ec8a4-246e-4abb-84a9-9dbc43bb6ae6',
      CompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
      CurrentAirportId: 'a9e3663f-00f4-4114-a00c-acfa3a1b3f0e',
      AircraftStatus: 0,
      LastStatusChange: '2022-01-11T07:02:36.983',
      CurrentStatusDurationInMinutes: 0,
      AllowSell: false,
      AllowRent: true,
      AllowLease: false,
      SellPrice: 682626000,
      RentHourPrice: 1017350,
      RentMaxDate: '2022-01-01T14:41:48.983',
      Identifier: 'SWOOPC1',
      Heading: 105.7,
      Longitude: -8.882415,
      Latitude: 39.821313,
      fuelTotalGallons: 3581.6852073940536,
      fuelWeight: 0,
      Altitude: 154.97,
      FlightState: 0,
      loadedWeight: 0,
      zeroFuelWeight: 0,
      airframeHours: 227.42830733749287,
      airframeCondition: 0.9634231078352562,
      AirframeMaxCondition: 0.9956275810908118,
      LastAnnualCheckup: '2021-12-28T17:22:29.43',
      Last100hInspection: '2022-01-01T16:55:35.897',
      LastWeeklyOwnershipPayment: '2022-02-08T14:41:48.95',
      LastParkingFeePayment: '2022-02-11T05:27:57.013',
      IsControlledByAI: false,
      HoursBefore100HInspection: 72.59377305555556,
      ConfigFirstSeats: 0,
      ConfigBusSeats: 0,
      ConfigEcoSeats: 4,
      SeatsReservedForEmployees: 0,
      LastMagicTransportationDate: '2021-09-14T14:41:48.92',
      CurrentCompanyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
      CurrentCompanyIdIfAny: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
      ExtraWeightCapacity: 0,
      TotalWeightCapacity: 602000,
      CurrentSeats: 4,
      MustDoMaintenance: false
    },
    Company: {
      Id: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
      WorldId: 'ad3ec8a4-246e-4abb-84a9-9dbc43bb6ae6',
      Name: 'NDBB Airways',
      AirlineCode: 'NDBB',
      LastConnection: '2022-01-31T19:11:55.907',
      LastReportDate: '2022-01-20T00:00:00',
      Reputation: 0.7141961959318697,
      CreationDate: '2021-08-29T02:12:45.287',
      DifficultyLevel: 1,
      UTCOffsetinHours: -7,
      Paused: false,
      Level: 12,
      LevelXP: 9235,
      TransportEmployeeInstant: true,
      TransportPlayerInstant: true,
      ForceTimeInSimulator: false,
      UseSmallAirports: true,
      UseOnlyVanillaAirports: true,
      EnableSkillTree: false,
      CheckrideLevel: 0,
      EnableLandingPenalities: false,
      EnableEmployeesFlightDutyAndSleep: false,
      AircraftRentLevel: 0,
      EnableCargosAndChartersLoadingTime: false,
      InSurvival: false,
      PayBonusFactor: 0.9,
      EnableSimFailures: true,
      DisableSeatsConfigCheck: true,
      RealisticSimProcedures: true,
      TravelTokens: 10
    },
    Crews: [
        WorkOrdersCrew,
        // removed for brevity
     ],
    Actions: [
      WorkOrdersAction,
      // removed for brevity
    ],
    DepartureAirportId: 'b8c8301a-3193-4fc3-ac54-c435aa4a38f4',
    Status: 0
  },
  // removed for brevity...
]
```
