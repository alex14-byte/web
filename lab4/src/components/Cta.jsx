import React from 'react';
import ctaData from "../mockData/ctaData";

export const CtaText = ({ button_link, description }) => {
    return (
        <>
            <p>{button_link}</p>
            <h3>{description}</h3>
        </>
    );
}
const Cta = () => {
    const {  button_link, description } = ctaData;
    return (
        <div className="cta_rectangle">
            <div className="cta_text">
                <CtaText button_link={button_link} description={description} />
            </div>
            <div className="cta_button">
                <button><h3>Начать</h3></button>   
            </div>
        </div>
    );
};

export default Cta;