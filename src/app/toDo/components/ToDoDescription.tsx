

import { ToDo as ToDoModel } from "@/usesCases/ToDo/domain/schema/ToDo";
import { ToggleButton } from "./ToggleButton";

export interface Props {
    todo: ToDoModel | null,
    wasUpdatedEvent: (todo: ToDoModel) => Promise<void>
}

export const ToDoDescription = ({ todo, wasUpdatedEvent }: Props) => {

    const STYLE_COMPLETE = "bg-green-100 border-green-300 border-2";
    const STYLE_NOT_COMPLETE = "bg-red-100 border-red-300 border-2";

    return (
        <main className="h-min">

            <h3 className="font-semibold text-gray-600 text-sm mb-2">Description 👀 : </h3>

            {
                todo === null
                    ?
                    (
                        <span className="h-60 flex justify-center items-center">
                            Please, select a ToDo 👀
                        </span>
                    )
                    :
                    (
                        <main
                            className={`
                                rounded-md px-8 pt-4 pb-8
                                ${todo.completed ? STYLE_COMPLETE : STYLE_NOT_COMPLETE}
                                `
                            }
                        >

                            <header className="flex flex-row justify-between items-center">

                                <span className="flex flex-col">
                                    <span className="text-gray-600 text-sm font-light">Title:</span>
                                    <h3 className="font-semibold text-gray-600 text-2xl">{todo.title}</h3>
                                    <span className="text-gray-600 text-sm"><small>{todo.uuid}</small></span>
                                </span>

                                <span
                                    className={
                                        `text-1xl px-2 py-1 rounded-md
                                        ${todo.completed
                                            ? "  text-green-600"
                                            : "  text-red-600"
                                        }
                                        `
                                    }>
                                    {todo.completed ? "Completed ✅" : 'Not complete 🔴'}
                                </span>

                            </header>


                            <span className="flex flex-col mt-10">
                                <span className="text-gray-600 text-sm font-light">Body:</span>
                                <h3 className="text-gray-600 text-sm font-medium">{todo.description}</h3>
                            </span>


                            <span className="flex flex-row justify-end mt-10 ">
                                <ToggleButton
                                    todo={todo}
                                    wasUpdatedEvent={wasUpdatedEvent}
                                />
                            </span>

                        </main>
                    )
            }

        </main>
    )
}