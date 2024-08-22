import { deletedByUUIDApplication } from "@/usesCases/ToDo/application/deletedByUUID.application";
import { ToDo as ToDoModel } from "@/usesCases/ToDo/domain/schema/ToDo";

export interface Props {
    todo: ToDoModel,
    wasDeletedEvent: (uuid: string) => Promise<void>
}

export const DeleteButton = ({ todo, wasDeletedEvent }: Props) => {

    const runDeletedByUUIDApplication = async (todo: ToDoModel) => {

        const res = await deletedByUUIDApplication(todo)

        if (res.status !== "SUCCESS") return

        // setTodoState(res.data.toDoUpdated)
        await wasDeletedEvent(todo.uuid)

    }

    return (
        <button
            onClick={() => runDeletedByUUIDApplication(todo)}
            className={
                `text-1xl px-2 py-1 rounded-md border-2 bg-white border-red-300 text-gray-600`
            }>
            Delete
        </button >
    )

}