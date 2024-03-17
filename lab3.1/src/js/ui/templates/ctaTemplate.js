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
    
export const createCtaTextTemplate = (button_link, description) => {
    return `
    <p>${button_link}</p>
    <h3>${description}</h3>
`;
}

export const ctaTemplate = ({
    button_link,
    description,
  }) => {
    const ctaTextTemplate = createCtaTextTemplate(button_link, description);

    return `
    <div class="cta_rectangle">
            <div class="cta_text">
                ${ctaTextTemplate}
            </div>
            <div class="cta_button">
                <button><h3>Начать<h3></button>   
            </div>
        </div>
    `
  };