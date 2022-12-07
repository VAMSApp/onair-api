import { validate} from 'uuid';

export function isValidGuid(guid:string): boolean {
    return validate(guid);
}
