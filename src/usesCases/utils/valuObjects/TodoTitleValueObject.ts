import { ErrorValueObject } from "../erros/Error.ValueObject";
import { ValueObject } from "./ValueObject";

export class TodoTitleValueObject extends ValueObject<string> {


    constructor(title: string) {
        super(title)

        if (this._isValid(title)) return

        const RULES_STRING: string = "The Title must not be empty."
        const MESSAGE_TO_ERROR: string = `The value [${title}] is invalid. ${RULES_STRING}`
        throw new ErrorValueObject(MESSAGE_TO_ERROR)
    }


    private _isValid(value: string): boolean {
        if (value.length === 0) return false; // is empty
        return true;

    }



}