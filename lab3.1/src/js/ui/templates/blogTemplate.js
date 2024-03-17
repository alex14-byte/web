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

export const createBlogContainerTemplate = ({data, header, link, src, alt}, className) => {
  return `
  <div class="${className}">
        <img src=${src} alt=${alt}>
        <div class="${className}_text">
          <p>${data}</p>
          <h3>${header}</h3>
          <a href="">${link}</a>
        </div>
  </div>
`;
};

export const createBlogTemplate = (BlogsData, className) => {
  return `
  ${BlogsData.map((BlogData) => createBlogContainerTemplate(BlogData, className)).join("")}
  `;
};
      
export const blogTemplate = ({
    title,
    classnamefirst,
    classnamesecond,
    FirstBlogsData,
    SecondBlogsData,
  }) => {
    const titleTemplate = createBlogTitleTemplate(title);
    const blogContainerFirstTemplate = createBlogTemplate(FirstBlogsData, classnamefirst);
    const blogContainerSecondTemplate = createBlogTemplate(SecondBlogsData, classnamesecond);
  
    return `
    <div> ${titleTemplate}</div>
    <div class="blog_containers">
    ${blogContainerFirstTemplate}
    <div class = "blog_containers_second">
    ${blogContainerSecondTemplate}
    </div>
    </div>
    `;
  };