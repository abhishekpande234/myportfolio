import React from 'react';
import './About.css';
import aboutImg from './img/abt.jpeg';

function About() {
    return (
        <div className='about component__space' id="About">
            <div className="container">
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImg} alt="" className='about__img' />
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                            About Me
                        </h1>
                        <div className='about__meta'>
                            <p className='about__text p__color'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className='about__meta'>
                            <p className='about__text p__color'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                            <p className='about__text p__color'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        <div className='about__button d__flex align__items__center'>
                             <a href='#'><button className='about btn pointer'>Download CV</button></a>   
                             <a href='#'><button className='about btn pointer'>Hire Me</button></a>   

                        </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* down to top button */}
            <div className='up__to__top__btn'></div>
        </div>
    );
}

export default About;
