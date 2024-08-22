

import { ResponseBackEnd } from "@/usesCases/utils/schema/ResponseBackEnd"
import { ToDo } from "../../domain/schema/ToDo"
import { CustomResponse } from "@/usesCases/utils/schema/CustomResponse"
import { CreateTodoResponse } from "../../application/createTodo.application"

export interface DataToCreateData {
    title: string,
    description: string,
}

export const createTodoFetch = async (data: DataToCreateData): Promise<CustomResponse<CreateTodoResponse>> => {

    try {

        // http://localhost:3000/todos/create
        const responseFetch = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/todos/create`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )

        const response = (await responseFetch.json()) as ResponseBackEnd
        const toDos = response.data as ToDo

        return {
            status: "SUCCESS",
            data: {
                toDoCreated: toDos
            }
        }

    } catch (error) {

        return {
            status: "ERROR_SERVER",
            data: {}
        }

    }
}