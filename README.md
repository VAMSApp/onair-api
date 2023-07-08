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

## Example using Javascript
```javascript
import OnAirApi from 'onair-api'

// define the prerequisite keys
// apiKey and companyId can be found in the lower left corner of the options screen within the OnAir Desktop client
const apikey = 'YOUR-API-KEY'
const companyId = 'YOUR-COMPANY-ID'

// instantiate the OnAirApi
const Api = new OnAirApi({ apiKey, companyId });

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
- [getCompanyJobs](#getcompanyjobscompleted--false)
- [getCompanyEmployees](#getCompanyEmployees)
- [getCompanyCashFlow](#getCompanyCashFlow)
- [getCompanyIncomeStatement](#getcompanyincomestatementstartdate-string-enddate-string)
- [getCompanyBalanceSheet](#getcompanybalancesheet)
- [getCompanyWorkOrders](#getcompanyworkorders)
- [getCompanyNotifications](#getCompanyNotifications)
- [getAircraft](#getAircraftaircraftId-string)
- [getAircraftFlights](#getAircraftFlights)
- [getAirport](#getAirportairportCode-string)
- [getFlight](#getFlightflightId-string)
- [getVirtualAirlineMembers](#getVirtualAirlineMembers)
- [getVirtualAirline](#getVirtualAirline)
- [getVirtualAirlineShareHolders](#getVirtualAirlineShareHolders)
- [getVirtualAirlineRoles](#getVirtualAirlineRoles)
- [getVirtualAirlineFlights](#getVirtualAirlineFlights)
- [getVirtualAirlineFleet](#getVirtualAirlineFleet)
- [getVirtualAirlineJobs](#getVirtualAirlineJobs)
- [getVirtualAirlineNotifications](#getVirtualAirlineNotifications)
- [getVirtualAirlineIncomeStatement](#getvirtualairlineincomestatementstartdate-string-enddate-string)
- [getEmployee](#getemployeeemployeeid-string)

### [getCompany(companyId?:string)](src/api/getCompany.ts)
Fetches the company details for the given companyId.
#### Usage
```typescript
import OnAirApi, { Company, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyDetails: Company = await api.getCompany();
// or pass another companyId as the first argument
let companyDetails: Company[] = await api.getCompanyFbos(companyId);
```
#### Example Response
 - [getCompany.md](docs/responses/getCompany.md)



### [getCompanyFbos(companyId?:string)](src/api/getCompanyFbos.ts)
Fetches the FBOs for a given companyId.
#### Usage
```typescript
import OnAirApi, { Fbo, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyFbos: Fbo[] = await api.getCompanyFbos();
// or pass another companyId as the first argument
let companyFbos: Fbo[] = await api.getCompanyFbos(companyId);
```

#### Example Response
 - [getCompanyFbos.md](docs/responses/getCompanyFbos.md)


### [getCompanyFleet(companyId?:string)](src/api/getCompanyFleet.ts)
Fetches the aircraft that are owned, leased, or rented for a given companyId.

#### Usage
```typescript
import OnAirApi, { Aircraft, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyFleet: Aircraft[] = await api.getCompanyFleet();
// or pass another companyId as the first argument
let companyFleet: Aircraft[] = await api.getCompanyFleet(companyId);
```
#### Example Response
 - [getCompanyFleet.md](docs/responses/getCompanyFleet.md)


### [getCompanyFlights(companyId?:string, page:number = 1, ](src/api/getCompanyFlights.ts)limit:number = 20)
Fetches the Flights for a given companyId.

#### Usage
```typescript
import OnAirApi, { Flight, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyFlights: Flight[] = await api.getCompanyFlights();
// or pass another companyId as the first argument
let companyFlights: Flight[] = await api.getCompanyFlights(companyId)
```

#### Example Response
 - [getCompanyFlights.md](docs/responses/getCompanyFlights.md)

### [getCompanyJobs(companyId?, completed = false)](src/api/getCompanyJobs.ts)
Fetches the pending jobs for a given companyId.
Pass `true` as the first argument to return completed jobs.

#### Usage
```typescript
import OnAirApi, { Job, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyJobs: Job[] = await api.getCompanyJobs();
// or pass in another companyId as the first argument to get the completed jobs for that company
let companyJobs: Job[] = await api.getCompanyJobs(companyId);

// pass true as the second argument to return the completed jobs for the Api instanciated companyId
let completedCompanyJobs: Job[] = await api.getCompanyJobs(undefined, true);
let companyJobs: Job[] = await api.getCompanyJobs(companyId, true);

```

#### Example Response
 - [getCompanyJobs.md](docs/responses/getCompanyJobs.md)

### [getCompanyEmployees()](src/api/getCompanyEmployees.ts)
Fetches the Persons currently employed by a given companyId.
#### Usage
```typescript
import OnAirApi, { People, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyEmployees: People[] = await api.getCompanyEmployees();
```

#### Example Response
 - [getCompanyEmployees.md](docs/responses/getCompanyEmployees.md)

### [getCompanyCashFlow()](src/api/getCompanyCashFlow.ts)
Fetches the cash flow for a given companyId.
#### Usage
```typescript
import OnAirApi, { CashFlow, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let companyCashFlow: CashFlow[] = await api.getCompanyCashFlow();
```

#### Example Response
 - [getCompanyCashFlow.md](docs/responses/getCompanyCashFlow.md)


---

### [getCompanyIncomeStatement(startDate: string, endDate: string)](src/api/getCompanyIncomeStatement.ts)
Fetches the income statement within a given range for a companyId.
If no startDate or endDate is provided it will return the last 30 days.

#### Usage
```typescript
import OnAirApi, { IncomeStatement, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
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


### [getCompanyBalanceSheet()](src/api/getCompanyBalanceSheet.ts)
Fetches the company's current balance sheet. Which provides a current snapshot of the financial status of a company.
#### Usage
```typescript
import OnAirApi, { BalanceSheet, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let balancesheet: BalanceSheet = await api.getCompanyBalanceSheet();
```

#### Example Response
 - [getCompanyBalanceSheet.md](docs/responses/getCompanyBalanceSheet.md)


### [getCompanyWorkOrders()](src/api/getCompanyWorkOrders.ts)
Fetches the company's currently generated work orders.
#### Usage
```typescript
import OnAirApi, { WorkOrder, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let workorders: WorkOrder = await api.getCompanyWorkOrders();
```

#### Example Response
 - [getCompanyWorkOrders.md](docs/responses/getCompanyWorkOrders.md)





### [getCompanyAircraftWorkOrders(aircraftId:string, companyId?:string)](src/api/getCompanyAircraftWorkOrders.ts)
Fetches the company's currently generated work orders for a given aircraft.
#### Usage
```typescript
import OnAirApi, { WorkOrder, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const aircraftId = '73baa73c-01e3-4aae-b99b-29cff83c7f37';
let workorders: WorkOrder = await api.getCompanyAircraftWorkOrders(aircraftId);
```

#### Example Response
 - [getCompanyAircraftWorkOrders.md](docs/responses/getCompanyAircraftWorkOrders.md)





### [getCompanyNotifications()](src/api/getCompanyNotifications.ts)
Fetches the recent notifications for the given companyId

#### Usage
```typescript
import OnAirApi, { Notification, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
// by default, will return the notifications for the Api instantiated companyId
let companyNotifications: Notification[] = await api.getCompanyNotifications();
// or
// pass a companyId as the first argument to load the notifications for the given Company
let someOtherCompaniesNotifications: Notification[] = await api.getCompanyNotifications('SOME-OTHER-COMPANY-ID');
```

#### Example Response
 - [getCompanyNotifications.md](docs/responses/getCompanyNotifications.md)



### [getAircraft(aircraftId: string)](src/api/getAircraft.ts)
Fetches the Aircraft details for a given aircraftId.

#### Usage
```typescript
import OnAirApi, { Aircraft, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const aircraftId = '9891d561-def7-438c-9097-d3336989af93';
let companyAircraft: Aircraft = await api.getAircraft(aircraftId);
```

#### Example Response
 - [getAircraft](docs/responses/getAircraft.md)


### [getAircraftFlights(aircraftId: string)](src/api/getAircraftFlights.ts)
Fetches the Flights flown for a given aircraftId.

#### Usage
```typescript
import OnAirApi, { Flight, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const aircraftId = '9891d561-def7-438c-9097-d3336989af93';
let companyAircraftFlights: Flight[] = await api.getAircraftFlights(aircraftId);
```

#### Example Response
 - [getAircraftFlights.md](docs/responses/getAircraftFlights.md)

### [getAirport(airportCode: string)](src/api/getAirport.ts)
Fetches Airport details for a given airport Code.

#### Usage
```typescript
import OnAirApi, { Airport, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const airportCode = 'KLAX';
let airport: Airport = await api.getAirport(airportCode);
```

#### Example Response
 - [getAirport.md](docs/responses/getAirport.md)



### [getFlight(flightId: string)](src/api/getFlight.ts)
Fetches Flight details for a given flightId.

#### Usage
```typescript
import OnAirApi, { Flight, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const flightId = '9891d561-def7-438c-9097-d3336989af93';
let flight: Flight = await api.getFlight(flightId);
```

#### Example Response
 - [getFlight.md](docs/responses/getFlight.md)


### [getVirtualAirline()](src/api/getVirtualAirline.ts)
Fetches VirtualAirline details for a given vaId. Note: this requires the vaId to be provided during Api instantiation

#### Usage
```typescript
import OnAirApi, { VirtualAirline, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let va: VirtualAirline = await api.getVirtualAirline();
```

#### Example Response
 - [getVirtualAirline.md](docs/responses/getVirtualAirline.md)


### [getVirtualAirlineMembers()](src/api/getVirtualAirlineMembers.ts)
Fetches the members of a Virtual Airline for a given vaId.

#### Usage
```typescript
import OnAirApi, { Member, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let vaMembers: Member[] = await api.getVirtualAirlineMembers();
```
#### Example Response
  - [getVirtualAirlineMembers.md](docs/responses/getVirtualAirlineMembers.md)


### [getVirtualAirlineShareHolders()](src/api/getVirtualAirlineShareHolders.ts)
Fetches the ShareHolders of a Virtual Airline for a given vaId.

#### Usage
```typescript
import OnAirApi, { ShareHolder, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let vaShareHolders: ShareHolder[] = await api.getVirtualAirlineShareHolders();
```

#### Example Response
 - [getVirtualAirlineShareHolders.md](docs/responses/getVirtualAirlineShareHolders.md)


### [getVirtualAirlineRoles()](src/api/getVirtualAirlineRoles.ts)
Fetches the Roles for a given vaId.

#### Usage
```typescript
import OnAirApi, { VARole, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let roles: VARole[] = await api.getVirtualAirlineRoles();
```

#### Example Response
 - [getVirtualAirlineRoles.md](docs/responses/getVirtualAirlineRoles.md)

### [getVirtualAirlineFlights()](src/api/getVirtualAirlineFlights.ts)
Fetches the Roles for a given vaId.

#### Usage
```typescript
import OnAirApi, { Flight, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let vaFlights: Flight[] = await api.getVirtualAirlineFlights();
```

#### Example Response
 - [getVirtualAirlineFlights.md](docs/responses/getVirtualAirlineFlights.md)



### [getVirtualAirlineFleet()](src/api/getVirtualAirlineFleet.ts)
Fetches the Roles for a given vaId.

#### Usage
```typescript
import OnAirApi, { Aircraft, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let vaFleet: Aircraft[] = await api.getVirtualAirlineFleet();
```

#### Example Response
 - [getVirtualAirlineFleet.md](docs/responses/getVirtualAirlineFleet.md)




### [getVirtualAirlineJobs()](src/api/getVirtualAirlineJobs.ts)
Fetches the current pending jobs for the given VA

#### Usage
```typescript
import OnAirApi, { Job, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let vaJobs: Job[] = await api.getVirtualAirlineJobs();
```

#### Example Response
 - [getVirtualAirlineJobs.md](docs/responses/getVirtualAirlineJobs.md)




### [getVirtualAirlineWorkOrders(virtualAirlineId?:string)](src/api/getVirtualAirlineWorkOrders.ts)
Fetches the Virtual Airline's currently generated work orders.
#### Usage
```typescript
import OnAirApi, { WorkOrder, OnAirApiConfig, } from 'onair-api'


const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
let workorders: WorkOrder = await api.getVirtualAirlineWorkOrders();
```

#### Example Response
 - [getVirtualAirlineWorkOrders.md](docs/responses/getVirtualAirlineWorkOrders.md)





### [getVirtualAirlineNotifications()](src/api/getVirtualAirlineNotifications.ts)
Fetches the recent notifications for the given vaId

#### Usage
```typescript
import OnAirApi, { Notification, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
// by default, will return the notifications for the Api instantiated VA using the passed vaId
let vaNotifications: Notification[] = await api.getVirtualAirlineNotifications();
// or
// pass a valid VirtualAirline Id as the first argument to load the notifications for the given VA
let someOtherVAsNotifications: Notification[] = await api.getVirtualAirlineNotifications('SOME-OTHER-VA-ID');
```

#### Example Response
 - [getVirtualAirlineNotifications.md](docs/responses/getVirtualAirlineNotifications.md)




### [getVirtualAirlineIncomeStatement(vaId?:string, startDate?:string|undefined, endDate?:string|undefined)](src/api/getVirtualAirlineIncomeStatement.ts)
Fetches the income statement within a given range for a given vaId.
If no startDate or endDate is provided it will return the last 30 days. If either startDate or endDate is provided, it will return the last 30 days from the provided date.

#### Usage
```typescript
import OnAirApi, { IncomeStatement, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
// no startDate or endDate provided, returns the last 30 days
let virtualAirlineIncomeStatement: IncomeStatement = await api.getVirtualAirlineIncomeStatement();
// or
// providing a startDate and endDate
const startDate = '2021-12-01T00:00:00';
const endDate = '2022-01-30T02:58:39.104Z';

let virtualAirlineIncomeStatement2: IncomeStatement = await api.getVirtualAirlineIncomeStatement(startDate, endDate)
```

#### Example Response
 - [getVirtualAirlineIncomeStatement.md](docs/responses/getVirtualAirlineIncomeStatement.md)


### [getEmployee(employeeId: string)](src/api/getEmployee.ts)
Fetches details for a given employeeId.

#### Usage
```typescript
import OnAirApi, { People, OnAirApiConfig, } from 'onair-api'

const apiConfig: OnAirApiConfig = {
  apiKey: 'YOUR-API-KEY',
  companyId: 'YOUR-COMPANY-ID',
  vaId: 'YOUR-VA-ID'
};

const api: Api = new OnAirApi(apiConfig);
const employeeId = '596b6c2e-4ac7-44e9-b1d4-a4299030cb04';
let employee_details: People = await api.getEmployee(employeeId);
```

#### Example Response
 - [getEmployee.md](docs/responses/getEmployee.md)




---


## Examples

### Example using the dotenv package

```javascript
import 'dotenv/config'
import { OnAirApi, } from 'onair-api'

(async function () {
    const apiKey = process.env.COMPANY_APIKEY;
    const companyId = process.env.COMPANY_ID;
    const vaId = process.env.VIRTUAL_AIRLINE_ID;

    const Api = new OnAirApi({ apiKey, companyId, vaId, });

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
    const vaId = process.env.VIRTUAL_AIRLINE_ID;

    const api: Api = new OnAirApi({ apiKey, companyId, vaId, });

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
