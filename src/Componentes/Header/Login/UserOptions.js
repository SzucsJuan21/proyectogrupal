import { motion } from "framer-motion";
import React from "react";
import { FormContainer } from "./LoginForm";

const UserOptions = ({user}) => {
    return (
        <FormContainer
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: null, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={anim.formContAnim}
        >
            <h3>Hola, {user.name}!</h3>
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

export default UserOptions;
