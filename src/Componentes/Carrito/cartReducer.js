import { TYPES } from "../Utilidades/actions";

export const cartInitialState = {
    products: [
        { id: 1, name: 'Producto 1', price: 10, stock:80 },
        { id: 2, name: 'Producto 2', price: 50, stock:100 },
        { id: 3, name: 'Producto 3', price: 100, stock:5 },
    ],
    cart: []
}

export function cartReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === newItem.id ? { ...item, count: item.count + 1 } : item
                    )
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, count: 1 }]
                }
        }
        case TYPES.REMOVE_ONE_PRODUCT: {
            let itemInCart = state.cart.find(item => item.id === action.payload)
            return itemInCart.count > 1 
            ? {
                ...state,
                cart: state.cart.map(item =>
                    item.id === itemInCart.id ? { ...item, count: item.count > 1 ? item.count - 1 : item.count } : item
                )
            }
            : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART: return cartInitialState

        default: return state;
    }
}