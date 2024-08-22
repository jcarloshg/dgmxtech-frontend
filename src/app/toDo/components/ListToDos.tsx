'use client';

import { getAllToDo, GetAllToDoApplicationResponse } from "@/usesCases/ToDo/application/getAllToDo.application";
import { useEffect, useState } from "react"
import { ToDo } from "./ToDo";

interface Props {
    className?: string
}

export const ListToDos = ({ className }: Props) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [getAllToDoResponse, setGetAllToDoResponse] = useState<GetAllToDoApplicationResponse | null>(null)


    const runGetAllToDo = async () => {

        setIsLoading(true)
        const response = await getAllToDo();
        setIsLoading(false)

        if (response.status !== "SUCCESS") return;

        setGetAllToDoResponse(response.data)

    }

    useEffect(
        () => {

            (
                async () => {
                    await runGetAllToDo()
                }
            )();

        }, [])


    return (
        <main className={`${className}`}>

            {
                isLoading && (<span>Is loading... ⏲️</span>)
            }

            <h3 className="font-semibold text-gray-600 text-sm mb-2">List of your ToDos: </h3>

            {
                getAllToDoResponse?.toDos && getAllToDoResponse.toDos.length <= 0 &&
                (
                    <span>There are not ToDos 😥</span>
                )
            }
            {
                getAllToDoResponse?.toDos && getAllToDoResponse.toDos.length > 0 &&
                (
                    <div className="flex flex-col gap-4">
                        {
                            getAllToDoResponse.toDos.map(todo => (<ToDo key={todo.uuid} todo={todo} />))
                        }
                    </div>
                )
            }

        </main>
    )
}