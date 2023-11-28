import logo from "./logo.svg";
import "./App.css";
import TodoEnter from "./components/TodoEnter";
import TodoInput from "./components/todoinput";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText!=='')
      setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i)=>{
          return(
            <TodoList key={i} item={listItem} index={i} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
