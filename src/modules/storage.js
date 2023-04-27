const saveItems = (dataTable) => {
  localStorage.setItem('table', JSON.stringify(dataTable));
};

export default saveItems;