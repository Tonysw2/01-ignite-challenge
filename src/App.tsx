import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TaskList } from './components/Tasks/TaskList';
import './global.css';

export interface TaskListContent {
  text: string;
  id: string;
  isComplete: Boolean;
}

function App() {
  const [taskList, setTaskList] = useState<TaskListContent[]>([]);

  const addTask = function (text: string) {
    setTaskList((prev) => {
      return [...prev, { text, id: uuidv4(), isComplete: false }];
    });
  };

  const deleteTask = function (id: string) {
    setTaskList((prev) => {
      const listWithoutDeletedOne = prev.filter((task) => {
        if (task.id !== id) return task;
      });
      return listWithoutDeletedOne;
    });
  };

  const completeTask = function (id: string) {
    setTaskList((prev) => {
      const updatedListWithCompletedOne = prev.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      });

      return updatedListWithCompletedOne;
    });
  };

  return (
    <div className="App">
      <Header />
      <Form onAddTask={addTask} />
      <main>
        <TaskList
          completeTask={completeTask}
          deleteTask={deleteTask}
          taskList={taskList}
        />
      </main>
    </div>
  );
}

export default App;
