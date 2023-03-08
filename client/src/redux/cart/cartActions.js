import { GET_ALL_PRODUCTS, ADD_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_CART } from './cartTypes'

//las funciones se llaman en el componente dentro del metodo dispatch (los metodos tienen dentro las acciones)
export const getAllProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload: products
    }
}

export const addToCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}

export const increaseQuantity = (i) => {
    return {
        type: INCREASE_QUANTITY,
        payload: i //le indicamos cual de los elementos del array tiene que incrementar
    }
}

export const decreaseQuantity = (i) => {
    return {
        type: DECREASE_QUANTITY,
        payload: i
    }
}

export const deleteCart = (i) => {
    return {
        type: DELETE_CART,
        payload: i
    }
}