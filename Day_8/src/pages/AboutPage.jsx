import React from 'react'
import MenuNavBar from "../components/menuNavBar/MenuNavBar";
import '../assets/Aboutus.css';

function AboutPage() {
  return (
    <div>
    
    <MenuNavBar />

    <div>
     
      <div className='container'> 
      <p className='para mt-5' >About Us!</p>
      <p className="p1">Thankyou for taking the time to explore this page.</p>

      <p className="p1">At <b>Meow Playground</b> we believe that pets are not just animals; they are cherished members of our families. That's why we are dedicated to providing top-notch products and 
      services to ensure your pets live their happiest and healthiest lives. With a passion for pets and a commitment to excellence, we have become a trusted destination for all your pet needs.</p>
      
      <p className="p1"><b>Our Story</b></p>
      
      <p className="p1">Founded by Nandha for pet lovers, Meow Playground was born out of a deep love and respect for animals. Our journey began with a simple goal: to make pet ownership 
      a joyful and stress-free experience for everyone. We understand the unique bond between pets and their owners, and our mission is to strengthen that bond by offering exceptional products and expert advice.</p>
      
      <p className="p1"><b>Thank you for choosing Meow Playground as your trusted source for all things pet-related. We look forward to serving you and your beloved pets for years to come. </b></p>
      
      
      
      
      <p className="p1"><b>Your Pet's Happiness, Our Priority!</b></p>
      <p className='para'>Meow Playground</p>
      
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

    </div>
  )
}

export default AboutPage