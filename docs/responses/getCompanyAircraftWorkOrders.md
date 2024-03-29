## getCompanyAircraftWorkOrders(aircraftId:string, companyId?:string)

### response
```javascript
[
  {
    "Id": "debaac3f-4cdb-4877-89e7-3a263b72ef7e",
    "AircraftId": "73baa73c-01e3-4aae-b99b-29cff83c7f37",
    "CompanyId": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
    "StartDate": "2023-07-08T14:54:23.83",
    "Name": "Work Order C",
    "Aircraft": {
      "Id": "73baa73c-01e3-4aae-b99b-29cff83c7f37",
      "AircraftTypeId": "d5cd5e99-32b1-4962-a700-0f7e67e01d94",
      "AircraftType": {
        "Id": "d5cd5e99-32b1-4962-a700-0f7e67e01d94",
        "Hash": "01C4D6D009165AD124B12ED3C62FED543E743EA7",
        "AircraftClassId": "607d854a-18f7-42ae-99f6-63b4b7f07f1a",
        "AircraftClass": {
          "Id": "607d854a-18f7-42ae-99f6-63b4b7f07f1a",
          "ShortName": "METL",
          "Name": "Multi-engine TurboProp Land",
          "Order": 7
        },
        "CreationDate": "2020-07-16T23:46:26.27",
        "LastModerationDate": "2021-04-08T12:16:04.183",
        "DisplayName": "Beechcraft King Air 350i",
        "TypeName": "Beechcraft King Air 350i Asobo",
        "FlightsCount": 44715,
        "TimeBetweenOverhaul": 2500,
        "HightimeAirframe": 20000,
        "AirportMinSize": 1,
        "emptyWeight": 9955,
        "maximumGrossWeight": 16500,
        "estimatedCruiseFF": 745,
        "Baseprice": 3029200,
        "FuelTotalCapacityInGallons": 538,
        "engineType": 5,
        "numberOfEngines": 2,
        "seats": 15,
        "needsCopilot": false,
        "fuelType": 1,
        "maximumCargoWeight": 5145,
        "maximumRangeInHour": 4.836538461538462,
        "maximumRangeInNM": 1509,
        "designSpeedVS0": 78,
        "designSpeedVS1": 100.01455986868227,
        "designSpeedVC": 312,
        "IsDisabled": false,
        "LuxeFactor": 0,
        "GliderHasEngine": false,
        "StandardSeatWeight": 63,
        "IsFighter": false
      },
      "Nickname": "26/06/2023 21:57:17 set idle 9",
      "WorldId": "c83eb5d5-9dc5-452f-b261-69b45cb0951b",
      "CurrentAirportId": "b8c8301a-3193-4fc3-ac54-c435aa4a38f4",
      "AircraftStatus": 0,
      "LastStatusChange": "2023-06-26T21:57:17.02",
      "CurrentStatusDurationInMinutes": 0,
      "AllowSell": true,
      "AllowRent": true,
      "AllowLease": true,
      "SellPrice": 3040000,
      "RentHourPrice": 6390,
      "RentCompanyId": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
      "AircraftLeaseId": "56c23875-60c4-45b5-912f-570e027e4c81",
      "Identifier": "N2676M",
      "Heading": 272.01173172499443,
      "Longitude": -112.0087445032627,
      "Latitude": 33.4409583382238,
      "fuelTotalGallons": 176.52522686123848,
      "fuelWeight": 0,
      "Altitude": 0,
      "FlightState": 0,
      "loadedWeight": 0,
      "zeroFuelWeight": 0,
      "airframeHours": 3157.110658611111,
      "airframeCondition": 0.9254672096666665,
      "AirframeMaxCondition": 0.9975155736555555,
      "LastAnnualCheckup": "2023-05-31T19:57:27.103",
      "Last100hInspection": "2023-06-15T19:57:27.103",
      "LastWeeklyOwnershipPayment": "2023-06-15T19:57:27.077",
      "LastParkingFeePayment": "2023-07-08T05:18:45.9",
      "IsControlledByAI": false,
      "HoursBefore100HInspection": 72.88934138888887,
      "ConfigFirstSeats": 0,
      "ConfigBusSeats": 0,
      "ConfigEcoSeats": 15,
      "SeatsReservedForEmployees": 0,
      "LastMagicTransportationDate": "2023-06-15T19:57:27.077",
      "CurrentCompanyId": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
      "CurrentCompanyIdIfAny": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
      "ExtraWeightCapacity": 0,
      "TotalWeightCapacity": 5145,
      "CurrentSeats": 15,
      "MustDoMaintenance": false
    },
    "Company": {
      "Id": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
      "WorldId": "c83eb5d5-9dc5-452f-b261-69b45cb0951b",
      "Name": "Tangent Airways",
      "AirlineCode": "TANG",
      "LastConnection": "2023-07-08T14:48:46",
      "LastReportDate": "2023-06-03T00:00:00",
      "Reputation": 0.41603209681852066,
      "CreationDate": "2021-07-04T22:50:12.73",
      "DifficultyLevel": 2,
      "UTCOffsetinHours": 0,
      "Paused": false,
      "Level": 12,
      "LevelXP": 3402,
      "TransportEmployeeInstant": false,
      "TransportPlayerInstant": false,
      "ForceTimeInSimulator": true,
      "UseSmallAirports": true,
      "UseOnlyVanillaAirports": false,
      "EnableSkillTree": true,
      "CheckrideLevel": 2,
      "EnableLandingPenalities": true,
      "EnableEmployeesFlightDutyAndSleep": true,
      "AircraftRentLevel": 2,
      "EnableCargosAndChartersLoadingTime": true,
      "InSurvival": true,
      "PayBonusFactor": 0,
      "EnableSimFailures": true,
      "DisableSeatsConfigCheck": false,
      "LastSwapDate": "2023-01-31T21:10:03.77",
      "RealisticSimProcedures": true,
      "TravelTokens": 10,
      "SkillTreeResetCount": 1,
      "IndustryPoints": 0,
      "TotalIndustryPoints": 50,
      "TotalContractsCompleted": 0,
      "TotalContractsEarnedCredits": 0
    },
    "Crews": [],
    "Actions": [
      {
        "Id": "24ef551c-552d-4e50-9346-23e3912e422e",
        "WorkOrderId": "debaac3f-4cdb-4877-89e7-3a263b72ef7e",
        "Status": 0,
        "Order": 0,
        "FuelToLoadGallons": 176.52522686123848,
        "DontLoadFuel": false,
        "Loads": [],
        "Passengers": [],
        "Step": 0,
        "WaitingForCargoPAX": false,
        "FinishedAtAlternate": false,
        "ForceCrewToRestAtEnd": false
      }
    ],
    "DepartureAirportId": "b8c8301a-3193-4fc3-ac54-c435aa4a38f4",
    "Status": 0
  },
  {
    "Id": "a7dc4cfa-3403-4227-9f38-9d61323103f8",
    "AircraftId": "73baa73c-01e3-4aae-b99b-29cff83c7f37",
    "CompanyId": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
    "StartDate": "2023-07-08T14:49:10.803",
    "Name": "Work Order B",
    "Aircraft": {
      "Id": "73baa73c-01e3-4aae-b99b-29cff83c7f37",
      "AircraftTypeId": "d5cd5e99-32b1-4962-a700-0f7e67e01d94",
      "AircraftType": {
        "Id": "d5cd5e99-32b1-4962-a700-0f7e67e01d94",
        "Hash": "01C4D6D009165AD124B12ED3C62FED543E743EA7",
        "AircraftClassId": "607d854a-18f7-42ae-99f6-63b4b7f07f1a",
        "AircraftClass": {
          "Id": "607d854a-18f7-42ae-99f6-63b4b7f07f1a",
          "ShortName": "METL",
          "Name": "Multi-engine TurboProp Land",
          "Order": 7
        },
        "CreationDate": "2020-07-16T23:46:26.27",
        "LastModerationDate": "2021-04-08T12:16:04.183",
        "DisplayName": "Beechcraft King Air 350i",
        "TypeName": "Beechcraft King Air 350i Asobo",
        "FlightsCount": 44715,
        "TimeBetweenOverhaul": 2500,
        "HightimeAirframe": 20000,
        "AirportMinSize": 1,
        "emptyWeight": 9955,
        "maximumGrossWeight": 16500,
        "estimatedCruiseFF": 745,
        "Baseprice": 3029200,
        "FuelTotalCapacityInGallons": 538,
        "engineType": 5,
        "numberOfEngines": 2,
        "seats": 15,
        "needsCopilot": false,
        "fuelType": 1,
        "maximumCargoWeight": 5145,
        "maximumRangeInHour": 4.836538461538462,
        "maximumRangeInNM": 1509,
        "designSpeedVS0": 78,
        "designSpeedVS1": 100.01455986868227,
        "designSpeedVC": 312,
        "IsDisabled": false,
        "LuxeFactor": 0,
        "GliderHasEngine": false,
        "StandardSeatWeight": 63,
        "IsFighter": false
      },
      "Nickname": "26/06/2023 21:57:17 set idle 9",
      "WorldId": "c83eb5d5-9dc5-452f-b261-69b45cb0951b",
      "CurrentAirportId": "b8c8301a-3193-4fc3-ac54-c435aa4a38f4",
      "AircraftStatus": 0,
      "LastStatusChange": "2023-06-26T21:57:17.02",
      "CurrentStatusDurationInMinutes": 0,
      "AllowSell": true,
      "AllowRent": true,
      "AllowLease": true,
      "SellPrice": 3040000,
      "RentHourPrice": 6390,
      "RentCompanyId": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
      "AircraftLeaseId": "56c23875-60c4-45b5-912f-570e027e4c81",
      "Identifier": "N2676M",
      "Heading": 272.01173172499443,
      "Longitude": -112.0087445032627,
      "Latitude": 33.4409583382238,
      "fuelTotalGallons": 176.52522686123848,
      "fuelWeight": 0,
      "Altitude": 0,
      "FlightState": 0,
      "loadedWeight": 0,
      "zeroFuelWeight": 0,
      "airframeHours": 3157.110658611111,
      "airframeCondition": 0.9254672096666665,
      "AirframeMaxCondition": 0.9975155736555555,
      "LastAnnualCheckup": "2023-05-31T19:57:27.103",
      "Last100hInspection": "2023-06-15T19:57:27.103",
      "LastWeeklyOwnershipPayment": "2023-06-15T19:57:27.077",
      "LastParkingFeePayment": "2023-07-08T05:18:45.9",
      "IsControlledByAI": false,
      "HoursBefore100HInspection": 72.88934138888887,
      "ConfigFirstSeats": 0,
      "ConfigBusSeats": 0,
      "ConfigEcoSeats": 15,
      "SeatsReservedForEmployees": 0,
      "LastMagicTransportationDate": "2023-06-15T19:57:27.077",
      "CurrentCompanyId": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
      "CurrentCompanyIdIfAny": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
      "ExtraWeightCapacity": 0,
      "TotalWeightCapacity": 5145,
      "CurrentSeats": 15,
      "MustDoMaintenance": false
    },
    "Company": {
      "Id": "0c266190-5adb-463d-a6ee-3a5b0ee8b23b",
      "WorldId": "c83eb5d5-9dc5-452f-b261-69b45cb0951b",
      "Name": "Tangent Airways",
      "AirlineCode": "TANG",
      "LastConnection": "2023-07-08T14:48:46",
      "LastReportDate": "2023-06-03T00:00:00",
      "Reputation": 0.41603209681852066,
      "CreationDate": "2021-07-04T22:50:12.73",
      "DifficultyLevel": 2,
      "UTCOffsetinHours": 0,
      "Paused": false,
      "Level": 12,
      "LevelXP": 3402,
      "TransportEmployeeInstant": false,
      "TransportPlayerInstant": false,
      "ForceTimeInSimulator": true,
      "UseSmallAirports": true,
      "UseOnlyVanillaAirports": false,
      "EnableSkillTree": true,
      "CheckrideLevel": 2,
      "EnableLandingPenalities": true,
      "EnableEmployeesFlightDutyAndSleep": true,
      "AircraftRentLevel": 2,
      "EnableCargosAndChartersLoadingTime": true,
      "InSurvival": true,
      "PayBonusFactor": 0,
      "EnableSimFailures": true,
      "DisableSeatsConfigCheck": false,
      "LastSwapDate": "2023-01-31T21:10:03.77",
      "RealisticSimProcedures": true,
      "TravelTokens": 10,
      "SkillTreeResetCount": 1,
      "IndustryPoints": 0,
      "TotalIndustryPoints": 50,
      "TotalContractsCompleted": 0,
      "TotalContractsEarnedCredits": 0
    },
    "Crews": [],
    "Actions": [
      {
        "Id": "18958f47-c820-42a0-9b5b-156f961e5acd",
        "WorkOrderId": "a7dc4cfa-3403-4227-9f38-9d61323103f8",
        "Status": 0,
        "Order": 1,
        "FuelToLoadGallons": 176.52522686123848,
        "DontLoadFuel": false,
        "Loads": [],
        "Passengers": [],
        "Step": 0,
        "WaitingForCargoPAX": false,
        "FinishedAtAlternate": false,
        "ForceCrewToRestAtEnd": false
      }
    ],
    "DepartureAirportId": "b8c8301a-3193-4fc3-ac54-c435aa4a38f4",
    "Status": 0
  }
]
```
