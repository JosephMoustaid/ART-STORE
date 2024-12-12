import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../css/style.css";

function Checkout() {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phoneNumber : "",
  });


  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Shipping Info:", shippingInfo);
  };

  const goNext = () => {
    if (carouselIndex < 2) setCarouselIndex(carouselIndex + 1);
  };

  const goPrev = () => {
    if (carouselIndex > 0) setCarouselIndex(carouselIndex - 1);
  };

  return (
    <div>
      <div style={{ position: "relative", zIndex: "1" }}>
        <Nav />
        <main className="mb-5">
          <section className="checkout-page container ">
            <h1 className="checkout-title">Checkout</h1>
            <div className="carousel-content">
              {/* Shipping Information Page */}
              {carouselIndex === 0 && (
                <div className="shipping-page container">
                  <h2>Shipping Information</h2>
                  <form className="row">
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="shippingFullName" className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingFullName"
                        name="fullName"
                        value={shippingInfo.fullName}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-12">
                    <label htmlFor="shippingPhoneNumber" className="form-label">Phone Number</label>
                    <div className="input-group">
                    <select
                      className="form-select"
                      id="countryCode"
                      name="countryCode"
                      value={shippingInfo.countryCode}
                      onChange={handleShippingChange}
                      required
                      style={{ width: "30%" }}
                    >
                      <option value="+1">+1 (USA)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+212" selected>+212 (Morocco)</option>
                      <option value="+91">+91 (India)</option>
                      <option value="+61">+61 (Australia)</option>
                      <option value="+55">+55 (Brazil)</option>
                      <option value="+86">+86 (China)</option>
                      <option value="+33">+33 (France)</option>
                      <option value="+49">+49 (Germany)</option>
                      <option value="+81">+81 (Japan)</option>
                      <option value="+52">+52 (Mexico)</option>
                      <option value="+31">+31 (Netherlands)</option>
                      <option value="+64">+64 (New Zealand)</option>
                      <option value="+234">+234 (Nigeria)</option>
                      <option value="+47">+47 (Norway)</option>
                      <option value="+92">+92 (Pakistan)</option>
                      <option value="+63">+63 (Philippines)</option>
                      <option value="+7">+7 (Russia)</option>
                      <option value="+27">+27 (South Africa)</option>
                      <option value="+82">+82 (South Korea)</option>
                      <option value="+34">+34 (Spain)</option>
                      <option value="+46">+46 (Sweden)</option>
                      <option value="+41">+41 (Switzerland)</option>
                      <option value="+90">+90 (Turkey)</option>
                      <option value="+971">+971 (United Arab Emirates)</option>
                      <option value="+58">+58 (Venezuela)</option>
                    </select>
                      <input
                        type="tel"
                        className="form-control"
                        id="shippingPhoneNumber"
                        name="phoneNumber"
                        value={shippingInfo.phoneNumber}
                        onChange={handleShippingChange}
                        required
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                    <div className="mb-3 col-12">
                      <label htmlFor="shippingAddress" className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingAddress"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="shippingCity" className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingCity"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="shippingState" className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingState"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="shippingZip" className="form-label">Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingZip"
                        name="zip"
                        value={shippingInfo.zip}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="shippingCountry" className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingCountry"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                  </form>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-secondary" onClick={goPrev} disabled={carouselIndex === 0}>
                      Back
                    </button>
                    <button className="btn btn-primary" onClick={goNext}>
                      Next
                    </button>
                  </div>
                </div>
              )}

            
              {/* Order Summary Page */}
              {carouselIndex === 1 && (
                <div className="summary-page">
                  <h2>Order Summary</h2>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Items</td>
                        <td>$250.00</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>$10.00</td>
                      </tr>
                      <tr>
                        <td>Tax</td>
                        <td>$20.00</td>
                      </tr>
                      <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$280.00</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-secondary" onClick={goPrev}>
                      Back
                    </button>
                    <button className="btn btn-success" onClick={handleSubmit}>
                      Go to payement
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;