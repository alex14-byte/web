import footerData from "../mockData/footerData";
import React from 'react';
import footerImg from "../assets/img/logo.svg"

export const FooterImg = ( alt ) => {
    return <img className="link__name" src={footerImg} alt={alt} width="118" height="30" />;
}

export const FooterText = ({ text }) => {
    return <p>{text}</p>;
}

export const FooterLinks = ({ href, text }) => {
    return <a href={href}>{text}</a>;
}

export const FooterElements = ({ footerElements }) => {
    return footerElements.map((section, index) => (
        <div key={index} className="foot_menu_item">
            <h3>{section.title}</h3>
            {section.elements.map((element, idx) => (
                <FooterLinks key={idx} {...element} />
            ))}
        </div>
    ));
}

 const Footer = () => {
    const { alt, text, footerElements } = footerData;

    return (
        <div>
            <div className="go_to_feature">
                <h1>Хотите Шагнуть в Будущее Раньше Других?</h1>
                <button>Запросить ранний доступ</button>
            </div>
            <div className="foot_menu">
                <div className="foot_menu_start">
                    <div className="header__logo">
                        <a href="#" className="logo__link">
                            <FooterImg alt={alt} />
                        </a>
                    </div>
                    <FooterText text={text} />
                </div>
                <div className="foot_menu_items">
                    <FooterElements footerElements={footerElements} />
                </div>
            </div>
        </div>
    );
};


export default Footer;