import React from "react";
import "./Company.scss";
import img from "../../assets/team.jpg.png";

export const Company = () => {
  const statistics = [
    { value: "1857", description: "Клиентов в год" },
    { value: "71", description: "Одобренных\nвозвратов" },
    { value: "5", description: "Лет на рынке" },
    { value: "7", description: "Стран СНГ" },
  ];

  return (
    <section className="company">
      <div className="company__container container">
        <div className="company__image">
          <img src={img} alt="Team" />
        </div>
        <div className="company__content">
          <h2 className="company__title">О компании</h2>

          <p className="company__text">
            Nelikvid KG — это платформа для производства одежды на заказ,
            продажи неликвидной <br />
            одежды и товаров оптом. Мы объединяем производителей и продавцов,
            предоставляя им <br />
            возможность легко продавать свои товары и остатки на нашем сайте.
            Наше решение — это <br />
            удобный способ найти выгодные предложения на качественные изделия,
            доступные как для <br />
            частных лиц, так и для бизнеса.
          </p>

          <p className="company__text">
            Мы не гонимся за самыми низкими ценами, ведь это подразумевает
            использование <br />
            некачественных материалов. Мы предлагаем Высокое качество и приятные
            цены! Ведь <br />
            превыше всего Ваш комфорт и спокойствие!
          </p>

          <div className="company__statistics">
            {statistics.map((stat, index) => (
              <div key={index} className="company__stat">
                <div className="company__stat-value">{stat.value}</div>
                <div className="company__stat-description">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
