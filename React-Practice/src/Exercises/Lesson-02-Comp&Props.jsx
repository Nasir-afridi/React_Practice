import React from 'react'
import LoginForm from './02-LoginForm';
import Products from './02-Products';

const Second = () => {
  return (
    <>
    <br />
    <br />
    {/* 2a */}
        <p>Hey, welcome to my website</p>
    
    {/* 2b and 2c */}
        <LoginForm />

    {/* 2d */}
        <br />
        <br />
        <br />
         <Products heading = 'Cotton Socks'/>
         <br />
         <br />
         <br />
         <Products heading = 'Tennis ball'/>
        <br />
        <br />
        <br />
         <Products heading = 'Plain T-Shirt'/>

    </>
  );
  
}

export default Second