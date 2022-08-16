import { useState } from "react";

const NavDropdownBtn = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div style={s.btnWrapper}>
      <button
        style={{ ...s.btn, backgroundColor: isHover ? "#d9d9d9" : "" }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseDown={() => {
          console.log("TEST");
        }}
      >
        {props.boton}
      </button>
    </div>
  );
};

const s = {
  btn: {
    all: "unset",
    textAlign: "center",
    width: "100%",
    padding: "10px 0 10px 0",
    fontFamily: "Poppins, sans-serif",
  },
};

export default NavDropdownBtn;
