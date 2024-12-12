import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { FaCcVisa, FaCcMastercard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa'; // Import payment icons

function Payment() {
    const paymentMethods = [
        { name: 'Visa', icon: <FaCcVisa size={30} /> },
        { name: 'MasterCard', icon: <FaCcMastercard size={30} /> },
        { name: 'PayPal', icon: <FaPaypal size={20} /> },
        { name: 'Apple Pay', icon: <FaApplePay size={40} /> },
        { name: 'Google Pay', icon: <FaGooglePay size={40} /> },
    ];

    return (
        <section className="container w-50  mt-2">
                    <p className="lead text-center">We accept : </p>
                    <div className="row justify-content-center">
                        {paymentMethods.map((method, index) => (
                            <div className="col-3 col-lg-2 text-center" key={index}>
                                <div className="shadow-sm">
                                    <div>
                                        {method.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
        </section>
    
    );
}

export default Payment;