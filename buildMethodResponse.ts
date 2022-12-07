import 'dotenv/config'
import { OnAirApi, } from './src/index'
import { IOnAirApi, } from './src/types'
import fs from 'fs';

(async function (methods:string[]) {
    const {
        COMPANY_APIKEY,
        COMPANY_ID,
        VIRTUAL_AIRLINE_ID,
    } = process.env

    if (!COMPANY_APIKEY) throw new Error('No API Key provided')
    if (!COMPANY_ID) throw new Error('No Company Id provided')
    if (!VIRTUAL_AIRLINE_ID) throw new Error('No VA ID provided')

    const apiKey: string = COMPANY_APIKEY;
    const companyId: string = COMPANY_ID;
    const vaId: string = VIRTUAL_AIRLINE_ID;

    const api:IOnAirApi = new OnAirApi({ apiKey, companyId, vaId, });

    methods.forEach(async (method) => {
        const methodName = method as keyof typeof api;

        const outputFile:string = `./docs/responses/${methodName}.md`
        let methodId:string|undefined = undefined;
        let x:any;

        switch (methodName) {
            case 'getAircraft':
                methodId = 'd8a921a5-4774-4530-b75e-14b41545cabc'
                x = await api[methodName](methodId);
                break;
            case 'getAircraftFlights':
                methodId = 'd8a921a5-4774-4530-b75e-14b41545cabc'
                x = await api[methodName](methodId);
            case 'getAirport':
                methodId = 'd8a921a5-4774-4530-b75e-14b41545cabc'
                x = await api[methodName](methodId);
            case 'getFlight':
                methodId = 'd8a921a5-4774-4530-b75e-14b41545cabc'
                x = await api[methodName](methodId);
            case 'getEmployee':
                methodId = 'd8a921a5-4774-4530-b75e-14b41545cabc'
                x = await api[methodName](methodId);
            break;
            default:
                x = await api[methodName]();
            break;
        }

        if (!x) return;

        // only keep the first response in the docs
        if (Array.isArray(x) && x.length > 1) {
            x = x[0];
        }

        let contents:string = `## ${methodName}()\n\n\n` // header for the method name
        contents += `### response\n` // header for the response
        contents += `\`\`\`javascript\n` // code block start
        const response:string = JSON.stringify(x, null, 2) // stringify and format the response
        contents +=`${response}\n`; // insert the stringified response into the code block
        contents += `\`\`\`\n\n` // code block end

        fs.writeFile(outputFile, contents, (err:any) => {
            if (err) throw err;
            console.log(`The ${methodName} file has been saved! ✅`);
        });
    });
})([
    'getVirtualAirlineNotifications'
])
// typescript write results to file
