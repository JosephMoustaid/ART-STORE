import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/style.css';
import PaymentPageComponent from '../components/PayementPage';
function Payement() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Nav />
        <main className='mb-5'>
          <PaymentPageComponent />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Payement;
