import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
        <section className="content">
        <h1>New Arrivals For Boy's & Girl's</h1>
        <p>Lorem ipsum dolor sit amet consectetur.
            <br/>Lorem ipsum dolor sit amet consectetur
        </p>
        <button>Shop Now</button>

    </section>
    <h1 className="pheading font-bold text-2xl">Our Latest Products</h1>
    <section className="sec">
        <div className="products">
            <div className="card">
                <div className="img"><img src="/Image/13.jpeg" alt=""/> </div>
                <div className="desc">Women</div>
                <div className="title">Lady Kurthi</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>

            <div className="card">
                <div className="img"><img src="/Image/2.jpg" alt=""/> </div>
                <div className="desc">Men</div>
                <div className="title">Lady Sandal</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>

            <div className="card">
                <div className="img"><img src="/Image/3.jpg" alt=""/> </div>
                <div className="desc">Men</div>
                <div className="title">Laptop Bag</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>

            <div className="card">
                <div className="img"><img src="/Image/4.jpg" alt=""/> </div>
                <div className="desc">Women</div>
                <div className="title">Watches</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>

            <div className="card">
                <div className="img"><img src="/Image/5.avif" alt=""/> </div>
                <div className="desc">Women</div>
                <div className="title">Side Bag</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>

            <div className="card">
                <div className="img"><img src="/Image/6.webp" alt=""/> </div>
                <div className="desc">Men</div>
                <div className="title">Glass</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>
            <div className="card">
                <div className="img"><img src="/Image/7.jpg" alt=""/> </div>
                <div className="desc">Women</div>
                <div className="title">Lady Sandal</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>
            <div className="card">
                <div className="img"><img src="/Image/8.jpg" alt=""/> </div>
                <div className="desc">Women</div>
                <div className="title">Boot</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>
            <div className="card">
                <div className="img"><img src="/Image/12.jpg" alt=""/> </div>
                <div className="desc">Men</div>
                <div className="title">T-shirt</div>
                <div className="box">
                <div className="price">$50</div>
                <button className="btn"> <Link to="/productdetail">Read More</Link></button>
            </div>
            </div>
        </div>

    </section>
  
    
    <div className="newsletter">
        <div className="contnaier">
            <div className="text">
                <h4>sign up to newsletter</h4>
                <p1>Get email updates about our latest shop...and receive</p1>
            </div>

            <div className="subscribe-form">
                <form action="">
                    <input type="email" placeholder="enter your email here..."/>
                    <button className="btn-srch">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
   
   </>
  )
}

export default Home