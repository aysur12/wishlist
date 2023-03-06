const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));

export default loadJSON;