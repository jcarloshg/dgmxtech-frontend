import { ToggleToDoFetchResponse } from "../../application/toggleToDo.application";
import { CustomResponse } from "@/usesCases/utils/schema/CustomResponse";
import { ResponseBackEnd } from "@/usesCases/utils/schema/ResponseBackEnd";
import { ToDo } from "../../domain/schema/ToDo";

export const toggleToDoFetch = async (uuid: string): Promise<CustomResponse<ToggleToDoFetchResponse>> => {


    try {

        // http://localhost:3000/todos/4d00f645-0d53-427a-a44f-283f20042f25/toggle
        const responseFetch = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/todos/${uuid}/toggle`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        const response = (await responseFetch.json()) as ResponseBackEnd
        const toDos = response.data as ToDo

        return {
            status: "SUCCESS",
            data: {
                toDoUpdated: toDos
            }
        }

    } catch (error) {

        return {
            status: "ERROR_SERVER",
            data: {}
        }

    }

}