
import "react";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Bestseller from "./components/Bestseller/Bestseller";
import Manufacturers from "./components/Manufacturers/Manufacturers";
import Price from "./components/Price/Price";
import Brand from "./components/Brand/Brand";
import WorkSteps from "./components/WorkSteps/WorkSteps";
import Review from "./components/Review/Review";
function App() {
  return (
    <div className="">
      <Header />
      <Bestseller />
      <Manufacturers />
      <Price />
      <Brand />
      <WorkSteps />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
