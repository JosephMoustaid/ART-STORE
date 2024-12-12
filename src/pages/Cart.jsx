import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import painting1 from "../assets/paintings/aspire.jpg";
import { BsTrash } from 'react-icons/bs'; // Import Bootstrap Trash icon

import "../css/style.css"; 

function Cart() {
  const initialCartItems = [
    { title: "Cyclops Eyewear", imageUrl: painting1, price: "$149.00", quantity: 1, size: "60*80" },
    { title: "Men's Riding Jacket - Black/Grey", imageUrl: painting1, price: "$149.00", quantity: 1, size: "80*100" },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const updateQuantity = (index, quantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
  };

  return (
    <div className="cart-page">
      <div style={{ position: "relative", zIndex: "1" }}>
        <Nav />
        <main className="mb-5 mt-4">
          <section className="order-detail row">
            <div className="order-detail--wrapper col-xs-12 col-md-12 col-lg-9">
              <header className="order-detail--head row">
                <h1 className="order-detail--title col-xs-12 col-md-12 col-lg-12">Shopping Cart</h1>
                <div className="order-detail__legend row">
                  <a className="order-detail__legend--action btn mx-2" href="/checkout">Checkout</a>
                  <div className="order-detail__legend--item" id="order-detail__legend--quantity" aria-hidden="true" role="presentation">Quantity</div>
                  <div className="order-detail__legend--item" id="order-detail__legend--price" aria-hidden="true" role="presentation">Price</div>
                </div>
              </header>
              <div className="order-detail--body row">
                <section className="cart-items col-xs-12 col-md-12 col-lg-9">
                  {cartItems.map((item, index) => (
                    <div className="cart-item cart-item--shopping-cart row" key={index}>
                      <div className="cart-item--wrapper">
                        <div className="cart-item--details">
                          <a className="cart-item--link cart-item--image-link" href="#">
                            <div className="cart-item--image">
                              <img className="img-responsive" src={item.imageUrl} alt={item.title} />
                            </div>
                          </a>
                          <div className="cart-item--description">
                            <a className="cart-item--link cart-item--text-link" href="#">
                              <h2 className="cart-item--title">{item.title}</h2>
                            </a>
                            <div className="cart-item--detail cart-item--size">Size: {item.size}</div>
                            <div className="cart-item--action">
                              <button className="cart-item--submit cart-item--remove" onClick={() => removeItem(index)}>Remove from cart</button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item--values">
                          <div className="cart-item--quantity">
                            <form className="cart-item--quantity-form" method="post" novalidate="novalidate" aria-labelledby="order-detail__legend--quantity">
                              <input className="cart-item--quantity-input" value={item.quantity} onChange={(e) => updateQuantity(index, parseInt(e.target.value))} />
                              <button className="cart-item--quantity-update cart-item--submit" aria-label="Update Quantity" type="submit">Update</button>
                            </form>
                          </div>
                          <div className="cart-item--price" aria-labelledby="order-detail__legend--price"><span>{item.price}</span></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
                <aside className="cart-summary col-xs-12 col-md-12 col-lg-3 py-2 px-2">
                  <table className="cart-summary--table">
                    <thead className="cart-summary--table-head">
                      <tr>
                        <th colspan="2">
                          <h2 className="cart-summary--title row">Order Summary</h2>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="cart-summary--table-body mx-2">
                      <tr className="cart-summary--table-row">
                        <td className="cart-summary--table-col" scope="row">Items</td>
                        <td className="cart-summary--table-col">${calculateTotal()}</td>
                      </tr>
                      <tr className="cart-summary--table-row">
                        <td className="cart-summary--table-col" scope="row">Shipping</td>
                        <td className="cart-summary--table-col">$6.99</td>
                      </tr>
                      <tr className="cart-summary--table-row">
                        <td className="cart-summary--table-col" scope="row">Estimated Tax</td>
                        <td className="cart-summary--table-col">$22.00</td>
                      </tr>
                    </tbody>
                    <tfoot className="cart-summary--table-foot">
                      <tr className="cart-summary--table-row">
                        <td className="cart-summary--table-col" scope="row">
                          <div>Estimated Order Total</div>
                        </td>
                        <td className="cart-summary--table-col">
                          <div>
                            <span className="cart-summary--table-total">${(parseFloat(calculateTotal()) + 6.99 + 22.00).toFixed(2)}</span>
                            <span className="cart-summary--table-currency">USD</span>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <section className="cart-summary--fields">
                    <section className="cart-summary--promo-code">
                      <form className="cart-summary--promo-code-form">
                        <label className="cart-summary--promo-code-label" for="promocode">Add a Promotion Code</label>
                        <div className="cart-summary--promo-code-wrapper">
                          <input className="cart-summary--promo-code-input" type="text" placeholder="Enter code" id="promocode"></input>
                          <button className="cart-summary--promo-code-submit btn" type="submit">Apply</button>
                        </div>
                      </form>
                    </section>
                    <section className="cart-summary--order-actions">
                      <a className="btn cart-summary--order-action" href="/checkout">Checkout</a>
                      <a className="btn cart-summary--order-action" href="/shop">Continue Shopping</a>
                    </section>
                  </section>
                </aside>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;