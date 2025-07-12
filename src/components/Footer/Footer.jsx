import React from 'react';
import './Footer.scss';
import logo from '../../assets/MirbekImages/logo.svg';
import { RiVisaLine } from "react-icons/ri";
import VK from "../../assets/MirbekImages/VK.svg"
import Inst from "../../assets/MirbekImages/INST.svg"
import { IoIosCall } from 'react-icons/io';
import { BiLogoMastercard } from "react-icons/bi";


function Footer() {
  return (
    <footer className="">
      <div className="footer">

      <div className="footer-top">
        <div className="footer-logo">

          <img src={logo} alt="Logo" />
          <div className="footer-social">
            <a href="#"><img  src={VK} alt="" /></a>
            <a href="#"> <img src={Inst} alt="" /></a>
          </div>
        </div>

        <div className="footer-contact">
          <p>support@nelikvid.kg</p>
          <div>
            <a href="tel:+996703996090"> <span><IoIosCall /></span> +996 703 996 090</a>
            <button className="order-btn">ЗАКАЗАТЬ ЗВОНОК</button>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2024 <span> Все права защищены</span></p>
        <p>Политика обработки персональных данных</p>
        <div className="payment-methods">
          <RiVisaLine/>
          <BiLogoMastercard/>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer