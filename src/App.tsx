import React, { FC, useState, ChangeEvent } from 'react';
import { ITask } from './Interfaces/Interfaces'
import './App.css';
import { TodoTask } from './components/TodoTask'

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') setTask(event.target.value);
    if (event.target.name === "deadline") setDeadline(Number(event.target.value));
  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }

    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }))
  }

  return (
    <div className="App">
      <div className="header"></div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Deadline in days..."
          name="deadline"
          value={deadline}
          onChange={handleChange}
        />
      </div>
      <button onClick={addTask}>Add Task</button>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
