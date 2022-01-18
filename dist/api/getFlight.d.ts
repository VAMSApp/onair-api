import { Flight } from '../types/Flight';
export declare const getFlight: (flightId: string, apiKey: string, world: string) => Promise<Flight>;
export default getFlight;
