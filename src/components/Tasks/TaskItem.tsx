import { Trash, PencilLine } from 'phosphor-react'
import { useContext } from 'react'
import { TaskContext, TaskListContent } from '../../contexts/TasksContext'
import { Checkbox } from '../UI/Checkbox'

interface TaskItemProps {
  taskItem: TaskListContent
}

export const TaskItem = function ({ taskItem }: TaskItemProps) {
  const { inputRef, deleteTask, completeTask, onEditTask } =
    useContext(TaskContext)

  const handleDeleteTask = function () {
    deleteTask(taskItem.id)
  }

  return (
    <li className="flex items-center justify-between p-4 bg-gray-500 border-[1px] border-solid border-gray-400 rounded-lg">
      <div className="flex gap-3 text-md">
        <Checkbox id={taskItem.id} onCompleteTask={completeTask} />
        <p
          className={`${
            taskItem.isComplete
              ? 'text-gray-300 line-through '
              : 'text-gray-100 '
          }`}
        >
          {taskItem.text}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={handleDeleteTask}
          className="flex items-center justify-center rounded-[4px] text-gray-300 h-6 w-6 hover:text-red-500 hover:bg-gray-400 hover:transition-all hover:duration-200"
        >
          <Trash size={16} weight={'regular'} />
        </button>
        <button
          onClick={() => {
            inputRef.current!.focus()
            onEditTask(taskItem.id)
          }}
          className="flex items-center justify-center rounded-[4px] text-gray-300 h-6 w-6 hover:text-blue-500 hover:bg-gray-400 hover:transition-all hover:duration-200"
        >
          <PencilLine size={16} weight="regular" />
        </button>
      </div>
    </li>
  )
}
