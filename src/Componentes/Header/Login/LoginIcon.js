import { AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import useWindowSize from "../../Utilidades/windowSize";
import LoginForm from "./LoginForm";

const LoginIcon = () => {
    const [isHover, setIsHover] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const { width } = useWindowSize();

    return (
        <>
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
            <div style={{display:'flex', alignItems:"center",justifyContent:"center"}}>

            <AnimatePresence>{showForm && <LoginForm />}</AnimatePresence>
            </div>
        </>
    );
};

export default LoginIcon;
