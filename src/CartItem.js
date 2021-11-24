import React from 'react'
import { Component } from 'react'
import ReactDom from 'react-dom'

class CartItem extends Component
{
    render()
    {
        return(
            <>
                <div id="cart_item">
                    <div id="product_title"><h1>Product Title</h1></div>
                    <div id="product_quantity"><h2>Quantity</h2></div>
                    <div id="button_container">
                        <div><button >Add</button></div>
                        <div><button >Remove</button></div>
                    </div>
                </div>
            </>
        );
    }
}
export default CartItem;