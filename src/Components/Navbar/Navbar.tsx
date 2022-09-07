import React from "react";
import "./navbar.scss";

type NavbarProps = {
  onShowCompleted(): void;
  onShowUncompleted(): void;
  onShowAll(): void;
};

const Navbar: React.FC<NavbarProps> = ({
  onShowCompleted,
  onShowUncompleted,
  onShowAll
}) => {
  return (
    <div className="container">
      <h1>Список дел</h1>
      <div>
        <button
          className="btn"
          onClick={() => {
            onShowAll();
          }}
        >
          Все
        </button>
        <button
          className="btn"
          onClick={() => {
            onShowCompleted();
          }}
        >
          Выполненные
        </button>
        <button
          className="btn"
          onClick={() => {
            onShowUncompleted();
          }}
        >
          Невыполненные
        </button>
      </div>
    </div>
  );
};

export default Navbar;
