import footerData from "../../mockData/footerData.js";
import { footerTemplate } from "../templates/footerTemplate.js";

const initFooter = () => {
  const footerNode = document.querySelector(".foot");

    footerNode.insertAdjacentHTML("beforeend",
    footerTemplate(footerData)
  );
};

export default initFooter;
