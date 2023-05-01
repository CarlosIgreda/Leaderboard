import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const $ul = document.querySelector('.table');
  const $submit = document.querySelector('.submit');
  const $name = document.querySelector('.inputName');
  const $score = document.querySelector('.inputScore');
  const $refresh = document.querySelector('.refresh');
  const $error1 = document.querySelector('.error1');
  const $error2 = document.querySelector('.error2');
  const $error3 = document.querySelector('.error3');

  const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
  let dataTable = [];
  const lvl = [
    'https://i.postimg.cc/wT1mqfc1/white-Dragon.png',
    'https://i.postimg.cc/YqNxg2y5/red-Dragon.png',
    'https://i.postimg.cc/bJRQnZsd/blue-Dragon.png',
    'https://i.postimg.cc/g0sVXwwj/cetro-Dorado.png',
    'https://i.postimg.cc/tJKWQWcS/cetro-Diamante.png',
    'https://i.postimg.cc/5ty5ZBNJ/cetro-Rojo-Brillante.png',
    'https://i.postimg.cc/ZYpPtKZW/cetro-Azul.png',
    'https://i.postimg.cc/fbVXHMBT/cetro-Rojo.png',
    'https://i.postimg.cc/7Yq2F3mR/hachon-Dorado-Punto.png',
    'https://i.postimg.cc/MGfM7dpn/hachon-Dorado.png',
    'https://i.postimg.cc/jq4W4Wt4/hachon-Plateado-Punto.png',
    'https://i.postimg.cc/yNRxgxL9/hachon-Plateado.png',
    'https://i.postimg.cc/8kZpCLT9/hachon-Punto.png',
    'https://i.postimg.cc/yY57mBgT/hachon.png',
    'https://i.postimg.cc/kXVmXZ1R/doble-Hachita-Dorada.png',
    'https://i.postimg.cc/GmGnvD1c/hachita-Dorada.png',
    'https://i.postimg.cc/KY5XHyzw/doble-Hachita-Plateada.png',
    'https://i.postimg.cc/gJk99BLJ/hachita-Plateada.png',
    'https://i.postimg.cc/N0vYn4x9/doble-Hachita.png',
    'https://i.postimg.cc/RVJkzthc/hachita.png',
    'https://i.postimg.cc/3NsbwLN2/doble-Maso-Piedra.png',
    'https://i.postimg.cc/sg4ytWHT/maso-Piedra.png',
    'https://i.postimg.cc/Jh7mmh9M/doble-Maso-Madera.png',
    'https://i.postimg.cc/mDtsz5Ln/maso-Madera.png',
    'https://i.postimg.cc/ZKkSnH1f/pollito.png',
  ];

  // Function to render the leaderboard
  const renderTable = (dataTable) => {
    dataTable.sort((a, b) => b.score - a.score);
    $ul.textContent = '';
    dataTable.forEach((data, index) => {
      const $li = document.createElement('li');
      const $span1 = document.createElement('span');
      const $span2 = document.createElement('span');
      const $span3 = document.createElement('span');
      const $div = document.createElement('div');
      $div.setAttribute('class', 'cont');
      $li.setAttribute('class', 'items');
      $span1.textContent = `${data.user} `;
      $span2.textContent = `${data.score}`;
      const img = document.createElement('img');
      if (lvl[index]) img.src = lvl[index];
      else img.src = lvl[lvl.length - 1];
      $span3.appendChild(img);
      $div.appendChild($span3);
      $div.appendChild($span1);
      $li.appendChild($div);
      $li.appendChild($span2);
      $ul.appendChild($li);
    });
  };

  function validateInput(input, regex) {
    if (regex.test(input.value)) {
      return true;
    }
    return false;
  }

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
      } else {
        $error1.style.display = 'block';
        setTimeout(() => {
          $error1.style.display = 'none';
        }, 1500);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const refreshTable = async () => {
    await getScores(`${API_URL}/games/HspC8OHIhu3ag1r0dylu/scores/`);
  };

  getScores(`${API_URL}/games/HspC8OHIhu3ag1r0dylu/scores/`);

  $submit.addEventListener('click', () => {
    const lettersOnly = /^[a-zA-Z]+$/;
    const numbersOnly = /^[0-9]+$/;
    if ($name.value.trim() !== '' && $score.value.trim() !== '') {
      if (!validateInput($name, lettersOnly)) {
        $error2.style.display = 'block';
        setTimeout(() => {
          $error2.style.display = 'none';
        }, 1500);
        return;
      }

      if (!validateInput($score, numbersOnly)) {
        $error3.style.display = 'block';
        setTimeout(() => {
          $error3.style.display = 'none';
        }, 1500);
        return;
      }
      addScore(`${API_URL}/games/HspC8OHIhu3ag1r0dylu/scores/`);
    } else {
      $error1.style.display = 'block';
      setTimeout(() => {
        $error1.style.display = 'none';
      }, 1500);
    }
  });

  $refresh.addEventListener('click', () => {
    refreshTable();
  });

  window.addEventListener('click', () => {
    const $musicdb = document.querySelector('.musicdb');
    $musicdb.play();
  });
});
