import React from 'react';
import './BlogsBox.css';

const BlogsBox = ({ Img, Title, Description }) => {
    return (
        <div className="blog-box">
            {Img && <img src={Img} alt={Description} className="blog-box-img" />}
            <div className="blog-box-content">
                <span className="blog-box-category">{Title}</span>
                <h3 className="blog-box-title">{Description}</h3>
            </div>
        </div>
    );
};

export default BlogsBox;