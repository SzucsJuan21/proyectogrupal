import Catalogo from "../Componentes/Catalogos/Catalogo";
import useQuery from "../Componentes/Utilidades/useQuery";

const CatalogoBusqueda = () => {
    const query = useQuery();

    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <Catalogo query={query} />
        </div>
    );
};

export default CatalogoBusqueda;
