import React ,{useRef}from 'react'
import './LoginScreen/LoginScreen.css'
import {auth} from '../Connection'
import {BsInfoCircle} from 'react-icons/bs'

function SignIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register =(e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            
        ).then((authUser)=>{
            console.log(authUser)
        }).catch(error=>{
            alert(error.message)
        })

    }

    const login =(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            
        ).then((authUser)=>{
            console.log(authUser)
        }).catch(error=>{
            alert("Error " +error.message)
        })
    }
  return (
    <div className="sign__in">
        <h2>Sign In </h2>
        <div className='info'><i><BsInfoCircle/></i></div>
        <div className="info__message">
            <h5>Use this credential to SignIn</h5>
            <p>Email: marjcornelio25@gmail.com</p>
            <p>Password: 123456</p>
            <br/>
            <h5>You can also create an account using SignUp</h5>
            <p>Input Email and password</p>
            <p>and simply click SignUpNow</p>
        </div>
        <form>
            <input ref={emailRef}type="text" name="email" id="" placeholder='Email or phone number'/>
            <input ref={passwordRef}type="password" name="password" id="" placeholder='Password'/>
            <button type="submit" onClick={login}>Sign In</button>
            <div className="signIn__text">
                <input type="checkbox" name="remember" id="" />
                <label htmlFor="remember"> Remember Me</label>
                <p>Need Help?</p>
            </div>

            <p className="sign__up">
                New to Netflix?
                <span onClick={register}>Sign Up Now</span>
            </p>
        </form>
    </div>
  )
}

export default SignIn