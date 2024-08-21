
import { AWS_BUCKET_NAME } from '@/utils/KEYS_ENVIRONMENT';
import { GetObjectCommand, PutObjectCommand, PutObjectCommandInput, PutObjectCommandOutput } from '@aws-sdk/client-s3';
import fs from 'fs'

import { FilesRepository } from '../../domain/repository/FilesRepository';
import { InternResponse, RESPONSE_NOT_FOUND } from '../../domain/utils/InternResponse';
import { S3ClientInitialized } from './config.S3';

export class FilesRepositoryAWSS3 implements FilesRepository {

    constructor() { }

    async upload(data: fs.ReadStream): Promise<InternResponse<any>> {

        const uploadParams: PutObjectCommandInput = {
            Bucket: AWS_BUCKET_NAME,
            Key: "fileX",
            Body: data,
        }

        const command = new PutObjectCommand(uploadParams)
        const reponse: PutObjectCommandOutput = await S3ClientInitialized.send(command)

        return {
            code: 200,
            message: "Ok",
            data: undefined
        }
    }

    async download(filename: string): Promise<InternResponse<any>> {

        const command = new GetObjectCommand({
            Bucket: AWS_BUCKET_NAME,
            Key: filename,
        })

        const result = await S3ClientInitialized.send(command)

        if (!result) return RESPONSE_NOT_FOUND;
        if (!result.Body) return RESPONSE_NOT_FOUND;

        // result.Body.pipe(fs.createWriteStream(`./images/${filename}`))

        return RESPONSE_NOT_FOUND;

    }
}