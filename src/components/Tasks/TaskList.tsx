import { useEffect, useState } from 'react';
import { TaskListContent } from '../../App';
import { EmptyTasks } from './EmptyTasks';
import { TaskItem } from './TaskItem';
import styles from './TaskList.module.css';

export interface TaskListProps {
  taskList: TaskListContent[];
  deleteTask: (param: string) => void;
  completeTask: (param: string) => void;
}

export const TaskList = function ({
  taskList,
  deleteTask,
  completeTask,
}: TaskListProps) {
  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);

  const countCompletedTaks = function () {
    const completedTasks = taskList.reduce((prev, current) => {
      if (current.isComplete) {
        prev += 1;
      }

      return prev;
    }, 0);

    setNumberOfCompletedTasks(completedTasks);
  };

  useEffect(() => {
    countCompletedTaks();
  }, [taskList]);

  return (
    <div className={styles.taskList}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>
            Tarefas criadas <span>{taskList.length}</span>
          </p>
        </div>

        <div className={styles.completedTasks}>
          <p>
            Concluídas
            <span>{`${numberOfCompletedTasks} de ${taskList.length}`}</span>
          </p>
        </div>
      </header>

      {taskList.length > 0 ? (
        taskList.map((taskItem) => {
          return (
            <TaskItem
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
              key={taskItem.id}
              taskItem={taskItem}
            />
          );
        })
      ) : (
        <EmptyTasks />
      )}
    </div>
  );
};
