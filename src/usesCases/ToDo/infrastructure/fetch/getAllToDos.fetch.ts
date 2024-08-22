import { CustomResponse } from "@/usesCases/utils/schema/CustomResponse";
import { GetAllToDoApplicationResponse } from "../../application/getAllToDo.application";
import { ResponseBackEnd } from "@/usesCases/utils/schema/ResponseBackEnd";
import { ToDo } from "../../domain/schema/ToDo";

export const getAllToDosFetch = async (): Promise<CustomResponse<GetAllToDoApplicationResponse>> => {


    try {

        const responseFetch = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/todos/all`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        const response = (await responseFetch.json()) as ResponseBackEnd
        const toDos = response.data as ToDo[]

        return {
            status: "SUCCESS",
            data: {
                toDos
            }
        }

    } catch (error) {

        return {
            status: "ERROR_SERVER",
            data: {
                toDos: []
            }
        }

    }





}