import { ResponseBackEnd } from "@/usesCases/utils/schema/ResponseBackEnd"
import { ToDo } from "../../domain/schema/ToDo"
import { CustomResponse } from "@/usesCases/utils/schema/CustomResponse"

export const deletedByUUIDFetch = async (todo: ToDo): Promise<CustomResponse<undefined>> => {


    try {

        // http://localhost:3000/todos/849e146c-aca8-4da3-9b0a-d2074c96da85
        const responseFetch = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/todos/${todo.uuid}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        const response = (await responseFetch.json()) as ResponseBackEnd

        if (response.status === 200) return {
            status: "SUCCESS",
            data: undefined,
        }

        return {
            status: "ERROR_SERVER",
            data: undefined
        }

    } catch (error) {

        return {
            status: "ERROR_SERVER",
            data: undefined
        }

    }

}