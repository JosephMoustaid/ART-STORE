import React, { useState, useEffect } from 'react';
import HamMenu from "../assets/images/hamburger.png";
import Search from "../assets/images/search.png";
import ShoppingBag from "../assets/images/shopping-bag.png";
import Instagram from "../assets/images/instagram.png";
import Facebook from "../assets/images/facebook.png";

function Nav() {
    const [isOffCanvasVisible, setIsOffCanvasVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const button = document.querySelector('.scroll-to-top');
            const buttonContainer = document.querySelector('.scroll-to-top-container');
            if (window.scrollY > 200) {
                button.classList.add('show');
                buttonContainer.classList.add('show');
            } else {
                button.classList.remove('show');
                buttonContainer.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to toggle the offcanvas
    const toggleOffCanvas = () => {
        setIsOffCanvasVisible(!isOffCanvasVisible);
    };

    return (
        <>
            <div className='scroll-to-top-container'>
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <span className="arrow m-auto mb-1"></span>
                </button>
            </div>
            
            <header>
                <nav className="navbar bg-light" id="navbar">
                    <div id="offcanvasNav " style={{ marginBottom: '40px' }}>
                        <button 
                            className="m-2" 
                            style={{ border: '0px', backgroundColor: 'white' }} 
                            type="button" 
                            onClick={toggleOffCanvas} // Toggle offcanvas visibility
                            aria-label="Toggle navigation"
                        >
                            <img src={HamMenu} id="ham-menu-img" alt="menu" />
                        </button>

                        {/* Offcanvas */}
                        <div
                            className={`offcanvas offcanvas-start text-bg-light ${isOffCanvasVisible ? 'show' : ''}`} // Add 'show' class based on state
                            tabIndex="-1"
                            id="offcanvasDarkNavbar"
                            aria-labelledby="offcanvasDarkNavbarLabel"
                        >
                            <div className="offcanvas-header bg-black" style={{ height: '80px' }}>
                                <h5 className="text-center m-auto navbar--headers" id="navbar--header">MENU</h5>
                                {/* Close button */}
                                <button 
                                    type="button" 
                                    className="btn-close btn-close-white" 
                                    onClick={toggleOffCanvas} // Close offcanvas when clicked
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div>
                                <ul className="navbar-nav flex-grow-1 align-middle offcanvas-list">
                                    <li >
                                        <div className="row navbar--headers">
                                            <div className="col-10 m-auto">
                                                <div className="input-group">
                                                    <input type="text" style={{ width: '100%' }} id="search" />
                                                </div>
                                            </div>
                                            <div className="col-2 m-auto">
                                                <button type="button" className="btn text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <img src={Search} alt="Srch" height="20px" width="20px" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="navbar--headers menuElements"><a href="./ ">home</a></li>
                                    <li className="navbar--headers menuElements"><a href="./shop ">Youssef's Work/Shop</a></li>
                                    <li className="navbar--headers menuElements"><a href="./gallery ">Art Gallery</a></li>
                                    <li className="navbar--headers menuElements"><a href="./about ">About me</a></li>
                                    <li className="navbar--headers menuElements"><a href="./blog ">Blog</a></li>
                                    <li className="navbar--headers">
                                        <a href="cart">
                                            <div className="row">
                                                <div className="col-10">Cart</div>
                                                <div className="col-2"><img src={ShoppingBag} height="30px" width="30px" alt="card" /></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="navbar--headers mb-2">
                                        <div className="row">
                                            <div className="col-9">Social Media</div>
                                            <div className="col-1">
                                                <a href="facebook" target="_blank">
                                                    <img src={Facebook} height="25px" width="25px" alt="fb" />
                                                </a>
                                            </div>
                                            <div className="col-1">
                                                <a href="instagram" target="_blank">
                                                    <img src={Instagram} height="25px" width="25px" alt="ig" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="login">
                                        <a href="./sign-in " style={{ textDecoration: 'none', color: 'white' }}>
                                            <span className="fs-4">Account</span> <br />
                                            <span className=''>Returning Customer? Login                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-expand-lg w-75" id="navbarexpanded">
                        <ul className="navbar-nav nav justify-content-end">
                            <li className="navbar--headers"><a href="./ ">home</a></li>
                            <li className="navbar--headers"><a href="./shop ">Youssef's Work/Shop</a></li>
                            <li className="navbar--headers"><a href="./gallery ">Art Gallery</a></li>
                            <li className="navbar--headers"><a href="./about ">About me</a></li>
                            <li className="navbar--headers"><a href="./blog ">Blog</a></li>
                            <li>
                                <a href="cart" id="cart" className='position-relative'>
                                    <img src={ShoppingBag} height="30px" width="30px" alt="card" className="mt-2" id="cardImage" />
                                    <span class="position-absolute top-0 start-100 fs-6 translate-middle badge rounded-pill bg-black p-1">
                                        0
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    );
}

export default Nav;
