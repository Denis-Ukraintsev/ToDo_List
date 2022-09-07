import React, { useState } from "react";
import "./todoForm.scss";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string | number>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    const keyName = event.key;
    if (keyName === "Enter" && title !== "") {
      props.onAdd(event.currentTarget.value);
      setTitle("");
    }
  };

  return (
    <div className="root">
      <input
        className="taskInput"
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={title}
        type="text"
        placeholder="введите вашу задачу"
      ></input>
    </div>
  );
};

export default TodoForm;
