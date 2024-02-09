import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider"

const useCotizador = () => {

    const cotizadorContext = useContext(CotizadorContext)

    return cotizadorContext
}

export default useCotizador