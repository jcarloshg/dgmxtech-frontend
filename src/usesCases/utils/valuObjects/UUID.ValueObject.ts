import { ErrorValueObject } from '../erros/Error.ValueObject';
import { ValueObject } from './ValueObject';

export class UUIDValueObject extends ValueObject<string> {


    constructor(uuid: string) {

        super(uuid);

        if (this._isValid(uuid)) return

        const RULES_STRING: string = "Check the structure of UUID."
        const MESSAGE_TO_ERROR: string = `The value [${uuid}] is invalid. ${RULES_STRING}`
        throw new ErrorValueObject(MESSAGE_TO_ERROR)

    }


    private _isValid(value: string): boolean {
        const regex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
        return regex.test(value);
    }


}