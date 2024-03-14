{/* <section class="section blog">
      <div>
        <h1>Многое Происходит, Мы Ведем об Этом Блог.</h1>
      </div>
      <div class="blog_containers">
        <div class="blog_container_first">
          <img src="./assets/img/blog/1.png" alt="">
          <div class="blog_container_first_text">
            <p>Сент 26, 2021</p>
            <h3>GPT-3 и Openai – это будущее. Давайте разберемся, как это?</h3>
            <a href="">Читать полную статью</a>
          </div>
        </div>
        <div class="blog_containers_second">
          <div class="blog_container_second">
            <img src="./assets/img/blog/2.png" alt="">
            <div class="blog_container_second_text">
              <p>Сент 26, 2021</p>
              <h3>GPT-3 и Openai – это будущее. Давайте разберемся, как это?</h3>
              <a href="">Читать полную статью</a>
            </div>
          </div>
          <div class="blog_container_second">
            <img src="./assets/img/blog/3.png" alt="">
            <div class="blog_container_second_text">
              <p>Сент 26, 2021</p>
              <h3>GPT-3 и Openai – это будущее. Давайте разберемся, как это?</h3>
              <a href="">Читать полную статью</a>
            </div>
          </div>
          <div class="blog_container_second">
            <img src="./assets/img/blog/4.png" alt="">
            <div class="blog_container_second_text">
              <p>Сент 26, 2021</p>
              <h3>GPT-3 и Openai – это будущее. Давайте разберемся, как это?</h3>
              <a href="">Читать полную статью</a>
            </div>
          </div>
          <div class="blog_container_second">
            <img src="./assets/img/blog/5.png" alt="">
            <div class="blog_container_second_text">
              <p>Сент 26, 2021</p>
              <h3>GPT-3 и Openai – это будущее. Давайте разберемся, как это?</h3>
              <a href="">Читать полную статью</a>
            </div>
          </div>
        </div>
      </div>
    </section> */}
export const createBlogTitleTemplate = (title) => {
    return `
    <h1${title}</h1>
`;
}

export const createBlogContainerFirstTemplate = ({data, header, link, src, alt}) => {
    return `
    <div class="blog_container_first">
          <img src=${src} alt=${alt}>
          <div class="blog_container_first_text">
            <p>${data}</p>
            <h3>${header}</h3>
            <a href="">${link}</a>
          </div>
    </div>
`;
};


export const createBigBlogTempate = (BigBlogsData) => {

    return `
    ${BigBlogsData.map((BigBlogMapTemplate) => createBlogContainerFirstTemplate(BigBlogMapTemplate)).join("")}
    `;
};

export const createBlogContainerSecondTemplate = ({data, header, link, src, alt}) => {
    return `
    <div class="blog_container_second">
          <img src=${src} alt=${alt}>
          <div class="blog_container_second_text">
            <p>${data}</p>
            <h3>${header}</h3>
            <a href="">${link}</a>
          </div>
    </div>
`;
}

  

export const createSmallBlogTemplate = (SmallBlogsData) => {
    return `
    ${SmallBlogsData.map((SmallBlogMapTemplate) => createBlogContainerSecondTemplate(SmallBlogMapTemplate)).join("")}
    `;
};
      
export const blogTemplate = ({
    title,
    BigBlogsData,
    SmallBlogsData,
  }) => {
    const titleTemplate = createBlogTitleTemplate(title);
    const blogContainerFirstTemplate = createBigBlogTempate(BigBlogsData);
    const blogContainerSecondTemplate = createSmallBlogTemplate(SmallBlogsData);
  
    const resultTemplate = `
    <div> ${titleTemplate}</div>
    <div class="blog_containers">
    ${blogContainerFirstTemplate}
    <div class = "blog_containers_second">
    ${blogContainerSecondTemplate}
    </div>
    </div>
    `;

    return resultTemplate;
  };