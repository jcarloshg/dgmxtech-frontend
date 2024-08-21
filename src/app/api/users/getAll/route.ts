import { usersListAWSSDK } from "@/usesCases/application/aws-sdk/usersListAWSSDK";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json(await usersListAWSSDK());
}