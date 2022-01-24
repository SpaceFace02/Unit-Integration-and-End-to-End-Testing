const axios = require("axios").default;

const fetchData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

// loadTitle exports the whole promise, so we can use it in printTitle
const loadTitle = () => {
  return fetchData().then((extractedData) => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};

// printTitle is a function that doesn't return anything, hence we can't use it for testing. The callback function returns a value, not the overall function.
const printTitle = () => {
  loadTitle().then((title) => {
    console.log(title);
    document.getElementById("title").innerHTML = title;
    return title;
  });
};

module.exports = {
  loadTitle,
  printTitle,
};
