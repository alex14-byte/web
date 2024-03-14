{/* <section class="cta">
        <div class="cta_rectangle">
            <div class="cta_text">
                <p>Запросите ранний доступ</p>
                <h3>Зарегистрируйтесь и начните исследовать безграничные возможности.</h3>
            </div>
            <div class="cta_button">
                <button><h3>Начать<h3></button>
            </div>
        </div>
    </section> */}
    
export const createCtaEarlyTemplate = (early_access) => {
    return `
    <p>${early_access}</p>
`;
}

export const createCtaDescriptionTemplate = (description) => {
    return `
    <h3>${description}</h3>
`;
}

export const creaeCtaButtonTemplate = (buttonData) => {
    return `
    <button><h3>${buttonData}<h3></button>
`;
}
      
export const ctaTemplate = ({
    early_access,
    buttonData,
    description,
  }) => {
    const earlyTemplate = createCtaEarlyTemplate(early_access);
    const ctaDescriptionTemplate = createCtaDescriptionTemplate(description);
    const ctaButtonTemplate = creaeCtaButtonTemplate(buttonData);
  
    const resultTemplate = `
    <div class="cta_rectangle">
            <div class="cta_text">
                ${earlyTemplate}
                ${ctaDescriptionTemplate}
            </div>
            <div class="cta_button">
                ${ctaButtonTemplate}   
            </div>
        </div>
    `;

    return resultTemplate;
  };