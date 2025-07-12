import  'react'
import './styles/App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bestseller from './components/Bestseller/Bestseller'
import Manufacturers from './components/Manufacturers/Manufacturers'
import { Order } from './components/Order/Order'
function App() {
  return (
    <div>
      <Header/>
      <Bestseller/>
      <Manufacturers/>
      <Order/>
      <Footer/>
    </div>
  )
}

export default App
