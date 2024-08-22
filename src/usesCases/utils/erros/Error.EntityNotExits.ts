import { CustomResponse } from "./CustomResponse"

export class ErrorEntityNotExits extends Error {


    constructor({ entityName }: { entityName: string }) {
        super(`The entity [${entityName}] doesn't exist`)
        this.name = "ErrorEntityNotExits"
    }


    static generateCustomResponse(message: string): CustomResponse<undefined> {
        const CustomResponse: CustomResponse<undefined> = { status: 404, message: message }
        return CustomResponse;
    }

}