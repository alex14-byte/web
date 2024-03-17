{/* <section class = "section expectations">
<div class="expectations_section_img">
    <img src="./assets/img/expectations/woman.png" alt="">
</div>
<div class="expectations_section_text">
    <a href="#" class="left_cta_blue">Запросить ранний доступ</a>
    <h2>Превосходя все ожидания</h2>
    <p>Однако кровать для помощи в путешествии неприятна. Не мысли все осуществляют благословение. Снисхождение ко всему, радость, изменение бурной привязанности. Вечеринку мы лет на заказ разрешили.</p>
    <a href="#" class="left_cta_orange">Запросить ранний доступ</a>
</div>
</section> */}

  export const createCardTemplate = (description, title) => {
    return `
      <h2>${title}</h2>
      <p>${description}</p>
    `;
  };
  
export const createButtonLinkTemplate = (button_link, classname) => {
    return `
    <a href="#" class="left_cta_${classname}">${button_link}</a>
    `;
  };

  export const createImgTemplate = ({ src, alt }) => {
    return `
    <div class = "expectations_section_img">
      <img src="${src}" alt="${alt}" />
    </div> 
    `;
  };
  
  export const expectationsTemplate = ({
    button_link,
    img,
    title,
    description,
  }) => {
    const buttonLinkBlueTemplate = createButtonLinkTemplate(button_link, "blue");
    const buttonLinkOrangeTemplate = createButtonLinkTemplate(button_link, "orange");
    const cardTemplate = createCardTemplate(description, title);
    const imgTemplate = createImgTemplate(img);
  
    return `
    <div class="expectations_section_img">
        ${imgTemplate}
    </div>
    <div class="expectations_section_text">
        ${buttonLinkBlueTemplate + cardTemplate + buttonLinkOrangeTemplate}
    </div>
    ` ;
  };