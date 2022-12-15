/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';

const toDoList = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'clean the house',
    completed: true,
    index: 3,
  },
];

toDoList.forEach((toDo) => {
  const { description, completed, index } = toDo;
  const ulLists = document.querySelector('.ul-items');

  const list = document.createElement('li');
  list.setAttribute('class', 'list');
  list.setAttribute('id', index);
  ulLists.appendChild(list);

  const checkCon = document.createElement('div');
  checkCon.className = 'checkbox-con';
  list.appendChild(checkCon);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = completed;
  checkCon.appendChild(checkbox);

  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  checkCon.appendChild(paragraph);

  const ellipsis = document.createElement('i');
  ellipsis.setAttribute('class', 'fa fa-ellipsis-v');
  list.appendChild(ellipsis);
});