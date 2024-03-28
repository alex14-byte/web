const { isArrayHasLength, isObjectHasProps, isObjectHasLength } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // Проверка наличия и длины объекта
  if (!isObjectHasLength(data)) {
    throw new Error("Переданные данные - не объект или длина объекта = 0");
  }

  // Проверка наличия обязательных полей в объекте
  const requiredProps = ["title", "BlogsData"];
  isObjectHasProps(data, requiredProps);

  const { BlogsData } = data;

  // Проверка наличия и длины массива
  if (!isArrayHasLength(BlogsData)) {
    throw new Error("Переданные данные - не массив или длина массива = 0");
  }

  // Проверка наличия обязательных полей в каждом элементе массива BlogsData
  BlogsData.forEach((blog) => {
    blog.forEach((item) => {
      const requiredItemProps = ["classname", "elements"];
      isObjectHasProps(item, requiredItemProps);

      // Проверка наличия и длины массива elements
      if (!isArrayHasLength(item.elements)) {
        throw new Error("Переданные данные - не массив или длина массива = 0");
      }

      // Проверка наличия обязательных полей в каждом элементе массива elements
      item.elements.forEach((element) => {
        const requiredElementProps = ["data", "header", "link", "img"];
        isObjectHasProps(element, requiredElementProps);

        const requiredLinkProps = ["text", "href"];
        isObjectHasProps(element.link, requiredLinkProps);

        const requiredImgProps = ["src", "alt"];
        isObjectHasProps(element.img, requiredImgProps);
      });
    });
  });
};

module.exports = isBlogDataValid;