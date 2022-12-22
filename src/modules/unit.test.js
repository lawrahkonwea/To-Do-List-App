/**
 * @jest-environment jsdom
 */

import {
  addList, removeList, updateList,
} from './user.js';

document.body.innerHTML = `<section>
<div class="todolist-con">
    <h1 class="todo-header">Today's To Do</h1>
    <form class="list-con">
        <input type="text" name="text" id="input" placeholder="Add to your list">
        <button type="submit" id="added"><i class=" add">add</i></button>
    </form>
    <div id="listItem"></div>
    <div class="btn-con">
        <button id="Completedbtn">Clear Completed Tasks</button>
    </div>
</div>
</section>`;

describe('when we add, delete basic items', () => {
  test('when we add an item it should have one list', () => {
    addList('Hello i am Amaka', false, 0);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(1);
  });
  test('when we add another item', () => {
    addList('Hi i am Amaka', true, 1);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(2);
  });
  test('when we add another item', () => {
    addList('Hi i am Josue', false, 2);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(3);
  });
  test('when we remove an item it should remove one list', () => {
    removeList(0);
    const data = document.querySelectorAll('.toDoItem');
    expect(data).toHaveLength(2);
  });
  test('when we update an item', () => {
    document.querySelector('#input-0').value = 'im Josue';
    updateList(0);
    const data = JSON.parse(localStorage.getItem('listStorage'));
    const checkData = data.filter((item) => item.index === 1);
    expect(checkData[0].description).toBe('im Josue');
  });
});