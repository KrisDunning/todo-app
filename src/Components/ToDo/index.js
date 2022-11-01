import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/settingsContext.js';
import { Pagination } from '@mantine/core';

const ToDo = () => {
  const { hideComplete, setHideComplete, numberItemsShown, sortDefault } = useContext(SettingsContext);

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [pageList, setPageList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [activePage, setPage] = useState(1);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  
  useEffect(()=>{
    let listStartValue=(numberItemsShown*activePage)-(numberItemsShown);
    let listEndValue=numberItemsShown*activePage;
    console.log('List start and end value : ', listStartValue, listEndValue);
    let filteredList=list.filter(item=>{
      if(!item.complete && hideComplete) return item;
    });
    setPageList(filteredList.slice(listStartValue,listEndValue));
  },[list,activePage]);
  
  function displayList() {
    return (  
      <>
        {pageList.map(item => (         
          <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
          </div>
        ))}
      </>    
      )
  }

function addItem(item) {
  item.id = uuid();
  item.complete = false;
  console.log(item);
  setList([...list, item]);
}

function deleteItem(id) {
  const items = list.filter(item => item.id !== id);
  setList(items);
}

function toggleComplete(id) {

  const items = list.map(item => {
    if (item.id === id) {
      item.complete = !item.complete;
    }
    return item;
  });
  setList(items);

}

useEffect(() => {
  let incompleteCount = list.filter(item => !item.complete).length;
  setIncomplete(incompleteCount);
  document.title = `To Do List: ${incomplete}`;
  // linter will want 'incomplete' added to dependency array unnecessarily. 
  // disable code used to avoid linter warning 
  // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [list]);

return (
  <>
    <header data-testid="todo-header">
      <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
    </header>

    <form onSubmit={handleSubmit}>

      <h2>Add To Do Item</h2>

      <label>
        <span>To Do Item</span>
        <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
      </label>

      <label>
        <span>Assigned To</span>
        <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
      </label>

      <label>
        <span>Difficulty</span>
        <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
      </label>

      <label>
        <button type="submit">Add Item</button>
      </label>
    </form>
      <div>
        {displayList()}
        <Pagination page={activePage} onChange={setPage} total={numberItemsShown} />;
      </div>

  </>
);
};

export default ToDo;
