# API Middleware for OnAir Airline Manager 
A node.js wrapper around the OnAir Airline Manager's public API.

[![NPM Version](https://img.shields.io/npm/v/onair-api.svg)](https://www.npmjs.com/package/onair-api)
[![Build Status][build-image]][build-url]

## Installation
`npm i -s onair-api`

## Usage

**The required apiKey and optional companyId** can be found in the lower left corner of the options screen within the OnAir Desktop client, if You need additional help locating these ID's check the [How To](https://github.com/vams-app/onair-api/wiki/How-To-find-your-OnAir-Company-and-VA-Id's-and-Api-Key) in the wiki.

* apiKey
* companyId - *Optional*, but required for all `getCompany*` methods
* vaId - *Optional*, only required if using either of the VA methods `getVirtualAirline` or `getVirtualAirlineMembers`

### Example using Javascript
```javascript
import OnAirApi from 'onair-api'

// define the prerequisite keys, and world
// apiKey and companyId can be found in the lower left corner of the options screen within the OnAir Desktop client
const apikey = 'YOUR-API-KEY'
const world = 'cumulus' // one of, cumulus, stratus, thunder. Use 'stratus' for clear-sky world
const companyId = 'YOUR-COMPANY-ID'

// instantiate the OnAirApi
const Api = new OnAirApi({ apiKey, world, companyId });

/**
 * call one of the Api methods, like getCompanyDetails
 * which will query the OnAir API using the above credentials
 * and returns the company details
 */
let company = await Api.getCompanyDetails();
// do something with the company data

```
---
## Methods

### getCompanyDetails()
Fetches the company details for the given companyId, and world.
#### Usage
```typescript
import OnAirApi from 'onair-api'
import { Api, Company, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world, companyId });
let companyDetails: Company = await api.getCompanyDetails();
```

#### Example response
```javascript
{
  Id: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
  WorldId: 'ad3ec8a4-246e-4abb-84a9-9dbc43bb6ae6',
  Name: 'NDBB Airways',
  AirlineCode: 'NDBB',
  LastConnection: '2022-01-21T18:27:11.597',
  LastReportDate: '2022-01-02T00:00:00',
  Reputation: 0.7151961959318697,
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
}
```


### getCompanyFleet()
Fetches the aircraft that are owned, leased, or rented for a given companyId, and world.
#### Usage
```typescript
import OnAirApi from 'onair-api'
import { Api, Aircraft, OnAirApiConfig, } from 'onair-api/src/types'

const apiConfig: OnAirApiConfig = {
    apiKey: 'd17eaa85-aad5-429b-9297-fe2e6deca5d9',
    world: 'cumulus', // cumulus, stratus or, thunder. Cler Sky world, use stratus
    companyid: 'c3d8e51d-f2e9-4918-a2a6-c3f2cd5ab141', // Optional, but required for all `getCompany*` methods
    vaId: 'cd7df229-c5ff-4528-b74f-688b98c808fe', // Optional, only required if using either of the VA methods `getVirtualAirline` or `getVirtualAirlineMembers`
};

const api: Api = new OnAirApi(apiConfig);
let fleet: Aircraft[] = await api.getCompanyFleet();

```

#### Example Response
```javascript
// wip, array of aircraft objects
```


### getCompanyFbos()
Fetches the FBOs for a given companyId, and world.
#### Usage
```typescript
import OnAirApi from 'onair-api'
import { Api, Fbo, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world, companyId });
let companyFbos: Fbo[] = await api.getCompanyFbos();
```

#### Example Response
```javascript
// wip, array of FBO objects
```


### getCompanyFlights()
Fetches the Flights for a given companyId, and world.
#### Usage
```typescript
import OnAirApi from 'onair-api'
import { Api, Flight, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world, companyId });
let companyFlights: Flight[] = await api.getCompanyFlights();
```

#### Example Response
```javascript
// wip, array of Flight objects
```


### getCompanyJobs()
Fetches the **pending** jobs for a given companyId, and world.
#### Usage
```typescript
import { OnAirApi } from 'onair-api'
import { Api, Job, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world, companyId });
let companyFlights: Job[] = await api.getCompanyJobs();
```

#### Example Response
```javascript
// wip, array of Job objects
```


### getAircraft(aircraftId: string)
Fetches the Aircraft details for a given aircraftId and world.
#### Usage
```typescript
import OnAirApi from 'onair-api'
import { Api, Aircraft, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world });
const aircraftId: string = '9891d561-def7-438c-9097-d3336989af93';
let aircraft: Aircraft = await api.getAircraft(aircraftId);
```

#### Example Response
```javascript
// wip, Aircraft object
```


### getAircraftFlights(aircraftId: string)
Fetches the Flights flown for a given aircraftId.
#### Usage
```typescript
import OnAirApi from 'onair-api'
import { Api, Aircraft, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world });
const aircraftId: string = '9891d561-def7-438c-9097-d3336989af93';
let aircraft: Aircraft = await api.getAircraft(aircraftId);
```

#### Example Response
```javascript
// wip, Aircraft object
```


### getAirport(airportCode: string)
Fetches Airport details for a given airport **Code** and world.
#### Usage
```typescript
import { OnAirApi } from 'onair-api'
import { Api, Airport, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world });
const airportCode: string = 'KLAX';// Los Angeles Intel Airport ICAO
let aircraft: Airport = await api.getAirport(airportCode);
```

#### Example Response
```javascript
// wip, Aircraft object
```


### getFlight(flightId: string)
Fetches Flight details for a given flightId and world.
#### Usage
```typescript
import { OnAirApi } from 'onair-api'
import { Api, Flight, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world });
const flightId: string = '9891d561-def7-438c-9097-d3336989af93';
let flight: Flight = await api.getFlight(flightId);
```

#### Example Response
```javascript
// wip, Aircraft object
```


### getVirtualAirline()
Fetches VirtualAirline details for a given vaId, and world.
**Note**: this requires the vaId to be provided during Api instantiation
#### Usage
```typescript
import { OnAirApi } from 'onair-api'
import { Api, VirtualAirline, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world, companyId, vaId });
let va: VirtualAirline = await api.getVirtualAirline();
```

#### Example Response
```javascript
// wip, VirtualAirline object
```



### getVirtualAirlineMembers()
Fetches the members of a Virtual Airline for a given vaId, and world.
#### Usage
```typescript
import { OnAirApi } from 'onair-api'
import { Api, Member, } from 'onair-api/src/types'
const api: Api = new OnAirApi({ apiKey, world, companyId, vaId });
let members: Member[] = await api.getVirtualAirlineMembers();
```

#### Example Response
```javascript
// wip, Member object
```
---

## Examples

### Example using the dotenv package

```javascript
import 'dotenv/config'
import { OnAirApi, } from 'onair-api'

(async function () {
    const apiKey = process.env.COMPANY_APIKEY;
    const companyId = process.env.COMPANY_ID;
    const world = process.env.COMPANY_WORLD;
    
    const Api = new OnAirApi({ apiKey, companyId, world });
    
    let company = await Api.getCompanyDetails();
    let fleet = await Api.getCompanyFleet();

    console.log({
        company,
        fleet,
    });
})();
```
### Typescript Example using dotenv package and onair-api types

```typescript
import 'dotenv/config'
import { OnAirApi, } from 'onair-api'
import { Company, Aircraft, Api, } from 'onair-api/src/types'

(async function () {
    const apiKey: string = process.env.COMPANY_APIKEY;
    const companyId: string = process.env.COMPANY_ID;
    const world: string = process.env.COMPANY_WORLD;
    
    const api = new OnAirApi({ apiKey, companyId, world });
    
    let company: Company = await api.getCompanyDetails();
    let fleet: Aircraft[] = await api.getCompanyFleet();

    console.log({
        company,
        fleet,
    });
})();
```



[npm-url]: https://www.npmjs.com/package/onair-api
[build-image]: https://app.travis-ci.com/vams-app/onair-api.svg?branch=main
[build-url]: https://app.travis-ci.com/vams-app/onair-api