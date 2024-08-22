'use client';

import { useEffect, useState } from "react";
import { ListToDos } from "./components/ListToDos";
import { ToDo as ToDoModel } from "@/usesCases/ToDo/domain/schema/ToDo";
import { ToDoDescription } from "./components/ToDoDescription";
import { getAllToDo, GetAllToDoApplicationResponse } from "@/usesCases/ToDo/application/getAllToDo.application";

const KEY_TODO_UUID_SELECTED = 'TODO_UUID_SELECTED';

export default function Page() {

    const [todoSelected, setTodoSelected] = useState<ToDoModel | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [getAllToDoResponse, setGetAllToDoResponse] = useState<GetAllToDoApplicationResponse | null>(null)

    const runGetAllToDo = async () => {

        setIsLoading(true)
        const response = await getAllToDo();
        setIsLoading(false)

        if (response.status !== "SUCCESS") return;

        setGetAllToDoResponse(response.data)

    }

    const runWasUpdatedEvent = async (todo: ToDoModel): Promise<void> => {

        // we can replace the ToDo or call the endpoint again
        // await runGetAllToDo()

        if (getAllToDoResponse == null) return

        const todosUpdated = getAllToDoResponse.toDos.map(
            todoTemp => {
                if (todoTemp.uuid !== todo.uuid) return todoTemp
                todoTemp.completed = !todoTemp.completed
                return todoTemp
            }
        );

        setGetAllToDoResponse({ toDos: todosUpdated })
    }

    const runSetTodoSelected = (todo: ToDoModel | null) => {
        if (todo == null) return;
        localStorage.setItem(KEY_TODO_UUID_SELECTED, todo.uuid);
        setTodoSelected(todo)
    }

    const runGetTodoSelected = () => {

        const todoUUID = localStorage.getItem(KEY_TODO_UUID_SELECTED);
        if (todoUUID == null) return

        if (getAllToDoResponse == null) return
        const todoSelected = getAllToDoResponse.toDos.find(todoTemp => todoTemp.uuid === todoUUID) ?? null
        setTodoSelected(todoSelected)

    }

    useEffect(() => {
        (async () => await runGetAllToDo())();
    }, [])

    useEffect(() => {
        if (getAllToDoResponse == null) return
        runGetTodoSelected()
    }, [getAllToDoResponse])

    return (

        <main className="py-10 px-10 xl:px-40 border-red-950 border-2">

            <h1 className="font-bold text-2xl">The awesome ToDo list! 😎</h1>

            <div className="mt-5 w-full flex flex-row gap-16 px-20">

                {
                    getAllToDoResponse &&
                    (
                        <ListToDos
                            className="basis-2/4"
                            todoSelected={todoSelected}
                            selectTodo={runSetTodoSelected}
                            getAllToDoResponse={getAllToDoResponse}
                            isLoading={isLoading}
                        />
                    )
                }

                <div className="basis-2/4 ">
                    <ToDoDescription
                        todo={todoSelected}
                        wasUpdatedEvent={(todo) => runWasUpdatedEvent(todo)}
                    />
                </div>

            </div>


        </main>
    )
}

//