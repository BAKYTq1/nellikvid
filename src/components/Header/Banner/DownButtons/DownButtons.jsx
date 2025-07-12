import React from 'react'
import './DownButtons.scss'
import btn1 from '../../../../assets/MirbekImages/btn/Btn1.svg'
import btn2 from '../../../../assets/MirbekImages/btn/btn2.svg'
import btn3 from '../../../../assets/MirbekImages/btn/btn3.svg'
import btn4 from '../../../../assets/MirbekImages/btn/btn4.svg'
import btn5 from '../../../../assets/MirbekImages/btn/btn5.svg'
function DownButtons() {
  const btns = [
    {
      id: 1,
      text: 'Скидки на некоторые товары',
      img: btn1,
    },
    {
      id: 2,
      text: 'Бесплатная консультация',
      img: btn2,
    },
    {
      id: 3,
      text: 'Работаем без выходных',
      img: btn3,
    },
    {
      id: 4,
      text: 'Качественные товары',
      img: btn4,
    },
    {
      id: 5,
      text: 'Доставка в стран СНГ',
      img: btn5,
    },
  ]

  return (
    <div className="down-buttons">
      {btns.map((item, index) => (
        <div className={"down-button"} key={item.id}>
          <img src={item.img} alt="icon" />
          <p>{item.text}</p>
          {/* {index !== btns.length - 1 && <div className="divider" />} */}
        </div>
      ))}
    </div>
  )
}

export default DownButtons
