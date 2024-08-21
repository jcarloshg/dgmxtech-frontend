import { UsersRepository } from "@/usesCases/domain/repository/Users.repository";
import { InternResponse, RESPONSE_NOT_FOUND } from "@/usesCases/domain/utils/InternResponse";
import { AWS_DYNAMODB_USERS_TABLE_NAME } from "@/utils/KEYS_ENVIRONMENT";
import { BatchGetItemCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBClientInitialized } from "./config.DinamoDB";
import { UserPublicData } from "@/usesCases/domain/schemas/UserPublicData";


export class UsersRepositoryDynamoDB implements UsersRepository {

    constructor() { }

    async create(data: {}): Promise<InternResponse<any>> {
        throw new Error("not initialized")
    }

    async list(): Promise<InternResponse<any>> {

        // const getItemCommand: GetItemCommand = new GetItemCommand({
        //     TableName: AWS_DYNAMODB_USERS_TABLE_NAME,
        //     Key: {
        //         id: { N: '0' }
        //     }
        // })
        // const response = await DynamoDBClientInitialized.send(getItemCommand);
        // return RESPONSE_NOT_FOUND;

        const command = new BatchGetItemCommand({
            RequestItems: {
                // Each key in this object is the name of a table. This example refers
                // to a PageAnalytics table.
                Usuarios: {
                    // Each entry in Keys is an object that specifies a primary key.
                    Keys: [
                        {
                            id: { N: '0' },
                        },
                    ],
                    // Only return the "PageName" and "PageViews" attributes.
                    // ProjectionExpression: "PageName, PageViews",
                },
            },
        });

        const response = await DynamoDBClientInitialized.send(command);

        if (!response.Responses?.Usuarios) return RESPONSE_NOT_FOUND;

        return {
            code: 200,
            data: response.Responses.Usuarios,
            message: "OK"
        }

    }


}