import { Trash } from 'phosphor-react';
import { TaskListContent } from '../../App';
import { Checkbox } from '../UI/Checkbox';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  taskItem: TaskListContent;
  onDeleteTask: (param: string) => void;
  onCompleteTask: (param: string) => void;
}

export const TaskItem = function ({
  taskItem,
  onDeleteTask,
  onCompleteTask,
}: TaskItemProps) {
  const handleDeleteTask = function () {
    onDeleteTask(taskItem.id);
  };

  return (
    <div
      className={
        taskItem.isComplete
          ? `${styles.taskItem} ${styles.complete}`
          : styles.taskItem
      }
    >
      <div>
        <Checkbox id={taskItem.id} onCompleteTask={onCompleteTask} />
        <p>{taskItem.text}</p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash size={16} weight={'regular'} />
      </button>
    </div>
  );
};
