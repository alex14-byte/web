import React from 'react';
import expectationsData from "../mockData/expectationsData";
import woman from "../assets/img/expectations/woman.png";
const createCard = (description, title) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

const createButtonLink = (button_link, classname) => {
  return (
    <a href="#" className={`left_cta_${classname}`}>{button_link}</a>
  );
};

const createImg = ( ) => {
  return (
    
      <img src={woman} alt={'woman'} />
  );
};

const Expectations = () => {
const {  button_link, img, title,description } = expectationsData;
  const buttonLinkBlue = createButtonLink(button_link, "blue");
  const buttonLinkOrange = createButtonLink(button_link, "orange");
  const textCard = createCard(description, title);
  const imgCard = createImg();

  return (<>
      <div className="expectations_section_img">
            {imgCard}
      </div>
      <div className="expectations_section_text">
        {buttonLinkBlue}
        {textCard}
        {buttonLinkOrange}
      </div>
      </>
  );
};

export default Expectations;