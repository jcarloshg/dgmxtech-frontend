import { ErrorValueObject } from "../erros/Error.ValueObject";
import { ValueObject } from "./ValueObject";

export class TodoDescriptionValueObject extends ValueObject<string> {


    constructor(description: string) {
        super(description)

        if (this._isValid(description)) return

        const RULES_STRING: string = "The Description must not be empty."
        const MESSAGE_TO_ERROR: string = `The value [${description}] is invalid. ${RULES_STRING}`
        throw new ErrorValueObject(MESSAGE_TO_ERROR)
    }


    private _isValid(value: string): boolean {
        if (value.length === 0) return false; // is empty
        return true;

    }



}