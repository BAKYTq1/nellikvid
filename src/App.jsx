import  'react'
import './styles/App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bestseller from './components/Bestseller/Bestseller'
import Manufacturers from './components/Manufacturers/Manufacturers'
function App() {
  return (<>
      <Header/>
  
    <div className='container'>
      
      <Bestseller/>
      <Manufacturers/>
    </div>
      <Footer/>
  </>
  )
}

export default App
