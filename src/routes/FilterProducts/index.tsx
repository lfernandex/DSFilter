import { useContext, useEffect, useState } from "react";
import FilterCard from "../../components/FilterCard";
import ProductsCard from "../../components/ProductsCard";
import { ProductDTO } from "../../models/products";
import { findByPrice } from "../../services/ProductsDescription";
import { ContextCartCount } from "../../utils/contextCart";
import "./styles.css";


export default function FilterProducts() {

    const [filterProducts, setfilterProducts] = useState<ProductDTO[]>([]);

    const [minPrice, setMinPrice] = useState<number>(0);

    const [maxPrice, setMaxPrice] = useState<number>(Number.MAX_VALUE);

    const {setContextCartCount} = useContext(ContextCartCount);


    useEffect(() => {

        if (minPrice !== null || maxPrice !== null) {
            setParamValue(minPrice, maxPrice);
            console.log(`Valor minimo de busca: ${minPrice}, valor maximo: ${maxPrice}`)
        }

    }, [minPrice, maxPrice])

    function handleSearch(miniPrice: number, maxiPrice: number) {
        setMinPrice(miniPrice);
        setMaxPrice(maxiPrice);
    }

    function setParamValue(priceMin: number, priceMax: number) {

        const filtered = findByPrice(priceMin, priceMax);

        setfilterProducts(filtered);
        console.log("O tamanho da lista é:", filtered.length);
        
        const count: number = filtered.length;
        setContextCartCount(count);
        console.log("O que tem no seu context é: ", count)
    }

    return (
        <>

            <FilterCard onSearch={handleSearch} />

            <section className="description-section">
                <div className="description-container ">

                    {
                        filterProducts.map((product) => (
                            <ProductsCard key={product.id} product={product} />
                        ))
                    }

                </div>
            </section>
        </>
    );
}