
import { UsersRepositoryDynamoDB } from '@/usesCases/infrastructure/aws-sdk/UsersAWSDynamoDB';
import { InternResponse } from '../../domain/utils/InternResponse';

export const usersListAWSSDK = async (): Promise<InternResponse<any>> => {

    const usersRepositoryDynamoDB = new UsersRepositoryDynamoDB();
    const response = await usersRepositoryDynamoDB.list()
    return response;

}