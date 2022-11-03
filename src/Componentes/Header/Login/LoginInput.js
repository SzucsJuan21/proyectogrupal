import { useState } from "react";
import styled from "styled-components";
import IconError from "../../Utilidades/IconError";

const LoginInput = ({ placeholder, error, type, value, name, onChange }) => {

    return (
        <div style={s.container}>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                error={error}
            />
            {error && (
                <div style={s.errorWrapper}>
                    <IconError message={error} />
                </div>
            )}
        </div>
    );
};

const s = {
    container: {
        margin: "auto",
        display: "flex",
        justifyContent: "flex-end",
    },
    errorWrapper: {
        position: "absolute",
        padding: "5px",
    },
};

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
