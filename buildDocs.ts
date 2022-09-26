import OnAirApi, { Aircraft, Api, Flight, OnAirApiConfig, } from './src/index'
import { readFileSync, writeFileSync, promises as fsPromises } from 'fs'
import { join } from 'path'

const apiConfig: OnAirApiConfig = {
    companyId: '0c266190-5adb-463d-a6ee-3a5b0ee8b23b',
    apiKey: '5f049635-9a45-4377-b289-b1c953334631',
    vaId: '381b8a89-85c0-4bae-a050-f99b916aa632',
};

function syncWriteFile(filename: string, data: any) {
    /**
     * flags:
     *  - w = Open file for reading and writing. File is created if not exists
     *  - a+ = Open file for reading and appending. The file is created if not exists
     */
    writeFileSync(join(__dirname, filename), data, {
      flag: 'w',
    });

    const contents = readFileSync(join(__dirname, filename), 'utf-8');
    return contents;
}

async function main() {
    const api: Api = new OnAirApi(apiConfig);
    let x: Aircraft[] = await api.getVirtualAirlineFleet();

    syncWriteFile('./docs/responses/getVirtualAirlineFleet.json', JSON.stringify(x, null, 2))
}

main()
