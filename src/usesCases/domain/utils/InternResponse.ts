

export interface InternResponse<T> {
    code: number,
    message?: string,
    data: T,
}

export const RESPONSE_NOT_FOUND: InternResponse<undefined> = {
    code: 404,
    message: "Not found it.",
    data: undefined,
}
