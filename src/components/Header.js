import React from 'react'
function Header(props)
{
    //console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-add-to-cart-vector-icon-png-image_321034.jpg" />
            </div>
        </div>
    )
}

export default Header