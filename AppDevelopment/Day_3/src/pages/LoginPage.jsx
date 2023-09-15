import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../assets/Log.css';
import { Link, useNavigate } from 'react-router-dom';


function LoginPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

   
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
  

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      nav("/home");
    }
    
   
  }


  

  

  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>

            <div className='input-field'>
            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
            <input className='LoginInput' type='text' placeholder='Username'/>
            
            </div>
            
            <div className='input-field'>
            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
            <input className='LoginInput' type='password'  value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            </div>
            <h6> {errors.password && <span>{errors.password}</span>}</h6>
            <Link to='/home'><button className='btn' handleSubmit>Sign In</button></Link>
           
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className='input-field'>
            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
            <input className='LoginInput' type='text' placeholder='Username'/>
            <h5>{errors.name && <span>{errors.name}</span>}</h5>
            </div>
            <div className='input-field'>
            <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
            <input className='LoginInput' type='email' 
             placeholder='Email'/>
             <h5>{errors.email && <span>{errors.email}</span>}</h5>
 </div>
            <div className='input-field'>
            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
            <input className='LoginInput' type='password' value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            <h5> {errors.password && <span>{errors.password}</span>}</h5>
            </div>
            <Link to='/'><button className='btn' >Sign Up</button></Link>
           
            <p className="social-text loginp">Or Sign up with social platforms</p>
            <div className="social-media">
             
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="contentLogin">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
              </button>
          </div>
          <img src="/img/dogLogin1.svg" class="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="contentLogin">
            <h3 className='loginh3'>One of us ?</h3>
            <p className='loginp'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="/img/dogLogin.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  )}

  export default LoginPage
 
  // <h5>{errors.email && <span>{errors.email}</span>}</h5>