import  'react'
import './styles/App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bestseller from './components/Bestseller/Bestseller'
import Manufacturers from './components/Manufacturers/Manufacturers'
function App() {
  return (
    <div className='container'>
      <Header/>
      <Bestseller/>
      <Manufacturers/>
      <Footer/>
    </div>
  )
}

export default App
