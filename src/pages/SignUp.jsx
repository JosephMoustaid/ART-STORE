import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SignUpForm from '../components/SignUpForm';
import '../css/style.css'; 
function Home() {


  return (
    <div>  
      <div style={{ position: 'relative' , zIndex:"1"}}>
        <main>
            <SignUpForm />
        </main>
      </div>
    </div>
  );
}

export default Home;