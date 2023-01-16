import { motion } from "framer-motion";
import { useState } from "react";

const Busqueda = ({ width }) => {
    const [search, setSearch] = useState("");

    return (
        <motion.form
            style={{
                ...s.inputWrapper,
                width: `${width * 0.8}px`,
                left: width < 660 ? "20px" : "150px",
            }}
            initial={{ width: 0 }}
            animate={{ width: null }}
            exit={{ width: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
            onSubmit={(e) => {
                e.preventDefault();
                document.location = `/tienda?search=${search}`;
            }}
        >
            <input
                type="text"
                placeholder="Buscar..."
                autoFocus="autofocus"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                style={{
                    ...s.input,
                    width: `${width * 0.4}px`,
                }}
            />
        </motion.form>
    );
};

const s = {
    inputWrapper: {
        position: "absolute",
        top: 0,
        bottom: 0,
        margin: "auto",
        height: "40px",
        overflow: "hidden",
    },
    input: {
        height: "30px",
        borderRadius: "15px",
        fontFamily: "Poppins",
        fontSize: "18px",
        background: "transparent",
        padding: "1px 10px",
    },
};

export default Busqueda;
