import { RxCheck, RxCross2 } from "react-icons/rx";
import { IoTrashBinOutline } from "react-icons/io5";
import "./index.css";

const TodoItem = ({ todoData, setList }) => {
  const { id, todo, completed, userId } = todoData;

  const isCompleted = () => {
    setList((prev) => [
      ...prev.filter((item) => item.id !== id),
      {
        id: id,
        todo: todo,
        completed: !completed,
        userId: userId,
      },
    ]);
  };

  const removeItem = () => {
    setList((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  return (
    <div className={`TodoItem ${completed && "done"}`}>
      <div className="firstLine" onClick={isCompleted}>
        <p className="TodoItem__content">{todo}</p>
        <p className="TodoItem__completed">
          Completed:
          {completed === true ? (
            <RxCheck className="todo-check" />
          ) : (
            <RxCross2 className="todo-cross" />
          )}
        </p>
      </div>
      <div className="secondLine">
        <p className="TodoItem__userId">userId: {userId}</p>
        <IoTrashBinOutline className="trash-can" onClick={removeItem} />
      </div>
    </div>
  );
};

export default TodoItem;
