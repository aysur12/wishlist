const loadJSON = (key) => JSON.parse(localStorage.getItem(key));

export default loadJSON;