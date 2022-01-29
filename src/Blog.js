import React from 'react';
import Blog4 from './img/blog-03.jpg';
import Blog1 from './img/blog-01.jpg';
import Blog2 from './img/blog-02.jpg';
import './Blog.css';


const Blog = () => {
    return (
        <div className='blog component__space' id="Blog">
            <div className='heading'>
                <h1 className='heading'>
                    Latest News
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
                        <div className='project__box pointer'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Blog4} alt='' className='project__img'>
                                    </img>
                                </div>
                                <div className='mask__effect'></div>

                                <div className='Blog__meta absolute'>
                                    <h5 className='project__text'>Development</h5>
                                    <h4 className='project__text'>Getting Tickets to the big show.</h4>
                                    <a href="#" className='blog project__btn btn'>View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col__3'>
                        <div className='project__box pointer'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Blog1} alt='' className='project__img'>
                                    </img>
                                </div>
                                <div className='mask__effect'></div>

                                <div className='Blog__meta absolute'>
                                    <h5 className='project__text'>Development</h5>
                                    <h4 className='project__text'>Getting Tickets to the big show.</h4>
                                    <a href="#" className='blog project__btn btn'>View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col__3'>
                        <div className='project__box pointer'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Blog2} alt='' className='project__img'>
                                    </img>
                                </div>
                                <div className='mask__effect'></div>

                                <div className='Blog__meta absolute'>
                                    <h5 className='project__text'>Development</h5>
                                    <h4 className='project__text'>Getting Tickets to the big show.</h4>
                                    <a href="#" className='blog project__btn btn'>View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Blog;
