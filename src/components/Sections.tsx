import { useState, useEffect } from "react";
import axios from "axios";

function Sections() {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setTodos(res.data.slice(0, 4));
      });
  }, []);


  return (
    <div className="row p-5 d-flex justify-content-between">
      {todos.map((todo: any) => (
        <div className="card col-5 mb-4" key={todo.id}>
          <div className="card-body">
            <h5 className="card-title">{todo.id}</h5>
            <p className="card-text">{todo.title}</p>
            <a href="#" className="btn btn-outline-dark">{todo.completed ? "True" : "False"}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sections;