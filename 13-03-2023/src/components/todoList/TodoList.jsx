import todos from "../../mocks/todos";
import TodoItem from "../todoItem";
import { useState } from "react";
import "./index.css";
import SearchBar from "../searchBar";

const TodoList = () => {
  const [list, setList] = useState(todos);
  const [todoValue, setTodoValue] = useState("");
  const [userIdValue, setUserIdValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [option, setOption] = useState("");

  const handleTodoChange = (event) => {
    setTodoValue(event.target.value);
  };

  const handleUserIdChange = (event) => {
    setUserIdValue(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    // const newList = list.concat({
    //   id: list.length + 1,
    //   todo: todoValue,
    //   completed: false,
    //   userId: userIdValue,
    // });
    // setList(newList);

    const newList = list.concat({
      id: list.length + 1,
      todo: todoValue,
      completed: false,
      userId: userIdValue,
    });
    setList((prev) => {
      if (
        !prev.find(
          (todo) => todo.todo.toLowerCase() === todoValue.toLowerCase()
        )
      ) {
        return newList;
      } else {
        alert("Already existing!");
        return prev;
      }
    });
  };

  const filteredTodos = list.filter((todo) =>
    todo.todo.toLowerCase().includes(searchValue)
  );

  // const abc = filteredTodos.filter((todo) => {
  //   todo.completed === option;
  // });

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
      <SearchBar setSearchValue={setSearchValue} setOption={setOption} />
      <div className="TodoList__content">
        {filteredTodos
          .sort((todo1, todo2) => (todo1.todo > todo2.todo ? 1 : -1))
          .map((todo) => (
            <TodoItem todoData={todo} setList={setList} key={todo.id} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
