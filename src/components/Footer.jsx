import React from 'react';
import Payment from '../components/Payment.jsx';
function Footer() {
    return (
        <footer id="footer" className="bg-black ">
            <div className="row m-auto text-center footer-elements">
                <div className="col-12 col-md-3 text-center" style={{ marginTop: '20px' }}>
                    <a href="" className="heading">My account</a>
                </div>
                <div className="col-12 col-md-3 text-center" style={{ marginTop: '20px' }}>
                    <a href="" className="heading borderleft">About youssef</a>
                </div>
                <div className="col-12 col-md-3 text-center" style={{ marginTop: '20px' }}>
                    <a href="" className="heading borderleft">Privacy policy</a>
                </div>
                <div className="col-12 col-md-3 text-center" style={{ marginTop: '20px' }}>
                    <a href="" className="heading borderleft">Contact</a>
                </div>
                <hr className='mt-3'/>
                <Payment className="mt-2" />

                <div className="col-12 text-center mt-5">
                    <div className="heading" style={{ lineHeight: '30px', marginTop: '20px' }}>
                        <span>The Art of youssef</span>
                        <p>&copy; Copyright. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;