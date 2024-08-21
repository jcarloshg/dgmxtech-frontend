import fs from 'fs'
import { InternResponse } from '../../domain/utils/InternResponse';
import { FilesRepositoryAWSS3 } from '@/usesCases/infrastructure/aws-sdk/FilesRepositoryAWSS3';

export const filesUploadAWSSdk = async (data: fs.ReadStream): Promise<InternResponse<any>> => {

    const filesRepositoryAWSS3 = new FilesRepositoryAWSS3();
    const response = await filesRepositoryAWSS3.upload(data);
    return response;

}