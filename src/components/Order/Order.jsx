import React from "react";
import "./Order.scss";
import vector from '../../assets/Vector.svg'
export const Order = () => {
  const benefits = [
    {
      icon: vector,
      title: "Только качественная продукция",
      description:
        "Вся наша продукция проходит проверку в соответствии самыми\nвысокими стандартам",
    },
    {
      icon: vector,
      title: "Оплата любым удобным способом",
      description:
        "Мы принимаем к оплате\nпластиковые карты Visa и\nMasterCard и безналичные\nпереводы",
    },
    {
      icon: vector,
      title: "Скидка постоянным\nклиентам",
      description: "Щедрые скидки постоянным\nпокупателям нашего магазина",
    },
    {
      icon: vector,
      title: "100% гарантия на\nвозврат товаров",
      description:
        "Если вы получили некачественный\nтовар, мы без дополнительных\nвопросов обменяем товар или\nвернем деньги",
    },
  ];

  return (
    <section className="benefits-section">
        <div className="container">
          <div className="benefits-boss">
      <div className="benefits-content">
        <h2 className="benefits-title">
          Почему стоит заказывать
          только у нас
        </h2>
        <p className="benefits-description">
          Познакомьтесь с нашими преимуществами! Мы
          <br />
          уверены, что покупка у нас оставит только
          <br />
          положительные эмоции.
        </p>
      </div>

      <div className="benefits-card">
        {benefits.map((benefit, index) => (
          <div key={index} className={`benefit-item`}>

            <div className="benefit-title">
            <img
              className="benefit-icon"
              alt="Icon"
              src={benefit.icon}
            />
              {benefit.title}
            </div>

            <div className="benefit-description">
              {benefit.description}
            </div>
          </div>
        ))}
      </div>
               </div>
        </div>
    </section>
  );
};