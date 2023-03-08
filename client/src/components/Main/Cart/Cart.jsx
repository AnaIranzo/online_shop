import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
                            <button  onClick={() => {
                                dispatch(deleteCart(i))}}>X</button>
                                {item.title}
                            </span>

                              
                            
                            <img src={item.image} alt={item.title}  />
                            <p>Price: {item.price} €</p>
                            
                                <span>
                                <button  onClick={() => {
                                    dispatch(decreaseQuantity(i))}}>-</button>
                                <p>Quantity: {item.quantity}</p>
                                
                                <button  onClick={() => {
                                    dispatch(increaseQuantity(i))}}>+</button>
                                </span>
                          
                            <p>Total Price: {parseInt(item.price * item.quantity).toFixed(2)} €</p>
                          
                        </article>
                    )
                })}
              
                    <p>Total: {Number(TotalCart).toFixed(2)} €</p>
                    
               
            </>

        </section>
    )
}


export default Cart