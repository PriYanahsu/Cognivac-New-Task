// Solutions.js
import React from 'react';
import './Solutions.css';
import SolutionsBox from '../components/SolutionsBox';
import img1 from '../assets/SolutionsIcon/Icon1.png';
import img2 from '../assets/SolutionsIcon/Icon2.png';
import img3 from '../assets/SolutionsIcon/Icon3.png';
import img4 from '../assets/SolutionsIcon/Icon4.png';

const Solutions = () => {
    const Boxes = [
        {
            Img: img1,
            Title: "Advanced Data Analytics",
            Description: "Predictive analytics to gain actionable insights and forecast future trends."
        },
        {
            Img: img2,
            Title: "Operations with Automation",
            Description: "Enhance your operational efficiency with our AI-driven automated workflows."
        },
        {
            Img: img3,
            Title: "Unlock Insights with NLP",
            Description: "Language processing to extract meaningful unstructured data."
        },
        {
            Img: img4,
            Title: "Custom AI for Your Needs",
            Description: "Collaborate with our team of AI experts to build and deploy bespoke models."
        },
    ];

    return (
        <div className='solutions'>
            <div className="solutionsUpper">
                <div className="title">
                    <p>SOLUTIONS</p>
                </div>
                <h2>Revolutionize Your Business with Our AI-Powered Features</h2>
            </div>
            <div className="solutionsLower">
                {Boxes.map((box, index) => (
                    <SolutionsBox
                        key={index}
                        Img={box.Img}
                        Title={box.Title}
                        Description={box.Description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Solutions;