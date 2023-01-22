import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../contexts/TasksContext'
import { EmptyTasks } from './EmptyTasks'
import { TaskItem } from './TaskItem'

export const TaskList = function () {
  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)
  const { taskList } = useContext(TaskContext)

  const countCompletedTaks = function () {
    const completedTasks = taskList.reduce((prev, current) => {
      if (current.isComplete) {
        prev += 1
      }

      return prev
    }, 0)

    setNumberOfCompletedTasks(completedTasks)
  }

  useEffect(() => {
    countCompletedTaks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskList])

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="flex items-center gap-2 text-md text-blue-500 font-bold">
            Tarefas criadas
            <span className="py-[2px] px-2 rounded-full bg-gray-400 text-gray-100 text-sm">
              {taskList.length}
            </span>
          </p>
        </div>

        <div>
          <p className="flex items-center gap-2 text-md text-purple-500 font-bold">
            Concluídas
            {taskList.length > 0 ? (
              <span className="py-[2px] px-2 rounded-full bg-gray-400 text-gray-100 text-sm">{`${numberOfCompletedTasks} de ${taskList.length}`}</span>
            ) : (
              <span className="py-[2px] px-2 rounded-full bg-gray-400 text-gray-100 text-sm">{`${taskList.length}`}</span>
            )}
          </p>
        </div>
      </header>

      <div className=" max-h-[500px] overflow-y-scroll ">
        <ul className="flex flex-col justify-center gap-3">
          {taskList.length > 0 ? (
            taskList.map((taskItem) => {
              return <TaskItem key={taskItem.id} taskItem={taskItem} />
            })
          ) : (
            <EmptyTasks />
          )}
        </ul>
      </div>
    </div>
  )
}
