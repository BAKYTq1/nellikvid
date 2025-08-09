import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

import './Contact.scss'
function Contact() {
    const contact = [
        {
            icon: <MdOutlinePhone />,
            name: 'Телефон',
            adres: '+996 709 102 863',
            adres2: '+996 703 102 863'
        },
        {
            icon: <CgMail />,
            name: 'Почта',
            adres: 'support@nelikvid.kg',
        },
        {
            icon: <IoMdTime />,
            name: 'Время работы',
            adres: 'Пн. – Вс.: с 9:00 до 18:00',
        },
        {
            icon: <IoLocation />,
            name: 'Адрес',
            adres: 'Бишкек, Рынок Дордой',
        }
    ]
  return (
    <div className='contact'>
      <div className="container">
        <h1>Контакты</h1>
        <div className='head-contact'>
        {contact.map((item, index) => (
            <div key={index} className='item-contact'>
               <p>{item.icon}</p>
               <ul>
                <li>{item.name}</li>
                <li>{item.adres}</li>
                <li>{item.adres2}</li>
               </ul>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
