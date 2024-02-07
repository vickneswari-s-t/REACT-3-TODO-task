import React, { useState } from 'react';
import Cards from './cards';
import Edit from './edit';

function Input({ todo, setTodo, completed, setCompleted }) {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [getTodo, setgetTodo] = useState(null);

  const handleDropDown = (e) => {
    let val = e.target.innerText;
    setCompleted(val=== 'Completed' ? 'Not Completed' : 'Completed');
  };

  const handleClick = () => {
    if (getTodo) {
     
      setTodo((prevTodos) =>
        prevTodos.map((a) =>
          a.id === getTodo.id ? { ...a, title, description } : a   // Editing existing card
        )
      );
      setgetTodo(null);
    } else {
     
      let id = todo.length ? todo[todo.length - 1].id + 1 : 1; // adding new todo cards
      let newArr = [...todo];
      newArr.push({
        id,
        title,
        description,
      });
      setTodo(newArr);
    }

  
    setTitle('');               //clear the title
    setDescription('');         //clear the description
  };

  return (
    <>
      <h1 className="text-center Heading">My Todo</h1>
      <div className="container overflow-hidden text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <input
                placeholder="Task Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <input
                placeholder="Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <button onClick={handleClick}>Add Todo</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-5">
        <div>
          <h6 className="fw-bold content">My Todo's</h6>
        </div>
        <div>
          <h4 className="States">
            Status Filter :{" "}
            <span>
              {" "}
              <div className="btn-group">
                <button
                  className="btn1  btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {completed}
                </button>
                <ul className="dropdown-menu">
                  <a onClick={handleDropDown}>Completed</a>
                  <a onClick={handleDropDown}>Not Completed</a>
                </ul>
              </div>
            </span>
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {todo.map((e, i) => (
            <Cards
              key={i}
              completed={completed}
              setCompleted={setCompleted}
              todo={e}
              setTodo={setTodo}
              onEdit={() => {
                setgetTodo(e);
                setTitle(e.title);
                setDescription(e.description);
              }}
            />
          ))}
        </div>
      </div>
      {getTodo && (
        <Edit
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onClick={handleClick}
        />
      )}
    </>
  );
}

export default Input;