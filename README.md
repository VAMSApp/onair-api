# Typescript/Javascript package for querying the OnAir API
A Typescript/Javascript wrapper around the OnAir Airline Manager's API.

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
 * call one of the Api methods, like getCompany
 * which will query the OnAir API using the above credentials
 * and returns the company details
 */
let company = await Api.getCompany();
// do something with the company data

```
---
## Methods

- [getCompany](#getCompany)
- [getCompanyFbos](#getCompanyFbos)
- [getCompanyFleet](#getCompanyFleet)
- [getCompanyFlights](#getCompanyFlights)
- [getCompanyJobs](#getCompanyJobs-completed-false)
- [getCompanyEmployees](#getCompanyEmployees)
- [getCompanyCashFlow](#getCompanyCashFlow)
- [getCompanyIncomeStatement](#getcompanyincomestatementstartdate-string-enddate-string)
- [getCompanyBalanceSheet](#getcompanybalancesheet)
- [getAircraft](#getAircraftaircraftId-string)
- [getAircraftFlights](#getAircraftFlights)
- [getAirport](#getAirportairportCode-string)
- [getFlight](#getFlightflightId-string)
- [getVirtualAirlineMembers](#getVirtualAirlineMembers)
- [getVirtualAirline](#getVirtualAirline)
- [getVirtualAirlineShareHolders](#getVirtualAirlineShareHolders)
- [getVirtualAirlineRoles](#getVirtualAirlineRoles)


### getCompany()
Fetches the company details for the given companyId, and world.
#### Usage
```typescript
import OnAirApi, { Company, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyDetails: Company = await api.getCompany();
```
#### Example Response
 - [getCompany.md](docs/responses/getCompany.md)



### getCompanyFbos()
Fetches the FBOs for a given companyId, and world.
#### Usage
```typescript
import OnAirApi, { Fbo, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyFbos: Fbo[] = await api.getCompanyFbos();
```

#### Example Response
 - [getCompanyFbos.md](docs/responses/getCompanyFbos.md)


### getCompanyFleet()
Fetches the aircraft that are owned, leased, or rented for a given companyId, and world.

#### Usage
```typescript
import OnAirApi, { Aircraft, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyFleet: Aircraft[] = await api.getCompanyFleet();
```
#### Example Response
 - [getCompanyFleet.md](docs/responses/getCompanyFleet.md)


### getCompanyFlights()
Fetches the Flights for a given companyId, and world.

#### Usage
```typescript
import OnAirApi, { Flight, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyFlights: Flight[] = await api.getCompanyFlights();
```

#### Example Response
 - [getCompanyFlights.md](docs/responses/getCompanyFlights.md)

### getCompanyJobs(completed = false)
Fetches the pending jobs for a given companyId, and world.
Pass `true` as the first argument to return completed jobs.

#### Usage
```typescript
import OnAirApi, { Job, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyJobs: Job[] = await api.getCompanyJobs();
// pass true as the first argument to return the completed jobs
let completedCompanyJobs: Job[] = await api.getCompanyJobs(true);

```

#### Example Response
 - [getCompanyJobs.md](docs/responses/getCompanyJobs.md)

### getCompanyEmployees()
Fetches the Persons currently employed by a given companyId and world.
#### Usage
```typescript
import OnAirApi, { People, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyEmployees: People[] = await api.getCompanyEmployees();
```

#### Example Response
 - [getCompanyEmployees.md](docs/responses/getCompanyEmployees.md)

### getCompanyCashFlow()
Fetches the cash flow for a given companyId and world.
#### Usage
```typescript
import OnAirApi, { CashFlow, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyCashFlow: CashFlow[] = await api.getCompanyCashFlow();
```

#### Example Response
 - [getCompanyCashFlow.md](docs/responses/getCompanyCashFlow.md)


---

### getCompanyIncomeStatement(startDate: string, endDate: string)
Fetches the income statement within a given range for a companyId and world.
If no startDate or endDate is provided it will return the last 30 days.

#### Usage
```typescript
import OnAirApi, { IncomeStatement, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
// no startDate or endDate provided, returns 30 days
let companyIncomeStatement: IncomeStatement = await api.getCompanyIncomeStatement();

// providing a startDate and endDate
const startDate = '2021-12-01T00:00:00';
const endDate = '2022-01-30T02:58:39.104Z';

let companyIncomeStatement2: IncomeStatement = await api.getCompanyIncomeStatement(startDate, endDate)
```

#### Example Response
 - [getCompanyIncomeStatement.md](docs/responses/getCompanyIncomeStatement.md)

### getCompanyBalanceSheet()
Fetches the company's current balance sheet. Which provides a current snapshot of the financial status of a company.
#### Usage
```typescript
import OnAirApi, { BalanceSheet, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let balancesheet: BalanceSheet = await api.getCompanyBalanceSheet();
```

#### Example Response
 - [getCompanyBalanceSheet.md](docs/responses/getCompanyBalanceSheet.md)


### getAircraft(aircraftId: string)
Fetches the Aircraft details for a given aircraftId and world.

#### Usage
```typescript
import OnAirApi, { Aircraft, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const aircraftId = '9891d561-def7-438c-9097-d3336989af93';
let companyAircraft: Aircraft = await api.getAircraft(aircraftId);
```

#### Example Response
 - [getAircraft](docs/responses/getAircraft.md)


### getAircraftFlights(aircraftId: string)
Fetches the Flights flown for a given aircraftId.

#### Usage
```typescript
import OnAirApi, { Flight, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const aircraftId = '9891d561-def7-438c-9097-d3336989af93';
let companyAircraftFlights: Flight[] = await api.getAircraftFlights(aircraftId);
```

#### Example Response
 - [getAircraftFlights.md](docs/responses/getAircraftFlights.md)

### getAirport(airportCode: string)
Fetches Airport details for a given airport Code and world.

#### Usage
```typescript
import OnAirApi, { Airport, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const airportCode = 'KLAX';
let airport: Airport = await api.getAirport(airportCode);
```

#### Example Response
 - [getAirport.md](docs/responses/getAirport.md)


### getFlight(flightId: string)
Fetches Flight details for a given flightId and world.

#### Usage
```typescript
import OnAirApi, { Flight, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const flightId = '9891d561-def7-438c-9097-d3336989af93';
let flight: Flight = await api.getFlight(flightId);
```

#### Example Response
 - [getFlight.md](docs/responses/getFlight.md)

### getVirtualAirline()
Fetches VirtualAirline details for a given vaId, and world. Note: this requires the vaId to be provided during Api instantiation

#### Usage
```typescript
import OnAirApi, { VirtualAirline, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let va: VirtualAirline = await api.getVirtualAirline();
```

#### Example Response
 - [getVirtualAirline.md](docs/responses/getVirtualAirline.md)


### getVirtualAirlineMembers()
Fetches the members of a Virtual Airline for a given vaId, and world.

#### Usage
```typescript
import OnAirApi, { Member, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let vaMembers: Member[] = await api.getVirtualAirlineMembers();
```
#### Example Response
  - [getVirtualAirlineMembers.md](docs/responses/getVirtualAirlineMembers.md)

### getVirtualAirlineShareHolders()
Fetches the ShareHolders of a Virtual Airline for a given vaId, and world.

#### Usage
```typescript
import OnAirApi, { ShareHolder, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let vaShareHolders: ShareHolder[] = await api.getVirtualAirlineShareHolders();
```

#### Example Response
 - [getVirtualAirlineShareHolders.md](docs/responses/getVirtualAirlineShareHolders.md)
### getVirtualAirlineRoles()
Fetches the Roles for a given vaId and world.

#### Usage
```typescript
import OnAirApi, { VARole, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  world: 'cumulus',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let roles: VARole[] = await api.getVirtualAirlineRoles();
```

#### Example Response
 - [getVirtualAirlineRoles.md](docs/responses/getVirtualAirlineRoles.md)



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
