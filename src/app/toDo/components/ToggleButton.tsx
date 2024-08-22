'use client';

import { toggleToDoApplication } from "@/usesCases/ToDo/application/toggleToDo.application";
import { ToDo as ToDoModel } from "@/usesCases/ToDo/domain/schema/ToDo";
import { useState } from "react";

export interface Props {
    todo: ToDoModel,
    wasUpdatedEvent: (todo: ToDoModel) => Promise<void>
}

export const ToggleButton = ({ todo, wasUpdatedEvent }: Props) => {

    // const [todoState, setTodoState] = useState(todo)

    const runToggleToDoApplication = async (uuid: string) => {
        const res = await toggleToDoApplication(uuid)

        if (res.status !== "SUCCESS") return
        if (res.data.toDoUpdated === undefined) return

        // setTodoState(res.data.toDoUpdated)
        await wasUpdatedEvent(res.data.toDoUpdated)

    }

    return (
        <button
            onClick={() => runToggleToDoApplication(todo.uuid)}
            className={
                `text-1xl px-2 py-1 rounded-md border-2
            ${todo.completed
                    ? "bg-white border-green-300 text-green-600 "
                    : "bg-white border-red-300 text-red-600 "
                }
            `
            }>
            {todo.completed ? "Mark incomplete" : 'Mark completed'}
        </button >
    )
}