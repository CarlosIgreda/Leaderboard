import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const $ul = document.querySelector('.table');
  const $submit = document.querySelector('.submit');
  const $name = document.querySelector('.inputName');
  const $score = document.querySelector('.inputScore');
  const $refresh = document.querySelector('.refresh');

  const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
  let dataTable = [];

  // Function to render the leaderboard
  const renderTable = (dataTable) => {
    $ul.textContent = '';
    dataTable.forEach((data) => {
      const $li = document.createElement('li');
      const $span1 = document.createElement('span');
      const $span2 = document.createElement('span');
      $li.setAttribute('class', 'items');
      $span1.textContent = `${data.user}: `;
      $span2.textContent = `${data.score}`;
      $li.appendChild($span1);
      $li.appendChild($span2);
      $ul.appendChild($li);
    });
  };

  // Function to recover the scores
  const getScores = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dataTable = data.result;
      renderTable(dataTable);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  // Function to add a new score
  const addScore = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          user: $name.value.trim(),
          score: $score.value.trim(),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      if (data.result) {
        dataTable.push(data.result);
        $name.value = '';
        $score.value = '';
        renderTable(dataTable);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  // Function to refresh the table
  const refreshTable = async () => {
    await getScores(`${API_URL}/games/ZMXpUtkGRj3HLotOXTHS/scores/`);
  };

  // Call the functions
  getScores(`${API_URL}/games/ZMXpUtkGRj3HLotOXTHS/scores/`);

  $submit.addEventListener('click', () => {
    addScore(`${API_URL}/games/ZMXpUtkGRj3HLotOXTHS/scores/`);
  });

  $refresh.addEventListener('click', () => {
    refreshTable();
  });
});
