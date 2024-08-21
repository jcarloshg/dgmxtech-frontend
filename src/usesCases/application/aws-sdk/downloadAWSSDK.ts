import { InternResponse } from "@/usesCases/domain/utils/InternResponse";
import { FilesRepositoryAWSS3 } from "@/usesCases/infrastructure/aws-sdk/FilesRepositoryAWSS3";

export const downloadAWSSDK = async (fileName: string): Promise<InternResponse<any>> => {

    const filesRepositoryAWSS3 = new FilesRepositoryAWSS3();
    const response = await filesRepositoryAWSS3.download(fileName);
    return response;

}