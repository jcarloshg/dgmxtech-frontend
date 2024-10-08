

export interface Props {
    children: React.ReactNode;
}

export default function Page({ children }: Props) {
    return (
        <main className="h-[50vh] flex justify-center items-center bg-slate-800 border-red-950 border-2">
            {
                children
            }
        </main>
    )
}