import React from 'react'

const Footer = () => {
  return (
    <>

    <footer class="footer-distributed">

        <div class="footer-left">
            <h3>OUR<span>SHOP</span></h3>

            <p class="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">New Arrivals</a>
                |
                <a href="#">Fashion</a>
                |
                <a href="#">Account</a>
            </p>

            <p class="footer-company-name">Copyright © 2021 <strong>OurShop</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Dhapasi</span>
                    Kathmandu</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+977-98413456789</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:ourshop00001.co@gmail.com">ourshop@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                <strong>Our Shop</strong> is a Youtube channel where you can find more creative CSS Animations
                and
                Effects along with
                HTML, JavaScript and Projects using C/C++.
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    </footer>

    
    </>
  )
}

export default Footer