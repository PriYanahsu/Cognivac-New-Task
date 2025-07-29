import React from 'react';
import './SolutionsBox.css';

const SolutionsBox = ({ Index, Img, Title, Description }) => {
    return (
        <div className="solutions-box">
            {Img && <img src={Img} alt={`Solution ${Index}`} className="solutions-box-img" />}
            <h3 className="solutions-box-title">{Title}</h3>
            <p className="solutions-box-desc">{Description}</p>
        </div>
    );
};

export default SolutionsBox;
