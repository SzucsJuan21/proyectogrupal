import Carrito from "../Componentes/Carrito/Carrito";
import { motion } from "framer-motion";

const RutaCarrito = () => {
  return (
    <motion.div
      style={{ position: "relative", margin:'0 0 50px 0' }}
      initial={{ right: -1000, opacity: 0 }}
      animate={{ right: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Carrito />
    </motion.div>
  );
};

export default RutaCarrito;
