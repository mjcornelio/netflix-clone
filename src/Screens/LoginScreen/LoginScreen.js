import React, { useState } from 'react'
import Article from './card_story/Article'
import {BsChevronRight} from 'react-icons/bs';
import './LoginScreen.css'
import Footer from '../Footer';
import SignIn from '../SignIn';
import { Routes, useLocation } from 'react-router-dom';

function LoginScreen() {
  const [login, setLogin] = useState(false);
  return (
    <div className='loginScreen'>
      <nav className="loginScreen_nav">
        <img className ="loginScreen_logo"src="https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <button className="loginScreen_signIn "onClick={()=>{setLogin(true)}}>
          Sign In
        </button>
      </nav>
      <header className='loginScreen_header'>
          
          {login ?(
            <SignIn/>
          ):(
            <div className="loginScreen_body">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen_input">
              <form>
                <input type="text" placeholder='Email Address' autoFocus/>
                <button onClick={()=>{setLogin(true)}} type='submit'>Get Started <BsChevronRight/></button>
              </form>
            </div>
          </div>
          )}
          <div className="loginScreen_gradient"/>
      </header>
      
      {login ? (
        null
      ):(
        <main>
        <Article />
      </main>
      )}
     

      <footer>
        <Footer/>
      </footer>
     
    </div>
  )
}

export default LoginScreen