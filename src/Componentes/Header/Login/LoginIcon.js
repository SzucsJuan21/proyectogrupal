import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { BiUser } from "react-icons/bi";
import useOnClickOutside from "../../Utilidades/useOnClickOutside";
import useWindowSize from "../../Utilidades/windowSize";
import LoginForm from "./LoginForm";
import UserOptions from "./UserOptions";

const LoginIcon = () => {
    const [isHover, setIsHover] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const { width } = useWindowSize();
    const loginRef = useRef();
    const [cookies, setCookie] = useCookies();

    const attemptLogin = async () => {
        if (!cookies.LOGIN_TOKEN) return;

        await axios("http://127.0.0.1:3000/api/users/login-token/", {
            method: "POST",
            headers: { Authorization: `Bearer ${cookies.LOGIN_TOKEN}` },
        })
            .then((res) => setCurrentUser(res.data))
            .catch((err) => alert("Ocurrio un error al iniciar sesión"));
    };
    useEffect(() => {
        attemptLogin();
    }, []);

    useOnClickOutside(loginRef, () => setShowForm(false));

    return (
        <div ref={loginRef}>
            <button
                style={{ all: "unset" }}
                onClick={async () => setShowForm(!showForm)}
            >
                <BiUser
                    size={width < 780 ? 40 : 60}
                    color={isHover ? "#445" : "#000"}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                />
            </button>
            <div style={s.loginContainer}>
                <AnimatePresence>{showForm && (currentUser ? <UserOptions user={currentUser} /> : <LoginForm />)}</AnimatePresence>
            </div>
        </div>
    );
};

const s = {
    loginContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};

export default LoginIcon;
