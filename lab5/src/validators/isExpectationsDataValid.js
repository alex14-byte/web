const { isObjectHasProps } = require("./utils/validators");

const isExpectationsDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["button_link", "img", "title", "description"]);

  const { img } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(img, ["src", "alt"]);
};

module.exports = isExpectationsDataValid;