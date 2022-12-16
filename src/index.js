/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';
import { addList, displayList } from './modules/user.js';
import clearCompleted from './modules/clearAll.js';
import localGet from './modules/localStorage.js';

const form = document.querySelector('.list-con');
const todoTask = document.getElementById('input');
const clearAll = document.getElementById('Completedbtn');

window.addEventListener('load', () => {
  displayList();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addList(todoTask.value, false, localGet().length + 1);
  displayList();
});

clearAll.addEventListener('click', (e) => {
  e.preventDefault();
  clearCompleted();
  displayList();
});