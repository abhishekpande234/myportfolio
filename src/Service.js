import React from 'react';
import './Service.css';

function Service() {
    return (
        <div className='service component__space' id="Services">
            <div className='heading'>
                <h1 className='heading'>
                   My Services
                </h1>
                <p className='heading p__color'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className='heading p__color'>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col__3'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                                    <line x1="2" y1="20" x2="2" y2="20"></line>
                                </svg>
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Business Stratergy
                                </h1>
                                <p className='p service__text p__color'>
                                    Ut enim ad minim veniam,
                                </p>
                                <p className='p service__text p__color'>
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col__3'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                </svg>
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Website Development
                                </h1>
                                <p className='p service__text p__color'>
                                    Ut enim ad minim veniam,
                                </p>
                                <p className='p service__text p__color'>
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col__3'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Marketing and Reporting
                                </h1>
                                <p className='p service__text p__color'>
                                    Ut enim ad minim veniam,
                                </p>
                                <p className='p service__text p__color'>
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
