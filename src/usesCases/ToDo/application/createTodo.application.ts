import { CustomResponse } from "@/usesCases/utils/schema/CustomResponse"
import { ToDo } from "../domain/schema/ToDo"
import { createTodoFetch, DataToCreateData } from "../infrastructure/fetch/createTodo.fetch"

export interface CreateTodoResponse {
    toDoCreated?: ToDo
}

export const createTodoApplication = async (data: DataToCreateData): Promise<CustomResponse<CreateTodoResponse>> => {

    return await createTodoFetch(data)

}