import React from 'react'
import banner from "../components/assets/loginbannerlittlelemon.jpg"
import "./styles/ReservationsContent.css";
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';

function LoginPage() {
  return (
    <div className="wrapper">
        <div className="container"> 
            <div className='form'> 
                <p>Welcome back. There are new offers for our esteemed customers</p>
                <LoginForm/>
                
            </div>
            <div className='form sign-up-form'>
                <h2>Become a Member</h2>
                <br></br>
                <p>Please fill in and submit form to join our community and share your experiences with others</p>
                 <SignUpForm/>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
