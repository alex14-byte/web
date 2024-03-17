import expectationsData from "../../mockData/expectationsData.js";
import { expectationsTemplate } from "../templates/expectationsTemplate.js";

const initExpectations = () => {
  const expectationsNode = document.querySelector(".expectations");

  expectationsNode.insertAdjacentHTML("beforeend",
    expectationsTemplate(expectationsData)
  );
};

export default initExpectations;
