const addNewScore = (name, score, dataTable) => {
  const newData = {
    name: name.value,
    score: score.value,
  };
  dataTable.push(newData);
  name.value = '';
  score.value = '';
  return dataTable;
};
export default addNewScore;