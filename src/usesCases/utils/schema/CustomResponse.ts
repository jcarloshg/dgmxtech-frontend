import { ResponseStatus } from "../types/ResponseStatus.type";

export interface CustomResponse<T> {
    status: ResponseStatus,
    data: T
}