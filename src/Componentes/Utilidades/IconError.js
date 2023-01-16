import React from "react";
import { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const IconError = ({ message }) => {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div style={s.container}>
            <AiFillWarning
                size={30}
                color="#ee0000"
                onMouseEnter={() => setShowMessage(true)}
                onMouseLeave={() => setShowMessage(false)}
            />
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        style={s.errorMessage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const s = {
    container: {
        display: "flex",
        justifyContent: "center",
    },
    errorMessage: {
        zIndex: 10,
        fontFamily: "Poppins",
        borderRadius: "20px",
        background: "white",
        padding: "15px",
        position: "absolute",
        minWidth: "150px",
        top: "40px",
        right: "0px",
        boxShadow: "0px 0px 15px -5px",
    },
};

export default IconError;
