import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { AWS_ACCESS_KEY_ID, AWS_BUCKET_REGION, AWS_SECRET_ACCESS_KEY } from "@/utils/KEYS_ENVIRONMENT";

export const DynamoDBClientInitialized = new DynamoDBClient({ region: AWS_BUCKET_REGION })
// new DynamoDBClient({
// region: AWS_BUCKET_REGION,
// region: AWS_BUCKET_REGION,
// credentials: {
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY
// }
// })