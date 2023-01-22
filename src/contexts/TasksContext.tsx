import { createContext, ReactNode, RefObject, useRef, useState } from 'react'

export interface TaskListContent {
  text: string
  id: string
  isComplete: Boolean
}

interface TaskContextType {
  taskList: TaskListContent[]
  taskToEditId: string
  inputRef: RefObject<HTMLInputElement>
  addTask: (text: string) => void
  deleteTask: (id: string) => void
  completeTask: (id: string) => void
  onEditTask: (id: string) => void
  updateTask: (text: string) => void
}

export const TaskContext = createContext({} as TaskContextType)

interface TaskContextProviderProps {
  children: ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [taskList, setTaskList] = useState<TaskListContent[]>([])
  const [taskToEditId, setTaskToEditId] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const addTask = function (text: string) {
    if (text === '') return

    setTaskList((prev) => {
      return [...prev, { text, id: crypto.randomUUID(), isComplete: false }]
    })
  }

  const deleteTask = function (id: string) {
    setTaskList((prev) => {
      const listWithoutDeletedOne = prev.filter((task) => {
        if (task.id !== id) return task
        return null
      })
      return listWithoutDeletedOne
    })
  }

  const completeTask = function (id: string) {
    setTaskList((prev) => {
      const updatedListWithCompletedOne = prev.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete }
        } else {
          return task
        }
      })

      return updatedListWithCompletedOne
    })
  }

  const onEditTask = function (id: string) {
    setTaskToEditId(id)
  }

  const updateTask = function (text: string) {
    const updatedTaskList = setTaskList((prev) =>
      prev.map((task) => {
        if (task.id === taskToEditId) {
          return { ...task, text }
        } else {
          return task
        }
      }),
    )

    console.log(updatedTaskList)
  }

  return (
    <TaskContext.Provider
      value={{
        taskList,
        taskToEditId,
        inputRef,
        onEditTask,
        addTask,
        completeTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
