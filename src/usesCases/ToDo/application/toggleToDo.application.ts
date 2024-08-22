
import { CustomResponse } from "@/usesCases/utils/schema/CustomResponse";
import { toggleToDoFetch } from "../infrastructure/fetch/toggleToDo.fetch";
import { ToDo } from "../domain/schema/ToDo";

export interface ToggleToDoFetchResponse {
    toDoUpdated?: ToDo
}

export const toggleToDoApplication = async (uuid: string): Promise<CustomResponse<ToggleToDoFetchResponse>> => {

    return await toggleToDoFetch(uuid);

}