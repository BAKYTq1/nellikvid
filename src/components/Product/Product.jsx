import React from "react";
import "./Product.scss";
import Card from "../Card/Card";

export const Product = () => {
  // Category tabs data
  const categoryTabs = [
    { id: "women", label: "ЖЕНЩИНАМ", active: true },
    { id: "men", label: "МУЖЧИНАМ", active: false },
    { id: "children", label: "ДЛЯ ДЕТЕЙ", active: false },
    { id: "soon1", label: "СКОРО", active: false },
    { id: "soon2", label: "СКОРО", active: false },
  ];

  // Size filter tabs data
  const sizeTabs = [
    { id: "standard", label: "СТАНДАРТНЫЕ РАЗМЕРЫ", active: true },
    { id: "large", label: "БОЛЬШЕМЕРЫ", active: false },
  ];

  // Product data
  const products = [
    {
      id: 1,
      name: "Толстовка",
      description: "Привозной, оверсайз",
      price: "330 сом",
      isHit: true,
      row: 1,
    },
    {
      id: 2,
      name: "Вечерняя платья",
      description: "В наличии более 200 штук",
      price: "250 сом",
      row: 1,
    },
    {
      id: 3,
      name: "Классное платье",
      description: "Ткань бонбархыт",
      price: "380 сом",
      row: 1,
    },
    {
      id: 4,
      name: "Пальто на зиму",
      description: "Ткань гусиный лапка",
      price: "450 сом",
      row: 1,
    },
    {
      id: 5,
      name: "Длинное платье",
      description: "Ткань трикотаж",
      price: "250 сом",
      row: 2,
    },
    {
      id: 6,
      name: "Платье с юбкой",
      description: "Ткань трикотаж",
      price: "250 сом",
      row: 2,
    },
    {
      id: 7,
      name: "Красивая двойка",
      description: "Двойка. Ткань твит + лайт",
      price: "250 сом",
      row: 2,
    },
    {
      id: 8,
      name: "Двойка велюр",
      description: "Двойка. Ткань велюр",
      price: "640 сом",
      row: 2,
    },
    {
      id: 9,
      name: "Летняя платья",
      description: "Ткань шёлк",
      price: "220 сом",
      row: 3,
    },
    {
      id: 10,
      name: "Двойка",
      description: "Количество 600 штук",
      price: "720 сом",
      row: 3,
    },
    {
      id: 11,
      name: "Длинная жилетка",
      description: "Количество 150 штук",
      price: "370 сом",
      row: 3,
    },
    {
      id: 12,
      name: "Кашемир лапша",
      description: "Количество 150 штук",
      price: "170 сом",
      row: 3,
    },
    {
      id: 12,
      name: "Кашемир лапша",
      description: "Количество 150 штук",
      price: "170 сом",
      row: 3,
    },
    {
      id: 12,
      name: "Кашемир лапша",
      description: "Количество 150 штук",
      price: "170 сом",
      row: 3,
    },
    {
      id: 12,
      name: "Кашемир лапша",
      description: "Количество 150 штук",
      price: "170 сом",
      row: 3,
    },
    {
      id: 12,
      name: "Кашемир лапша",
      description: "Количество 150 штук",
      price: "170 сом",
      row: 3,
    },
  ];

  return (
    <section className="catalog-section">
      <div className="container">
        {/* Title */}
        <h1 className="title">Каталог товаров</h1>

        {/* Description */}
        <div className="description">
          <span>Самые лучшие одежды для женщин, мужчин и детей</span>
          <br />
          <span>Выбирайте товар и свяжитесь прямо с производителем или продавцом чтобы</span>
          <br />
          <span>оформить заказ</span>
        </div>

        {/* Category tabs */}
        <div className="category-tabs">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              className={`category-tab ${tab.active ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Size filter tabs */}
        <div className="size-tabs">
          {sizeTabs.map((tab) => (
            <button
              key={tab.id}
              className={`size-tab ${tab.active ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="product-grid">
          <Card products={products}/>
        </div>
      </div>
    </section>
  );
};