import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCart,decreaseQuantity, increaseQuantity} from "../../../redux/cart/cartActions";


const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartItems); //productos guardados en el carrito
    useSelector(state => state.numberItems);


    let TotalCart = 0;
    items.forEach(item => {
        TotalCart += item.quantity * item.price;
    });

    return (
        <section className="cart">
            
        <>
            {items.map((item, i) => {
                return (
                    <article key={i} i={i}>

                        <span>
                        <button className='gg-close-o ' onClick={() => {
                            dispatch(deleteCart(i))}}></button>
                            {item.title}

                            {/* <img src={item.image} alt={item.title}  /> */}
                            <p>Price: {item.price} €</p>
                        </span>

                            <span>
                            <button className='gg-remove' onClick={() => {
                                dispatch(decreaseQuantity(i))}}></button>
                            <p>Quantity: {item.quantity}</p>
                            
                            <button className='gg-add ' onClick={() => {
                                dispatch(increaseQuantity(i))}}></button>
                            </span>
                    
                        <p>Total Price: {parseInt(item.price * item.quantity).toFixed(2)} €</p>
                    
                    </article>
                )
            })}
        
                <h3>Total: {Number(TotalCart).toFixed(2)} €</h3>
                <Link to='/payment'>Check out</Link>
                    
            
        </>

        </section>
    )
}


export default Cart