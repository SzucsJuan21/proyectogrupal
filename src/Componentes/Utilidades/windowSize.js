import { useState, useEffect } from "react";

// Este script retorna el tamaño de la pantalla cada vez que se actualize, útil para conditional render
// Se usa así:
// const { width, height } = useWindowSize()
// Las variables width y height se van a actualizar automaticamente cada vez que cambie el tamaño de la ventana

function getSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
