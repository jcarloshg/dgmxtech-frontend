'use client';

import { GetAllToDoApplicationResponse } from "@/usesCases/ToDo/application/getAllToDo.application";
import { ToDo } from "./ToDo";
import { ToDo as ToDoModel } from "@/usesCases/ToDo/domain/schema/ToDo";

interface Props {
    className?: string,
    todoSelected?: ToDoModel | null,
    selectTodo: (todo: ToDoModel) => void
    isLoading: boolean,
    getAllToDoResponse: GetAllToDoApplicationResponse,
}

export const ListToDos = ({ className, todoSelected, isLoading, getAllToDoResponse, selectTodo }: Props) => {

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
                            getAllToDoResponse.toDos.map(
                                todo => (
                                    <ToDo
                                        key={todo.uuid}
                                        todo={todo}
                                        isSelected={todo.uuid === todoSelected?.uuid}
                                        wasClicked={() => selectTodo(todo)}
                                    />
                                )
                            )
                        }
                    </div>
                )
            }

        </main>
    )
}