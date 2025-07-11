import React from "react";
import "./Price.scss";
import list from '../../assets/svg/list.svg'

function Price() {
  return (
    <div className="prs">
      <section className="section-6 container">
        <div className="price">
          <img src={list} alt="" />
          <div className="price-text">
            <h2>Получите наш прайс-лист</h2>
            <p>На указанный E-mail Вам будет выслан наш прайс-лист</p>
          </div>
        </div>
        <div className="price-inputs">
          <h3>Ваша почта</h3>
          <input type="text" placeholder="" />
          <button>Отправить</button>
          <label>
            <input type="checkbox" />
            <span>Согласен с условиями </span>
            <span>обработки персональных данных</span>
          </label>
        </div>
      </section>
    </div>
  );
}

export default Price;
