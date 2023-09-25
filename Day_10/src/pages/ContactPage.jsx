import React, { useState } from 'react';
import MenuNavBar from "../components/menuNavBar/MenuNavBar";

import '../assets/Contact.css'

function ContactPage() {
  
  return (
    <div>
    <MenuNavBar />
        <div className='conatiner'>
          <p className='para1 mt-5'>Contact Us!</p>
        </div>
        <div className='container'>

                <p className='cp'>
                <i class='bx bxs-home-smile'></i> Coimbatore,India
                </p>
                <p className='cp'>
                    <i class='bx bx-envelope'></i> meow@gmail.com
                </p>
                <p className='cp'>
                <i class='bx bx-phone'></i> +91 9597712723
                </p>
                <p className='cp'>
                <i class='bx bx-printer' ></i>+01 238 238 23
                </p>
                  
        </div>
        <div className='container'>
      <div className='row'>
         <div className='col-sm-4'>
           <img  src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_640.jpg"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded" src="https://img.freepik.com/free-photo/pet-accessories-still-life-with-chew-bone-toys_23-2148949561.jpg"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded" src="https://img.freepik.com/premium-photo/fish-tank-with-orange-white-fish-it_655090-63959.jpg"/>
         </div>
      </div>
      </div>
      

    </div>
  )
}

export default ContactPage