
export type StatusResponse =
    200 |
    400 | 404 |
    500

export interface CustomResponse<T> {
    status: StatusResponse,
    message: string,
    data?: T
}