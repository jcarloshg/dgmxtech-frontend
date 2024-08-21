import { InternResponse } from "../utils/InternResponse"
import fs from 'fs'

export interface FilesRepository {
    upload: (data: fs.ReadStream) => Promise<InternResponse<any>>
    download: (filename: string) => Promise<InternResponse<any>>
}