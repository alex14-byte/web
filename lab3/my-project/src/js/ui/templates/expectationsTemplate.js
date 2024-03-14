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

export const createTitleTemplate = (title) => {
    return `
        <h2>${title}</h2>
    `;
  };
  export const createCtaTopBlueTemplate = (early_access) => {
    return `
    <a href="#" class="left_cta_blue">${early_access}</a>
    `;
  };
  export const createCtaBottomOrangeTemplate = (early_access) => {
    return `
    <a href="#" class="left_cta_orange">${early_access}</a>
    `;
  };
  
  
  export const createDescriptionTemplate = (description) => {
    return `
      <p>${description}</p>
    `;
  };
  
  export const createImgTemplate = ({ src, alt }) => {
    return `
      <img src="${src}" alt="${alt}" />
    `;
  };
  
  export const expectationsTemplate = ({
    early_access,
    img,
    title,
    description,
  }) => {
    const titleTemplate = createTitleTemplate(title);
    const ctaTopBlueTemplate = createCtaTopBlueTemplate(early_access);
    const ctaBottomOrangeTemplate = createCtaBottomOrangeTemplate(early_access);
    const descriptionTemplate = createDescriptionTemplate(description);
    const imgTemplate = createImgTemplate(img);
  
    const resultTemplate = `
    <div class="expectations_section_img">
        ${imgTemplate}
    </div>
    <div class="expectations_section_text">
        ${ctaTopBlueTemplate}
        ${titleTemplate}
        ${descriptionTemplate}
        ${ctaBottomOrangeTemplate}
    </div>
    `;

    return resultTemplate;
  };