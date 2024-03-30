import React from 'react';
import blogData from '../mockData/blogData';
import img1 from "../assets/img/blog/1.png";
import img2 from "../assets/img/blog/2.png";
import img3 from "../assets/img/blog/3.png";
import img4 from "../assets/img/blog/4.png";
import img5 from "../assets/img/blog/5.png";

export const BlogTitle = ({ title }) => {
    return <h1>{title}</h1>;
}

export const BlogContainerImg = ({ alt }) => {
    switch (alt) {
        case '1':
            return <img src={img1} alt={alt} />;
        case '2':
            return <img src={img2} alt={alt} />;
        case '3':
            return <img src={img3} alt={alt} />;
        case '4':
            return <img src={img4} alt={alt} />;
        case '5':
            return <img src={img5} alt={alt} />;
        default:
            return null; 
    }
}

export const BlogContainer = ({ classname, elements }) => {

    return elements.map(({ data, header, link, img }, index) => (
        <div key={index} className={classname}>
            <BlogContainerImg alt={img.alt} />
            <div className={`${classname}_text`}>
                <p>{data}</p>
                <h3>{header}</h3>
                <a href={link.href}>{link.text}</a>
            </div>
        </div>
    ));
}

export const BlogElements = ({ BlogsData }) => {
    return BlogsData.map((section, index) => <BlogContainer key={index} {...section} />);
}
const Blog = () => {
    const { title, BlogsData } = blogData;
    if (!title || !Array.isArray(BlogsData)) {
        return null; 
    }
    return (
        <div>
            <BlogTitle title={title} />
            <div className="blog_containers">
                <BlogElements BlogsData={BlogsData[0]} />
            <div className="blog_containers_second">
                <BlogElements BlogsData={BlogsData[1]} />
            </div>
            </div>
        </div>
    );
};

export default Blog;