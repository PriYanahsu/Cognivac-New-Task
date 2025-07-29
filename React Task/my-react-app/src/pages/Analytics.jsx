import React from 'react'
import './Analytics.css'
import Icon from '../assets/Ananlytics/AnalyticsIcon.png';
import Image from '../assets/Ananlytics/AnanlyticsImage.png';
import Button from '../elements/button';

const Analytics = () => {
  return (
    <div className='Analytics'>
      <div className='AnalyticsInner'>
        <div className="AnalyticsInnerOne">
            <div className="First">
                <h2>Experience the Future of Business Analytics</h2>
                <p>Get hands-on with our advanced AI-driven features and see the difference for yourself. Start your free trial today.</p>
            </div>
            <div className="Second">
                <div className="innerLine">
                    <img src={Icon} alt="" />
                    <p>Context-aware natural language search and discovery</p>
                </div>
                <div className="innerLine">
                    <img src={Icon} alt="" />
                    <p>Embark on a journey of data-driven decision-making</p>
                </div>
                <div className="innerLine">
                    <img src={Icon} alt="" />
                    <p>Single permission model for data + AI</p>
                </div>
            </div>
            <Button label="Get a Demo" variant ='outlinex' />
        </div>
        <div className="AnalyticsInnerOne">
            <div className="image">
                <img src={Image} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
