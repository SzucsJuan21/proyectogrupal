import { Link } from "react-router-dom";
import { useState } from "react";
import { BiCart, BiUser, BiSearchAlt2 } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import useWindowSize from "../Utilidades/windowSize";
import styled from "styled-components";

const HeaderIconos = ({ data, setIsSearchBar, isSearchBar }) => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  let count = data.map((item) => (item.count)).reduce((a,b) => a+b,0);
  const { width } = useWindowSize();


  return (
    <div style={s.iconsContainer}>
      <IconItem>
        <BiSearchAlt2
          size={width < 780 ? 40 : 60}
          color={isHover1 ? "#445" : "#000"}
          onMouseEnter={() => setIsHover1(true)}
          onMouseLeave={() => setIsHover1(false)}
          onClick={() => setIsSearchBar(!isSearchBar)}
        />
      </IconItem>
      <IconItem>
        <Link to="/home">
          <BiUser
            size={width < 780 ? 40 : 60}
            color={isHover2 ? "#445" : "#000"}
            onMouseEnter={() => setIsHover2(true)}
            onMouseLeave={() => setIsHover2(false)}
          />
        </Link>
      </IconItem>
      <IconItem>
        <Link to="/carrito">
          <BiCart
            size={width < 780 ? 40 : 60}
            color={isHover3 ? "#445" : "#000"}
            onMouseEnter={() => setIsHover3(true)}
            onMouseLeave={() => setIsHover3(false)}
          />
          <AnimatePresence>
            {count > 0 && (
              <CartCount
                onMouseEnter={() => setIsHover3(true)}
                onMouseLeave={() => setIsHover3(false)}
                initial= {{transform:'scale(0)'}}
                animate = {{transform: `scale(1)`}}
                exit= {{transform:'scale(0)'}}
                transition= {{ type:'spring',stiffness:'200' }}
              >
                <span style={{ lineHeight: "2px", color: "white" }}>
                  {count}
                </span>
              </CartCount>
            )}
          </AnimatePresence>
        </Link>
      </IconItem>
    </div>
  );
};

const s = {
  iconsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  cartCount: {
    position: "absolute",
    bottom: "-10px",
    right: "-5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "10px",
    height: "10px",
    backgroundColor: "#FF8126",
    borderRadius: "100px",
  },
};

const IconItem = styled.li`
  position: relative;
  list-style: none;
  @media (min-width: 780px) {
    margin: 0 10px;
  }
`;

const CartCount = styled(motion.div)`
  position: absolute;
  bottom: -10px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: #ff8126;
  border-radius: 100px;
  line-height: 2px;
  color: white;
  font-size: 10px;
  @media (min-width: 780px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;

export default HeaderIconos;
