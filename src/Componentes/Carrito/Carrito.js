import { TYPES } from "../Utilidades/actions";
import styled from "styled-components";
import CarritoItem from "./CarritoItem";
import { useContext } from "react";
import { dbContext } from "../../App";

const Carrito = () => {
    const { data, dispatch } = useContext(dbContext);
    const { cart } = data;

    const increaseAmount = async (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: { id: id, amount: 1 } });

    const removeFromCart = async (btnType, id) => {
        const itemIncart = cart.find((item) => item.id === id);

        if (itemIncart.count === 1) dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
        else dispatch({ type: btnType, payload: id });
    };

    const clearCart = async () => dispatch({ type: TYPES.CLEAR_CART });

    let total = 0;
    cart.map((item) => (total += item.price * item.count));

    return (
        <MainContainer>
            <h1 style={{ fontFamily: "Poppins" }}>CARRITO DE COMPRAS</h1>
            <CartContainer>
                {cart.map((item) => (
                    <CarritoItem
                        key={item.id}
                        data={item}
                        increaseAmount={increaseAmount}
                        removeFromCart={removeFromCart}
                        dispatch={dispatch}
                    />
                ))}
            </CartContainer>
            <Button onClick={() => clearCart()}>Limpiar</Button>

            <h3
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "30px",
                    marginTop: "20px",
                    marginBottom: "0px",
                    padding: "7px",
                    border: "2px solid grey",
                    borderRadius: "5px",
                }}
            >
                Total: ${total.toFixed(2)}
            </h3>
        </MainContainer>
    );
};

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 40px 0;
`;

const CartContainer = styled.div`
    width: 90%;
    border: 0px solid black;
    border-radius: 5px;
    box-shadow: 0px 0px 15px -2px;
    height: 500px;
    overflow-y: scroll;
    margin-bottom: 10px;

    @media (min-width: 800px) {
        width: 70%;
    }

    @media (min-width: 1260px) {
        width: 50%;
        height: 500px;
    }
`;

const Button = styled.button`
    border: 0;
    height: 2rem;
    border-radius: 5px;
    width: 130px;
    cursor: pointer;
    background: #ff8126;
    transition: 200ms;
    font-size: 17px;
    color: #fff;
    font-weight: 500;
    margin-right: 10px;
    &:hover {
        background: #fcbd90;
    }
`;
export default Carrito;
