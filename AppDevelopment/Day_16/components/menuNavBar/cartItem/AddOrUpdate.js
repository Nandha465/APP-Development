import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import FoodService from './FoodService';

const AddOrUpdate=()=> {
  const nav=useNavigate();
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[phone,setphone]=useState('');
  const[address,setaddress]=useState('');
  const[pcode,setpcode]=useState('');
  const[city,setcity]=useState('');
  const[province,setprovince]=useState('');
  const {id} = useParams();
    const saveOrUpdateFood = (e) => {
      e.preventDefault();
      if(email.length==0||address.length==0||pcode.length==0||name.length==0||phone.length==0||city.length==0||province.length==0){
        alert("Enter All fields")
      }
      else if(phone.length<10){
        alert("Enter Correct Phone Number!")
      }
      
     
      else{
      if (window.confirm("Confirm Details!") === true) {
        e.preventDefault();
          const food = {id, name,phone,email, address,pcode,city,province}
          if(id){
            FoodService.updateFood(id, food).then((response) => {
                  nav('/home')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
            FoodService.createFood(food).then((response) =>{
                  console.log(response.data)
                  nav('/home');
              }).catch(error => {
                  console.log(error)
              })
          }
        }
      }
    } 
  
      useEffect(() => {
        FoodService.getFoodById(id).then((response) =>{
              setname(response.data.name)
              setphone(response.data.phone)
              setemail(response.data.email)
              setaddress(response.data.address)
              setpcode(response.data.pcode)
              setcity(response.data.city)
              setprovince(response.data.province)
          }).catch(error => {
              console.log(error)
          })
      }, [])
      const title = () => {

        if(id){
            return <h1>Update Product</h1>
        }else{
            return <h1>Add Product</h1>
        }
    }
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        {title()}
        <p>Enter Food Details</p>
      </div>
      <form>
        <div className="input">
          <input type="text" placeholder="Customer Name" value={name} onChange={(e)=>setname(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Customer Phone" value={phone}  pattern="[0-9]+"
                   maxLength="10"  onChange={(e)=>setphone(e.target.value)} />
        </div>
        <div className="input">
          <input type="text" placeholder="Customer FoodName" value={foodname} onChange={(e)=>setfoodname(e.target.value)}/>
        </div>
        <div className="input">
          <input type="number" placeholder="Food Quantity" value={quantity}  onChange={(e)=>setquantity(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Food Price" value={price} pattern="[0-9]+"   onChange={(e)=>setprice(e.target.value)} />
        </div>
        
        <input onClick={saveOrUpdateFood} className="e-signup-btn" type="submit" value="Submit" />
      <Link to="/home">  <button className="e-cancel-btn" >Cancel </button></Link>
        </form>
    </div>
  </div>
    </div>
  )
}

export default AddOrUpdate