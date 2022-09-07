import React from "react";
import { ITodo } from "..//Interfaces";
import "./todo.scss";

type TodoProps = {
  tasks: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const Todo: React.FC<TodoProps> = ({ tasks, onRemove, onToggle }) => {
  return (
    <ul>
      {tasks.map((task) => {
        const classes = ["todo"];

        if (task.completed === true) {
          classes.push("completed");
        }
        return (
          <li className="task" key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                onToggle(task.id);
              }}
            />
            <span className={classes.join(" ")}>{task.title}</span>
            <button onClick={() => onRemove(task.id)}>
              <img
                src="https://pixsector.com/cache/6ecfa54e/avd0879fcbf810d38dc8e.png"
                alt=""
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
