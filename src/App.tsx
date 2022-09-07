import React, { useState, useEffect, FC } from "react";
import "./styles.scss";
import Navbar from "./Components/Navbar/Navbar";
import TodoForm from "./Components/TodoForm/TodoForm";
import Todo from "./Components/Todo/Todo";
import { ITodo } from "./Components/Interfaces";

const App: FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);
  const [save, setSave] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]") as ITodo;
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };
  const removeHandler = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const showCompleted = () => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]").filter(
      (el) => el.completed === true
    );
    setSave(saved);
  };
  const showUncompleted = () => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]").filter(
      (el) => el.completed === false
    );
    setSave(saved);
  };
  const showAll = () => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]").filter(
      (el) => el
    );
    setSave(saved);
  };

  return (
    <div className="App">
      <Navbar
        onShowCompleted={showCompleted}
        onShowUncompleted={showUncompleted}
        onShowAll={showAll}
      />
      <TodoForm onAdd={addTask} />
      <Todo tasks={tasks} onToggle={toggleHandler} onRemove={removeHandler} />
      <span>
        {save.map((el) => (
          <li>{el.title}</li>
        ))}
      </span>
    </div>
  );
};

export default App;
