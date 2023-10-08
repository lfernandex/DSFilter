import { useContext } from "react";
import { ContextCartCount } from "../../utils/contextCart";

import "./styles.css";

export default function CountIcon() {

    const { contextCartCount } = useContext(ContextCartCount);

    console.log("O tamanho do context no Icon é: ", contextCartCount);

    return (

        <>
            <div className="container-products">
                {
                    contextCartCount > 0 &&
                    <div className="cart-count">{contextCartCount}</div>
                }
                <div className="quantity-container">
                    <p> produto(s)</p>
                </div>
            </div>
        </>
    );
}