import todos from "../../mocks/todos";
import TodoItem from "../todoItem";
import { useState } from "react";
import "./index.css";

const TodoList = () => {
  const [list, setList] = useState(todos);
  const [todoValue, setTodoValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [userIdValue, setUserIdValue] = useState("");

  const handleTodoChange = (event) => {
    setTodoValue(event.target.value);
  };
  const handleCompletedChange = () => {
    setIsCompleted((prev) => !prev);
  };

  const handleUserIdChange = (event) => {
    setUserIdValue(event.target.value);
    console.log(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const newList = list.concat({
      todo: todoValue,
      completed: isCompleted,
      userId: userIdValue,
    });
    setList(newList);
  };

  return (
    <div className="TodoList">
      <form onSubmit={handleAdd}>
        <h3>Add a new task:</h3>
        <input
          type="text"
          className="todo-input"
          placeholder="Todo..."
          value={todoValue}
          onChange={handleTodoChange}
          required
        />
        <label>
          Completed
          <input
            type="checkbox"
            className="completed-input"
            placeholder="Completed..."
            checked={isCompleted}
            onChange={handleCompletedChange}
          />
        </label>

        <input
          type="text"
          className="userId-input"
          placeholder="userId..."
          value={userIdValue}
          onChange={handleUserIdChange}
          required
        />
        <input type="submit" className="todo-submit" value="Add" />
      </form>
      <div className="TodoList__content">
        {list.map((todo, index) => (
          <TodoItem todoData={todo} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
