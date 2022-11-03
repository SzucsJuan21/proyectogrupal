import { motion } from "framer-motion";
import { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Btn } from "../../Cards/Confirmacion";
import LoginInput from "./LoginInput";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [isFirstInput, setIsFirstInput] = useState(true);

    useEffect(() => {
        if (isFirstInput) return;
        if(!userInfo.email) {
            if (!userInfo.email) setEmailError("Debes ingresar un correo");
        }
        if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(userInfo.email)) {
            setTimeout(() => {
                setEmailError("Este email es inválido");
            }, 2000);
        }
        setEmailError(null);
        setPasswordError(null);
    }, [userInfo]);

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
        setIsFirstInput(false);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const { email, password } = userInfo;
        if (!(email && password)) {
            if (!email) setEmailError("Debes ingresar un correo");
            if (!password) setPasswordError("Debes ingresar una contraseña");
            return;
        }
    };


    return (
        <FormContainer
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: null, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={anim.formContAnim}
        >
            <motion.form style={s.form} exit={{opacity:0}} transition={{duration:0.1}} > 
                <div style={s.formInputs}>
                    <LoginInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userInfo.email}
                        onChange={handleChange}
                        error={emailError}
                    />
                    <LoginInput
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={userInfo.password}
                        onChange={handleChange}
                        error={passwordError}
                    />
                </div>
                <div style={s.formBtns}>
                    <Btn action="confirm" type="submit" onClick={submitForm}>
                        Iniciar Sesión
                    </Btn>
                    <Link to="/registrarse">
                        <Btn>Registrarse</Btn>
                    </Link>
                </div>
            </motion.form>
        </FormContainer>
    );
};

const anim = {
    formContAnim: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
    },
};

const s = {
    form: {
        position: "relative",
        margin: "auto",
        width: "75%",
        display: "flex",
        gap: "25px",
        flexDirection: "column",
        alignItems: "center",
    },
    formInputs: {
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        width: "100%",
    },
    formBtns: {
        display: "flex",
        gap: "5px",
    },
    input: {
        height: "40px",
        borderRadius: "15px",
        fontFamily: "Poppins",
        fontSize: "18px",
        background: "transparent",
        padding: "1px 10px",
    },
};

const FormContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 70px;
    width: 350px;
    height: 250px;
    background: white;
    border-radius: 30px;
    box-shadow: 0px 0px 15px -5px;
`;

export default LoginForm;
