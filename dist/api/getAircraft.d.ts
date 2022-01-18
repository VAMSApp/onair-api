import { Aircraft } from '../types/Aircraft';
declare const getAircraft: (aircraftId: string, apiKey: string, world: string) => Promise<Aircraft>;
export default getAircraft;
