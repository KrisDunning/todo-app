import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/settingsContext.js';
import { Pagination } from '@mantine/core';
import TheHeader from './header';
import TodoForm from './todoForm.js';
import DisplayList from './todoList.js';
import SettingsPage from './settings.js';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const ToDo = () => {
  const { hideComplete, numberItemsShown, sortDefault } = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [pageList, setPageList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [activePage, setPage] = useState(1);

  useEffect(()=>{
    let listStartValue=(numberItemsShown*activePage)-(numberItemsShown);
    let listEndValue=numberItemsShown*activePage;
    console.log('List start and end value : ', listStartValue, listEndValue);
    let filteredList=list.filter(item=>{
      if(!item.complete && hideComplete) return item;
    });
    setPageList(filteredList.slice(listStartValue,listEndValue));
  },[list,activePage]);

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
}, [list]);

return (
  <>
    <Router>
    <>
      {TheHeader(incomplete)}
    </>
    <Routes>
    <Route path="/" 
      element={<>
       {TodoForm(addItem)}
       {DisplayList(pageList,toggleComplete)}
       {list.length>=4 && <Pagination page={activePage} onChange={setPage} total={numberItemsShown} />}
      </>
    }/>

    <Route path="/settings"
    element={<>
     {SettingsPage()}
     </>
     }/>
    </Routes>
   </Router>
  </>
);
};

export default ToDo;
