import { AnimatePresence } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import useOnClickOutside from "../../Utilidades/useOnClickOutside";
import useWindowSize from "../../Utilidades/windowSize";
import LoginForm from "./LoginForm";

const LoginIcon = () => {
    const [isHover, setIsHover] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const { width } = useWindowSize();
    const loginRef = useRef();

    useOnClickOutside(loginRef, () => setShowForm(false));

    return (
        <div ref={loginRef}>
            <button
                style={{ all: "unset" }}
                onClick={() => setShowForm(!showForm)}
            >
                <BiUser
                    size={width < 780 ? 40 : 60}
                    color={isHover ? "#445" : "#000"}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                />
            </button>
            <div style={s.loginContainer}>
                <AnimatePresence>{showForm && <LoginForm/>}</AnimatePresence>
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
