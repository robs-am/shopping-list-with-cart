


import "./index.scss"
import CartWidget from "./components/CartWidget"
import Header from './components/Header'
import Product from "./components/Product"

function App() {


  return (
    <>
     <Header />
      <Product />
     <CartWidget productsCount={0} />

    </>
  )
}

export default App
