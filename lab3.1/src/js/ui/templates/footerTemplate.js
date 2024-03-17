{/* <section class="section foot">
      <div>
        <div class="go_to_feature">
          <h1>Хотите Шагнуть в Будущее Раньше Других?</h1>
          <button>Запросить ранний доступ</button>
        </div>
        <div class="foot_menu">
          <div class="foot_menu_start">
            <div class="header__logo">
              <a href="#" class="logo__link">
                <img class="link__name" src="./assets/img/logo.svg" width="118" height="30"/>
              </a>
            </div>
            <p>ул. Профессора Поздеева, 13, к.Г, Пермь, Пермский край, 614013 Все права защищены</p>
          </div>
          <div class="foot_menu_items">
            <div class="foot_menu_item foot_menu_item_start">
              <h3>Ссылки</h3>
              <a href="">Овероны</a>
              <a href="">Соц. сети</a>
              <a href="">Счетчики</a>
              <a href="">Контакты</a>
            </div>
            <div class="foot_menu_item">
              <h3>Компания</h3>
              <a href="">Условия использования</a>
              <a href="">Перс. данные</a>
              <a href="">Конаткты</a>
            </div>
            <div class="foot_menu_item foot_menu_items_end">
              <h3>Контакты</h3>
              <a>ул. Профессора Поздеева, 13, к.Г, Пермь</a>
              <a>+7 (342) 2-198-520</a>
              <a href="">info@pstu.ru</a>
            </div>
          </div>
        </div>
      </div>
    </section> */}



export const createFooterImgTemplate = (src, alt) => {
    return `<img class = "link__name" src=${src} alt=${alt} width="118" height="30"/>`
}

export const createFooterTextTemplate = (text) => {
    return `<p>${text}</p>`
}


export const createFooterLinks = ({href, text}) => {
    return `<a href=${href}>${text}</a>`
}

export const createFooterElementsTemplate = (footerElements) => {

  const footerSections = [
    { title: 'Ссылки', elements: footerElements[0]},
    { title: 'Компания', elements: footerElements[1]},
    { title: 'Контакты', elements: footerElements[2]},
  ];
    return footerSections.map((section) => `
    <div class="foot_menu_item">
      <h3>${section.title}</h3>
      ${section.elements.map((element) => createFooterLinks(element)).join("")}
    </div>
  `).join("");
  }


export const footerTemplate = ({
    src,
    alt,
    text,
    footerElements
}) => {
    const footerTextTemplate = createFooterTextTemplate(text);
    const footerImgTemplate = createFooterImgTemplate(src, alt);
    const footerElementsTemplate = createFooterElementsTemplate(footerElements)


    return ` <div>
    <div class="go_to_feature">
      <h1>Хотите Шагнуть в Будущее Раньше Других?</h1>
      <button>Запросить ранний доступ</button>
    </div>
    <div class="foot_menu">
      <div class="foot_menu_start">
        <div class="header__logo">
              <a href="#" class="logo__link">
              ${footerImgTemplate}
              </a>
            </div>
        ${footerTextTemplate}
      </div>
      <div class="foot_menu_items">
        ${footerElementsTemplate}
      </div>
    </div>
    </div>
    `;
    
}