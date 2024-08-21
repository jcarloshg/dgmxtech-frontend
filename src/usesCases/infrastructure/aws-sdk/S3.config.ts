import { S3Client } from "@aws-sdk/client-s3";
import { AWS_ACCESS_KEY_ID, AWS_BUCKET_REGION, AWS_SECRET_ACCESS_KEY } from "@/utils/KEYS_ENVIRONMENT";

export const S3ClientInitialized = new S3Client({
    region: AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
})