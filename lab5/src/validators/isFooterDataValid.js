const { isArrayHasLength, isObjectHasProps, isObjectHasLength } = require("./utils/validators");


const isFooterDataValid = (data) => {
    // Проверка наличия и длины объекта
    if (!isObjectHasLength(data)) {
      throw new Error("Переданные данные - не объект или длина объекта = 0");
    }
  
    // Проверка наличия и длины массива
    if (!isArrayHasLength(data.footerElements)) {
      throw new Error("Переданные данные - не массив или длина массива = 0");
    }
  
    // Проверка наличия обязательных полей в объекте
    const requiredProps = ["text", "src", "alt", "footerElements"];
    isObjectHasProps(data, requiredProps);
  
    // Проверка наличия обязательных полей в каждом элементе массива footerElements
    data.footerElements.forEach((element) => {
      const requiredElementProps = ["title", "elements"];
      isObjectHasProps(element, requiredElementProps);
  
      // Проверка наличия и длины массива elements
      if (!isArrayHasLength(element.elements)) {
        throw new Error("elements не является массивом или это пустой массив");
      }
  
      // Проверка наличия обязательных полей в каждом элементе массива elements
      element.elements.forEach((subElement) => {
        const requiredSubElementProps = ["href", "text"];
        isObjectHasProps(subElement, requiredSubElementProps);
      });
    });
  };

  module.exports = isFooterDataValid;