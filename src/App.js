import React, { useState } from 'react';
import Robot from './components/Robot';
import './App.css';

function App() {
  const [list, updateList] = useState([]);
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.robot.value;
    if (list.includes(name)) {
      alert(`${name} robot already generated! try another one.`);
    } else {
      event.target.robot.value = '';
      updateList([...list, name.trim()]);
    }
  };

  const deleteHandler = (title) => {
    const newList = list.filter((item) => item !== title);
    updateList(newList);
  };
  return (
    <div className="App">
      <div className="main-container">
        <div className="robot-generator">
          <form action="/" method="get" onSubmit={submitHandler}>
            <input type="text" placeholder="Generate Robot" name="robot" />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="robot-list">
          {list.map((item) => (
            <Robot title={item} key={item} onDelete={deleteHandler} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
