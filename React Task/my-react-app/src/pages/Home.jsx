import React from 'react'
import './Home.css';
import Button from '../elements/button';
import image1 from '../assets/Home/image1.png';
import image2 from '../assets/Home/image2.png';
import image3 from '../assets/Home/image3.png';
import image4 from '../assets/Home/image4.png';
import image5 from '../assets/Home/image5.png';
import image6 from '../assets/Home/image6.png';
import image7 from '../assets/Home/image7.png';
import image8 from '../assets/Home/image8.png';

const Home = () => {
    return (
        <div className="homePage">
            <div className="homeContainer">
                <div className="homeContent">
                    <div className="homeLeft">
                        <h1>Unleash the Power of Data</h1>
                        <p className="subtitle">See into the future with our state-of-the-art AI solutions. Unleash the potential of machine learning to innovate, optimize, and transform your business processes.</p>
                        <div className="buttonGroup">
                            <Button label="Start Your Free Trial" className="primary" />
                            <Button label="Learn more" className="secondary" />
                        </div>
                    </div>
                    <div className="homeRight">
                        <div className="imageFlexContainer">
                            <div className="imageRow">
                                <div className="imageItem"></div>
                                <div className="imageItem"><img src={image1} alt="" /></div>
                                <div className="imageItem"><img src={image2} alt="" /></div>
                            </div>
                            <div className="imageRow">
                                <div className="imageItem"><img src={image3} alt="" /></div>
                                <div className="imageItem"><img src={image4} alt="" /></div>
                                <div className="imageItem"><img src={image5} alt="" /></div>
                            </div>
                            <div className="imageRow">
                                <div className="imageItem"><img src={image6} alt="" /></div>
                                <div className="imageItem"><img src={image7} alt="" /></div>
                                <div className="imageItem"><img src={image8} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;