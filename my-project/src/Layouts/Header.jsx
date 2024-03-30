import React from 'react'

const Header = () => {
  return (
    <>
        <nav class="navbar">
        <div class="logo font-bold text-xl" ><h1>Our Shop</h1></div>
        <ul class="menu">
            <li><a href="" class="active">Home</a></li>
            <li><a href="newarrivals.html">New Arrivals</a></li>
            <li><a href="">Fashion</a></li>
            <li><a href="">Account</a></li>
            <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
        <div class="menu-btn">
           <i class="fa fa-bars"></i>
        </div>
   
    </nav>
    </>
  )
}

export default Header