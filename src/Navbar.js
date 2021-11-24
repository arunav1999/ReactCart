import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart'


function Navbar(props)
{
    render()
    {
        return (
            <>
                
                <div className="navbar" 
                style={{"width":"100%","height":"5vh",
                "background-color":"beige","color":"black",
                "font-size":"50px"
                }}>
                    <i className="fa fa-shopping-cart fa-1x" aria-hidden="true"></i> {props.totalItems}</div>
            </>
        )
    }
}
export default Navbar;