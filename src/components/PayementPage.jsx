import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load your Stripe public key
const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://your-website.com/success",
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            setSuccess(true);
            setLoading(false);
        }
    };

    return (
        <div className="checkout-form">
            <h1>Payment</h1>
            {!success ? (
                <form onSubmit={handleSubmit}>
                    <PaymentElement />
                    {error && <p className="error">{error}</p>}
                    <button type="submit" disabled={!stripe || loading}>
                        {loading ? "Processing..." : "Pay Now"}
                    </button>
                </form>
            ) : (
                <div className="success-message">
                    <h2>Payment Successful!</h2>
                    <p>Thank you for your payment.</p>
                </div>
            )}
        </div>
    );
};

const PaymentPageComponent = () => {
    const options = {
        // Customize payment methods supported
        appearance: { theme: "stripe" },
    };

    return (
        <div className="payment-page">
            Here will be the prebuild payment component provided by Stripe 
            {/*
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
            */}
        </div>
    );
};

export default PaymentPageComponent;
