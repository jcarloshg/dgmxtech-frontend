
import { CustomResponse } from "@/usesCases/utils/schema/CustomResponse";
import { deletedByUUIDFetch } from "../infrastructure/fetch/deletedByUUID.fetch";
import { ToDo } from "../domain/schema/ToDo";


export const deletedByUUIDApplication = async (todo: ToDo): Promise<CustomResponse<undefined>> => {

    return await deletedByUUIDFetch(todo);

}