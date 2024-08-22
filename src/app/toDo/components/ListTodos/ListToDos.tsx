'use client';

import { useEffect, useState } from "react"

interface Props {
    className?: string
}

export const ListToDos = ({ className }: Props) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [toDos, setToDos] = useState<{}>([])

    useEffect(() => {

        return () => { }
    }, [])


    return (
        <>
            <div className={`border-red-950 border-2 ${className}`}>

                {
                    isLoading
                        ?
                        (
                            <span>Is loading... ⏲️</span>
                        )
                        :
                        (
                            <span>Lista</span>
                        )
                }

            </div>
        </>
    )
}