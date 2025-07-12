
import "react";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Bestseller from "./components/Bestseller/Bestseller";
import Manufacturers from "./components/Manufacturers/Manufacturers";
import Price from "./components/Price/Price";
import Brand from "./components/Brand/Brand";
function App() {
  return (
    <div className="">
      <Header />
      <Bestseller />
      <Manufacturers />
      <Price />
      <Brand />

      <Footer />
    </div>
  );
}

export default App;
