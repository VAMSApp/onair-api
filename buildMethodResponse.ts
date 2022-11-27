import 'dotenv/config'
import { OnAirApi, } from './src/index'
import { Company, Notification, Api, } from './src/types'
import fs from 'fs';

(async function (methods:string[]) {
    const {
        COMPANY_APIKEY,
        COMPANY_ID,
        VIRTUAL_AIRLINE_ID,
    } = process.env

    if (!COMPANY_APIKEY) throw new Error('No API Key provided')
    if (!COMPANY_ID) throw new Error('No Company ID provided')
    if (!VIRTUAL_AIRLINE_ID) throw new Error('No VA ID provided')

    const apiKey: string = COMPANY_APIKEY;
    const companyId: string = COMPANY_ID;
    const vaId: string = VIRTUAL_AIRLINE_ID;

    const api: Api = new OnAirApi({ apiKey, companyId, vaId, });

    methods.forEach(async (method) => {
        const methodName = method as keyof typeof api;

        const outputFile:string = `./docs/responses/${methodName}.md`
        let x:any = await api[methodName]();
        // only keep the first response in the docs
        if (Array.isArray(x) && x.length > 1) {
            x = x[0];
        }

        let contents:any = `## ${methodName}()\n\n\n`
        contents += `### response\n`
        contents += `\`\`\`javascript\n${JSON.stringify(x, null, 2)}\n\`\`\`\n\n`;

        fs.writeFile(outputFile, contents, (err:any) => {
            if (err) throw err;
            console.log(`The ${methodName} file has been saved! ✅`);
        });
    });
})([
    'getVirtualAirlineNotifications'
])
// typescript write results to file
