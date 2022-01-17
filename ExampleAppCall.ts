import 'dotenv/config'
import OnAirApi from './dist/app'

const apiKey: string = process.env.COMPANY_APIKEY;
const companyId: string = process.env.COMPANY_ID;
const world: string = process.env.COMPANY_WORLD;

const Api: OnAirApi = new OnAirApi(apiKey, companyId, world)