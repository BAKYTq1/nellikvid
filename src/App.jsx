
import "react";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Bestseller from "./components/Bestseller/Bestseller";
import Manufacturers from "./components/Manufacturers/Manufacturers";
import Price from "./components/Price/Price";
import Brand from "./components/Brand/Brand";
import { Order } from "./components/Order/Order";
import { Product } from "./components/Product/Product";
import { Company } from "./components/Company/Company";
import Contact from "./components/Contact/Contact";
import Questions from "./components/Questions/Questions";
function App() {
  return (
    <div className="">
      <Header />
      <Bestseller />
      <Manufacturers />
       <Order/>
       <Product/>
       <Company/>
      <Price />
      <Brand />
      <Contact/>
      <Questions/>
      <Footer />
    </div>
  );
}

export default App;
