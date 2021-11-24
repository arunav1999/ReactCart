import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import CartItem from './CartItem';
import Navbar from './Navbar';

class Cart extends React.Component
{
    state={

        count:0
    };

    addToCart = () =>
    {
        this.setState({count:this.state.count + 1})
    }
    removeFromCart = () =>
    {
        this.setState((this.state.count < 1) ? {count:0}:{count:this.state.count - 1})
    }
    render()
    {
        return (
            <>
            <Navbar totalItems={this.state.count}></Navbar>
            <button onClick={this.addToCart}>Add</button>
            <button onClick={this.removeFromCart}>Remove</button>
            <CartItem/>
            </>
        );

    }

    
}
export default Cart;