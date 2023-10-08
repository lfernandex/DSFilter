import { ProductDTO } from "../../models/products";
import "./styles.css";


type Props = {
    product: ProductDTO;
}

export default function ProductsCard({product}: Props) {

    return (

        <>
            <div className="description-card ">
                <div className="details-product">
                    <h1>{product.name}</h1>
                    <h2>R$: {product.price}</h2>
                </div>
            </div>

        </>
    );
}