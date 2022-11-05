import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { MainContainer } from "../Carrito/Carrito";
import { Btn } from "../Catalogos/Cards/Confirmacion";
import LoginInput from "../Header/Login/LoginInput";

const RegisterForm = () => {
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies();
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const { email, password } = formData;
        if (email && !/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)) {
            return setEmailError("Este email es inválido");
        }
        if (!(email && password)) {
            if (!email) setEmailError("Debes ingresar un correo");
            if (!password) setPasswordError("Debes ingresar una contraseña");
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(password)) {
            return setPasswordError("Tu contraseña debe contener al menos 8 caracteres, una letra mayúscula, una minúscula, y un número");
        }
        setEmailError(null);
        setPasswordError(null);
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: { "content-type": "application/json" },
            data: JSON.stringify(formData),
        };
        await axios("http://127.0.0.1:3000/api/users/register", options)
            .catch((err) => console.log(err))
            .then((res) => {
                setCookie("LOGIN_TOKEN", res.data.token);
            });
    };

    // prettier-ignore
    return (<MainContainer>
        <h1>Registrarse</h1>
        <form style={s.form}>
            <div>
                <label style={s.label} htmlFor="name">Nombre</label>
                <LoginInput name="name" type="text" value={formData.name} onChange={handleChange} ></LoginInput>
            </div>
            
            <div>
                <label style={s.label} htmlFor="surname">Apellido</label>
                <LoginInput name="surname" type="text" value={formData.surname} onChange={handleChange} ></LoginInput>
            </div>

            <div>
                <label style={s.label} htmlFor="email">Email</label>
                <LoginInput name="email" type="email" value={formData.email} onChange={handleChange} error={emailError} ></LoginInput>
            </div>
            
            <div>
                <label style={s.label} htmlFor="password">Contraseña</label>
                <LoginInput name="password" type="password" value={formData.password} onChange={handleChange} error={passwordError} ></LoginInput>
            </div>

            <div style={s.btnDiv}>
                <Btn action="confirm" type="submit" onClick={handleSubmit} >Registrarse</Btn>
            </div>
        </form>
    </MainContainer>);
};

const s = {
    form: {
        width: "450px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    label: {
        fontSize: "20px",
    },
    btnDiv: {
        margin: "10px 0 0 0",
        display: "flex",
        justifyContent: "center",
    },
};

// const Form = styled.form`
//     width: 450px;
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
// `;

export default RegisterForm;
