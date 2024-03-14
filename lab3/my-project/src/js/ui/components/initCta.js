import ctaData from "../../mockData/ctaData.js";
import { ctaTemplate } from "../templates/ctaTemplate.js";

const initCta = () => {
  const ctaNode = document.querySelector(".cta");

  ctaNode.insertAdjacentHTML(
    "beforeend",
    ctaTemplate(ctaData)
  );
};

export default initCta;
