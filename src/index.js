import './index.css';
import addNewScore from './modules/score.js';
import saveItems from './modules/storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const $ul = document.querySelector('.table');
  const $submit = document.querySelector('.submit');
  const $name = document.querySelector('.inputName');
  const $score = document.querySelector('.inputScore');

  let dataTable = JSON.parse(localStorage.getItem('table')) || [];

  const renderTable = (dataTable) => {
    dataTable.forEach((data) => {
      const $li = document.createElement('li');
      const $span1 = document.createElement('span');
      const $span2 = document.createElement('span');
      $li.setAttribute('class', 'items');
      $span1.textContent = `${data.name}: `;
      $span2.textContent = `${data.score}`;
      $li.appendChild($span1);
      $li.appendChild($span2);
      $ul.appendChild($li);
    });
  };

  $submit.addEventListener('click', () => {
    dataTable = addNewScore($name, $score, dataTable);
    saveItems(dataTable);
    $ul.textContent = '';
    renderTable(dataTable);
  });

  renderTable(dataTable);
});
