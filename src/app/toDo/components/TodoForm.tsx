'use client';

import { TodoTitleValueObject } from '@/usesCases/utils/valuObjects/TodoTitleValueObject';
import { PrimaryButton } from '../../utils/components/PrimaryButton';
import { ChangeEvent, useState } from 'react';
import { TodoDescriptionValueObject } from '@/usesCases/utils/valuObjects/TodoDescriptionValueObject';
import { DataToCreateData } from '@/usesCases/ToDo/infrastructure/fetch/createTodo.fetch';
import { createTodoApplication } from '@/usesCases/ToDo/application/createTodo.application';
import { ToDo } from '@/usesCases/ToDo/domain/schema/ToDo';


export interface Props {
  className?: string,
  wasCreatedEvent: (todo: ToDo) => Promise<void>
}

export const TodoFormCreate = ({ className, wasCreatedEvent }: Props) => {

  const [dataToCreateData, setDataToCreateData] = useState<DataToCreateData>({ description: "", title: "" })
  const [messageError, setMessageError] = useState<string>("")

  const runCreateTodo = async (data: DataToCreateData) => {


    // valida data

    try {

      const titleValueObject = new TodoTitleValueObject(data.title)
      const descriptionValueObject = new TodoDescriptionValueObject(data.description);

    } catch (error) {

      setMessageError("Title or Description is empty");

    }

    // create todo

    const res = await createTodoApplication(data)
    if (res.status !== "SUCCESS" || res.data.toDoCreated === undefined) return

    setDataToCreateData({ description: "", title: "" })
    setMessageError("")

    await wasCreatedEvent(res.data.toDoCreated)
  }

  const updateTitle = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const title = changeEvent.target.value
    setDataToCreateData({ ...dataToCreateData, title })
  };

  const updateDescription = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const description = changeEvent.target.value
    setDataToCreateData({ ...dataToCreateData, description })
  };

  return (
    <main className={`flex flex-col ${className}`}>

      <h3 className="font-semibold text-gray-600 text-sm">Introduce the data 📝: </h3>

      <div className=' flex flex-row gap-5 items-center mt-5'>

        <span className='flex flex-col basis-2/5'>

          <label htmlFor="title">
            Tile * :
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder='Tile'
            value={dataToCreateData.title}
            onChange={updateTitle}
            className='
    w-full shadow placeholder:text-lg placeholder:text-[#5C6274]
    ring-1
    bg-white rounded-[0.625rem]
    pl-4 pr-12 pt-[0.81rem] pb-[1.19rem] mt-[0.5rem]
    box-border outline-none'
          />

        </span>

        <span className='flex flex-col basis-2/5'>

          <label htmlFor="description">
            Description * :
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder='ex. Drink soda 🥤'
            value={dataToCreateData.description}
            onChange={updateDescription}
            className='
    w-full shadow placeholder:text-lg placeholder:text-[#5C6274]
    ring-1
    bg-white rounded-[0.625rem]
    pl-4 pr-12 pt-[0.81rem] pb-[1.19rem] mt-[0.5rem]
    box-border outline-none'
          />

        </span>


        <PrimaryButton
          label='Create ToDo'
          onClick={() => runCreateTodo(dataToCreateData)}
          className='basis-1/5'
        />

      </div>

      {
        messageError !== "" &&
        (
          <span className='text-red-600 mt-1'>{messageError}</span>
        )
      }

    </main>
  )

}