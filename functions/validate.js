module.exports = function checkAndGenerate(name, age) {
  if (!validateInput(name) | !validateInput(age)) {
    return;
  }
  return `${name} is ${age} years old`;
};

function validateInput(text) {
  if (!text) {
    return false;
  }
  if (typeof text !== "string") {
    return false;
  }

  if (text.trim().length == 0) {
    return false;
  }

  return true;
}
