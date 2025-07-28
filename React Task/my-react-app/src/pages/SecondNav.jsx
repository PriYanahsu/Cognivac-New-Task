import React from 'react';
import './SecondNav.css';
import img1 from '../assets/SecondNav/Logo1.png';
import img2 from '../assets/SecondNav/Logo2.png';
import img3 from '../assets/SecondNav/Logo3.png';
import img4 from '../assets/SecondNav/Logo4.png';
import img5 from '../assets/SecondNav/Logo5.png';
import img6 from '../assets/SecondNav/Logo6.png';

const SecondNav = () => {
  return (
    <div className="secondNav">
        <div className="logoMarquee">
            <div className="logoTrack">
                <div className="logoItem"><img src={img1} alt="Partner Logo 1" /></div>
                <div className="logoItem"><img src={img2} alt="Partner Logo 2" /></div>
                <div className="logoItem"><img src={img3} alt="Partner Logo 3" /></div>
                <div className="logoItem"><img src={img4} alt="Partner Logo 4" /></div>
                <div className="logoItem"><img src={img5} alt="Partner Logo 5" /></div>
                <div className="logoItem"><img src={img6} alt="Partner Logo 6" /></div>

                <div className="logoItem"><img src={img1} alt="Partner Logo 1" /></div>
                <div className="logoItem"><img src={img2} alt="Partner Logo 2" /></div>
                <div className="logoItem"><img src={img3} alt="Partner Logo 3" /></div>
                <div className="logoItem"><img src={img4} alt="Partner Logo 4" /></div>
                <div className="logoItem"><img src={img5} alt="Partner Logo 5" /></div>
                <div className="logoItem"><img src={img6} alt="Partner Logo 6" /></div>
            </div>
        </div>
    </div>
  )
}

export default SecondNav;