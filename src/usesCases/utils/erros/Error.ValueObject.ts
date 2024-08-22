import { CustomResponse } from "./CustomResponse"

export class ErrorValueObject extends Error {


    constructor(message: string) {
        super(message)
        this.name = "ErrorValueObject"
    }


    static generateCustomResponse(message: string): CustomResponse<undefined> {
        const CustomResponse: CustomResponse<undefined> = { status: 400, message: message }
        return CustomResponse;
    }

}