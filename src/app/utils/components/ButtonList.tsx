
// import { usersListAWSSDK } from "@/usesCases/application/aws-sdk/usersListAWSSDK";
import { usersListAWSSDK } from "@/usesCases/application/aws-sdk/usersListAWSSDK";

export const ButtonList = async () => {

    const response = await usersListAWSSDK();

    return (
        <div className="w-full h-36  border border-red-950 border-2 ">

            <button
                className="bg-blue-400 px-1 py-2 m-5 rounded-lg"
            // onClick={() => callUsersListAWSSDK()}
            >
                HOLA MANO
            </button>

            {
                JSON.stringify(response)
            }

        </div>
    )
}