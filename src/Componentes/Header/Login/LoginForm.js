import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import LoginInput from "./LoginInput";
import { Link } from "react-router-dom";
import { Btn } from "../../Catalogos/Cards/Confirmacion";
import { useCookies } from "react-cookie";

const LoginForm = ({setShowForm}) => {
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const { email, password } = userInfo;
        if (!(email && password)) {
            if (!email) setEmailError("Debes ingresar un correo");
            if (!password) setPasswordError("Debes ingresar una contraseña");
            return;
        }
        if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(userInfo.email)) {
            return setEmailError("Este email es inválido");
        }

        const options = {
            method: "POST",
            headers: { "content-type": "application/json" },
            data: JSON.stringify(userInfo),
        };
        await axios(process.env.REACT_APP_API + "/users/login", options).then((res) => {
            setCookie("LOGIN_TOKEN", res.data.token);
            document.location.pathname = "/";
        });
    };

    // prettier-ignore
    return (
        <FormContainer
            initial={{ height: 0, opacity: 0 }} animate={{ height: null, opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={anim.formContAnim}
        >
            <motion.form style={s.form} exit={{opacity:0}} transition={{duration:0.1}} > 
                <div style={s.formInputs}>
                    <LoginInput
                        type="email" name="email" placeholder="Email"
                        value={userInfo.email}
                        onChange={handleChange}
                        error={emailError}
                    />
                    <LoginInput 
                    type="password" name="password" placeholder="Contraseña" 
                    value={userInfo.password}
                    onChange={handleChange} 
                    error={passwordError}
                    />
                </div>
                <div style={s.formBtns}>
                    <Btn action="confirm" type="submit" onClick={submitForm}>
                        Iniciar Sesión
                    </Btn>
                    <Link to="/registrarse" onClick={() => setShowForm(false)}>
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
        type: "spring",
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

export const FormContainer = styled(motion.div)`
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
