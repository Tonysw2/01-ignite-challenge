import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState, useContext } from 'react'
import { TaskContext } from '../contexts/TasksContext'

export const Form = function () {
  const [text, setText] = useState('')
  const { addTask, inputRef, taskToEditId, updateTask, onEditTask } =
    useContext(TaskContext)

  const handleSubmit = function (event: FormEvent) {
    event.preventDefault()
    if (taskToEditId !== '') {
      updateTask(text)
      onEditTask('')
    } else {
      addTask(text)
    }

    setText('')
  }

  const handleTextChange = function (event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  return (
    <div className="max-w-3xl md:max-w-[90%] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 -mt-7 mb-16"
      >
        <input
          ref={inputRef}
          className="bg-gray-500 p-4 rounded-lg text-lg w-full placeholder:text-gray-300 outline-none border-[1px] border-solid border-gray-700 focus:text-gray-100 focus:border-purple-700"
          onChange={handleTextChange}
          type="text"
          placeholder="Add new task"
          value={text}
          onBlur={() => onEditTask('')}
        />
        <button
          type="submit"
          className="flex items-center gap-2 p-4 rounded-lg bg-blue-700 text-md text-gray-100 font-bold hover:bg-blue-500 hover:duration-200"
        >
          Create
          <PlusCircle size={16} weight={'bold'} />
        </button>
      </form>
    </div>
  )
}
