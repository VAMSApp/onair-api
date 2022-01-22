# API Middleware for OnAir Airline Manager
A node.js wrapper around the OnAir Airline Manager's public API.

## Example

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