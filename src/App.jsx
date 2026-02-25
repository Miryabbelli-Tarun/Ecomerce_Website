
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:productId' element={<Product />} />
        <Route path='/products/men' element={<Mens />} />
        <Route path='/products/women' element={<Womens />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
