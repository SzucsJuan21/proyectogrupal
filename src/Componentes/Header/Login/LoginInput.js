import { useState } from "react";
import styled from "styled-components";
import IconError from "../../Utilidades/IconError";

const LoginInput = ({ placeholder, error, type, value, name, onChange }) => {
    const [showError, setShowError] = useState(false)
    
    return (
        <div style={{ margin: "auto" }}>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                error={error}
            />
            {/* <div>
                <IconError />   TODO
            </div> */}
        </div>
    );
};

const s = {
    errorWrapper: {
        position:"absolute",
    }
}

const Input = styled.input`
    height: 35px;
    border-radius: 15px;
    font-family: Poppins;
    font-size: 18px;
    background: transparent;
    padding: 1px 10px;
    border: ${(props) => (props.error ? "solid #ee0000" : "solid black")};
    &:focus {
        outline: none;
    }
`;

export default LoginInput;
