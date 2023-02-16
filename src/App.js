import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [item, setItem] = useState('');
  const [value, setValue] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const getValue = () => {
    setValue((oldItems) => {
      return [...oldItems, item];
    });
    setItem(' ');
  };
  const deleteItems = (id) => {
    console.log('deleted');
    setValue((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Add Todo</h1>
          <br />
          <div>
            <input
              type="text"
              value={item}
              placeholder="Add Items"
              onChange={itemEvent}
            />
            <button onClick={getValue}>+</button>
          </div>
          <br />
          <ol>
            {value.map((inputfield, index) => {
              return (
                <TodoList
                  text={inputfield}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
