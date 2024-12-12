import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SignInForm from '../components/SignInForm';
import '../css/style.css'; 
function Home() {


  return (
    <div>  
      <div style={{ position: 'relative' , zIndex:"1"}}>
        <main>
            <SignInForm />
        </main>
      </div>
    </div>
  );
}

export default Home;