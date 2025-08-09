import React, { useState } from 'react';
import './Questions.scss';
import InputMask from 'react-input-mask';

function Questions() {
  const [phone, setPhone] = useState("+996 ");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith("+996 ")) {
      setPhone("+996 ");
    } else {
      setPhone(value);
    }
  };

  return (
    <div className='questions'>
      <div className="item-ques">
        <div className='head-ques'>
          <h1>Остались вопросы? Мы с радостью Вам поможем!</h1>
          <p>Оставьте заявку и наш менеджер свяжется с Вами в ближайшее время</p>
        </div>
        <div className='ques-footer1'>
          <div>
            <label>КАК ВАС ЗОВУТ</label>
            <input type="search" />
          </div>
          <div>
            <label>КОНТАКТНЫЙ ТЕЛЕФОН</label>
            <InputMask
              mask="+996 (999) 99-99-99"
              value={phone}
              onChange={handlePhoneChange}
            >
              {(inputProps) => <input {...inputProps} type="tel" />}
            </InputMask>
          </div>
        </div>
        <div className='ques-footer2'>
          <label>ВАШЕ СООБЩЕНИЕ</label>
          <textarea rows="4"></textarea>
        </div>
        <div className='checkbox'>
          <div>
            <input type="checkbox" />
            <p>Согласен с условиями <span>обработки персональных данных</span></p>
          </div>
          <button>ОТПРАВИТЬ</button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
