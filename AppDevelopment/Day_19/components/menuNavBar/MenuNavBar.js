import Header from "../../components/menuNavBar/header/Header";
import ItemsNavBar from "../../components/menuNavBar/rwdItemNavBar/ItemsNavBar";
import Cart from "../../components/menuNavBar/cartItem/Cart";

import { useSelector } from "react-redux";
import { getEmail,getToken } from "../../pages/LocalStorage";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
// import { toggleSidebar } from '../redux/sidebarSlice';


const MenuNavBar = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showMenu = useSelector((state) => state.ui.menuIsVisible);

  // const token=getToken();

  const nav=useNavigate();
  const [show, setShow] = useState(false);
  const token=getToken();
  const CryptoJS = require('crypto-js');
  const [isValidityExpired,setValidity]=useState(true)
 const Email=getEmail();

 const isSidebarOpen = useState(true)
 const dispatch = useDispatch();
//  const handleToggleSidebar = () => {
//    dispatch(toggleSidebar());
//   };


  useEffect(()=>{
 
    try {
      const parts = token.split('.');
      const decodedPayload = CryptoJS.enc.Base64.parse(parts[1]).toString(CryptoJS.enc.Utf8);
      console.log(decodedPayload);
      const parsedPayload = JSON.parse(decodedPayload);
      if (parsedPayload.exp) {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (parsedPayload.exp < currentTimestamp) {
          alert("Session Expired. Please Login again....!")
          localStorage.clear();
          nav("/")
        }
      } else {
        console.log('JWT does not contain an expiration claim (exp).');
      }
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
  },[])

  return (
    <>
      {showMenu && <ItemsNavBar />}
      {showCart && <Cart />}
      <Header />
    </>
  );
};

export default MenuNavBar;
