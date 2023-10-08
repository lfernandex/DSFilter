import { useState } from "react";
import "./styles.css";

type Props = {
    onSearch: Function;
}


export default function FilterCard({ onSearch }: Props) {

    const [minPrice, setMinPrice] = useState();

    const [maxPrice, setMaxPrice] = useState();


    function handleChangeMin(event: any) {
        setMinPrice(event.target.value);
    }

    function handleChangeMax(event: any) {
        setMaxPrice(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(minPrice || 0, maxPrice || Number.MAX_VALUE);
    }

    return (

        <>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="filter-container">
                    <div className="min-price">
                        <input 
                        name="minValue"
                        type="text" 
                        placeholder="Preço mínimo" 
                        onChange={handleChangeMin}/>
                    </div>

                    <div className="max-price space">
                        <input 
                        name="maxValue"
                        type="text" 
                        placeholder="Preço máximo" 
                        onChange={handleChangeMax}/>
                    </div>

                    <button type="submit">Filtrar</button>
                    
                </div>

            </form>
        </>
    );
}