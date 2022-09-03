export const cartInitialState = {
    products: [],
    cart: [],
}


export function cartReducer(state, action) {


    console.log(state)
    switch (action.type) {

        case 'GET_STATE': {
            return {
                ...state,
                products: action.payload[0],
                cart: action.payload[1]
            }
        }

        case 'ADD_TO_CART': {
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

        case 'REMOVE_ONE_PRODUCT': {
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

        case 'REMOVE_ALL_PRODUCTS': {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }

        case 'CLEAR_CART': return { ...state, cart: [] }

        default: return state;
    }
    

}