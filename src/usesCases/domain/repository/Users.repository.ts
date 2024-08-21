import { InternResponse } from "../utils/InternResponse"
import fs from 'fs'

export interface UsersRepository {
    create: (data: {}) => Promise<InternResponse<any>>
    list: () => Promise<InternResponse<any>>
}