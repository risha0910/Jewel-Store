import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const cartobj = useSelector(store=>store.cartReducer)
    return (
        <div>

            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active" style={{paddingTop:'10px'}}>
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item" style={{paddingTop:'10px'}}>
                            <a class="nav-link" href="/additem">Add Item</a>
                        </li>
                        <li className='nav-item' style={{paddingLeft:'860px'}}>
                            <a href='/cart' className='nav-link'><img src='https://cdn.powered-by-nitrosell.com/store_images/29/7192/customcontent/shoppingcart.png' style={{height:'2px', paddingRight:'10px'}} />Cart {cartobj.cartitems.length}</a>
                        </li>

                      


                    </ul>
                    
                </div>
            </nav>
        </div>

    )
}
