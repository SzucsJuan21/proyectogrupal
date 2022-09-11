import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const Confirmacion = ({ addToCart, selectedProduct, setIsConfirmation }) => {
  const [amount, setAmount] = useState(1);

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0 }}>
      <Modal>
        <div style={{ margin: "30px" }}>
          <h1 style={s.title}>Añadir al carro?</h1>
          <div style={s.modalContentCont}>

            <h3 className="item-title" style={s.modalText}>
              {selectedProduct.title}
            </h3>
            <p className="valores" style={s.modalText}>
              ${(selectedProduct.price * amount).toFixed(2)}
            </p>

            <div style={s.amountCont}>
              <AmountBtn onClick={() => setAmount(amount + 1)}>
                <BiUpArrow />
              </AmountBtn>
              <p style={s.amount}>x{amount}</p>
              <AmountBtn
                onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}
              >
                <BiDownArrow />
              </AmountBtn>
            </div>

          </div>

          <div style={s.actionsContainer}>
            <Btn
              action="confirm"
              onClick={() => {
                addToCart(selectedProduct.id, amount);
                setIsConfirmation(false);
              }}
            >
              Confirmar
            </Btn>

            <Btn action="cancel" onClick={() => setIsConfirmation(false)}>Cancelar</Btn>
          </div>

        </div>
      </Modal>
    </Container>
  );
};

const s = {
  title: {
    margin: "0 0 10px 0",
  },
  modalText: {
    margin: "auto 0",
  },
  modalContentCont: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  amount: {
    margin: 0,
    textAlign: "center",
    fontFamily: "Crete Round, sans-serif",
    fontSize: "1.3rem",
  },
  amountCont: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  actionsContainer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

const Container = styled(motion.div)`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgb(30, 30, 30, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 500px;
  border-radius: 20px;
  background-color: white;
  margin: 0 0 200px 0;
`;

const AmountBtn = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 10px;
  padding: 2px;
  display: flex;
  align-items: center;
  transition: 100ms;
  &:active {
    box-shadow: 0px 0px 5px 2px #ff8126;
    background-color: #ff8126;
  }
`;

const Btn = styled.button`
  border: 0;
  height: 2rem;
  border-radius: 5px;
  min-width: 150px;
  cursor: pointer;
  background: ${(props) =>
    props.action === "confirm" ? "#ff8126" : "transparent"};
  border: ${(props) =>
    props.action === "confirm" ? "none" : "2px solid #ff8126"};
  transition: 200ms;
  font-size: 18px;
  color: ${(props) => (props.action === "confirm" ? "#fff" : "#000")};
  font-weight: 500;
  &:hover {
    background: ${(props) =>
      props.action === "confirm" ? "#d96817" : "transparent"};
  }
`;

export default Confirmacion;
