import React, { useEffect, useState } from 'react'
import './HeaderUP.scss'
import logo from "../../../assets/MirbekImages/logo.svg"
import { IoIosCall } from "react-icons/io";


function HeaderUP() {
      const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 70); // при 50px начинаем менять стиль
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
    return (
        <header  className={scrolled ? 'scrolled' : ''}>
            <div className='container header'>

                <div className='logo'>
                    <img src={logo} alt="" />
                    <h2>Продажа неликвидой<br />
                        одежды и <br />
                        производства одежды</h2>
                </div>
                <div className='phone'>
                    <p><span><IoIosCall /></span> +7 (705) 111-11-11</p>
                    <button>Заказать звонок</button>
                </div>
            </div>
        </header>
    )
}

export default HeaderUP