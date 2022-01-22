# API Middleware for OnAir Airline Manager
A node.js wrapper around the OnAir Airline Manager's public API.

### Examples

### Example using the dotenv package

```javascript
import 'dotenv/config'
import { OnAirApi, } from 'onair-api'

(async function () {
    const apiKey = process.env.COMPANY_APIKEY;
    const companyId = process.env.COMPANY_ID;
    const world = process.env.COMPANY_WORLD;
    
    const Api = new OnAirApi(apiKey, companyId, world);
    
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
    
    const api = new OnAirApi(apiKey, companyId, world);
    
    let company: Company = await api.getCompanyDetails();
    let fleet: Aircraft[] = await api.getCompanyFleet();

    console.log({
        company,
        fleet,
    });
})();
```

## Methods
### getCompanyDetails()
### getCompanyFleet()
### getCompanyFbos()
### getCompanyFlights()
### getCompanyJobs()
### getAircraft(aircraftId: string)
### getAircraftFlights(aircraftId: string)
### getAirport(airportCode: string)
### getFlight(flightId: string)
### getVirtualAirline()
### getVirtualAirlineMembers()