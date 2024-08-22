import { ToDo as ToDoModel } from "@/usesCases/ToDo/domain/schema/ToDo";

export interface Props {
    todo: ToDoModel,
    isSelected?: boolean
    wasClicked?: () => void
}

export const ToDo = ({ todo, isSelected = false, wasClicked }: Props) => {

    const STYLE_COMPLETE = "bg-green-100 border-green-300 border-2";
    const STYLE_NOT_COMPLETE = "bg-red-100 border-red-300 border-2";

    return (
        <main
            onClick={wasClicked}
            className={
                `h-min rounded-md px-8 py-4 flex flex-row justify-between cursor-pointer hover:scale-110
                ${isSelected ? "scale-110" : "scale-100"}
                ${todo.completed ? STYLE_COMPLETE : STYLE_NOT_COMPLETE}
                `
            }
        >

            <h3 className="font-semibold text-gray-600 text-lg">{todo.title}</h3>

            <span className="text-1xl">{todo.completed ? "✅" : '🔴'}</span>

        </main>
    )

}