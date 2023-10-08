import { useState } from "react";
import HeaderCard from "./components/HeaderCard";
import FilterProducts from "./routes/FilterProducts";
import { ContextCartCount } from "./utils/contextCart";


function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);
  return (

    <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
      <HeaderCard />

      <FilterProducts />
    </ContextCartCount.Provider>

  )
}

export default App
