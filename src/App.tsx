import "./index.scss"
import CartWidget from "./components/CartWidget"
import Product from "./components/Product"

function App() {

  return (
    <>
    <section className="productPage">
      <Product />
     <CartWidget productsCount={0} />
     </section>

    </>
  )
}

export default App
