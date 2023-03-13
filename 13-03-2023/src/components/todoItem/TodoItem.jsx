import { RxCheck, RxCross2 } from "react-icons/rx";
import "./index.css";

const TodoItem = ({ todoData }) => {
  const { todo, completed, userId } = todoData;
  return (
    <div className={`TodoItem ${completed ? "done" : ""}`}>
      <p className="TodoItem__content">{todo}</p>
      <p className="TodoItem__completed">
        Completed:
        {completed === true ? (
          <RxCheck className="todo-check" />
        ) : (
          <RxCross2 className="todo-cross" />
        )}
      </p>
      <p className="TodoItem__userId">userId: {userId}</p>
    </div>
  );
};

export default TodoItem;
