import React from 'react'

const ProductDetails = () => {
  return (
   <>
   
   <div class="hero">
        <div class="row">
            <div class="col">

                <div class="slider">
                   
                    <div class="preview">
                        <img src="Image/13.jpeg" id="imagebox" alt=""/>
                    </div>
                </div>

            </div>
            <div class="col">

                <div class="content">
                    <p class="brand">Brand: Aurelia.</p>
                    <h2>Woman Green umbrella Anarkali Dress</h2>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                    </div>
                    <p class="price">Brand: Aurelia</p>
                    <p>Size: <select name="size">

                            <option value="select size">select size</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>

                        </select></p>
                    <p>Quantity: <input type="text" value="1"/></p>
                    <button type="button">
                        BUY NOw</button>
                </div>

            </div>
        </div>


      


    </div>


   </>
  )
}

export default ProductDetails