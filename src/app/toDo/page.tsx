import { ListToDos } from "./components/ListTodos/ListToDos";


export default function Page() {
    return (

        <main className="py-10 px-20 border-red-950 border-2">

            <h1 className="font-bold text-2xl">The awesome ToDo list! 😎</h1>

            <div className="mt-5 w-full flex flex-row gap-5">

                <ListToDos className="basis-2/3" />

                <div className="basis-1/3 border-red-950 border-2">
                    <span>description</span>
                </div>

            </div>


        </main>
    )
}