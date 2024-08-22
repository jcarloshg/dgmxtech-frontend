import { CustomResponse } from "@/usesCases/utils/schema/CustomResponse"
import { ToDo } from "../domain/schema/ToDo"
import { getAllToDosFetch } from "../infrastructure/fetch/getAllToDos.fetch"

export interface GetAllToDoApplicationResponse {
    // add data las limit, page, items per page, counts
    toDos: ToDo[],
}

export const getAllToDo = async (): Promise<CustomResponse<GetAllToDoApplicationResponse>> => {

    return await getAllToDosFetch();

}