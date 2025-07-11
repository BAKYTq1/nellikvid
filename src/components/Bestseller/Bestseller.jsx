import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import './Bestseller.scss';

function Bestseller() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Расширенные данные продуктов для демонстрации карусели
  const products = [
    {
      id: 1,
      name: "Двойка",
      description: "Ткань кашемир",
      price: "250 сом",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300",
      isHit: true,
    },
    {
      id: 2,
      name: "Платье",
      description: "Привозной",
      price: "270 сом",
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=300",
      isHit: true,
    },
    {
      id: 3,
      name: "Барби",
      description: "В наличии",
      price: "220 сом",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300",
      isHit: true,
    },
    {
      id: 4,
      name: "Костюм",
      description: "Элегантный",
      price: "320 сом",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
      isHit: true,
    },
    {
      id: 5,
      name: "Блузка",
      description: "Шелковая",
      price: "180 сом",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300",
      isHit: true,
    },
    {
      id: 6,
      name: "Юбка",
      description: "Модная",
      price: "150 сом",
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=300",
      isHit: true,
    },
    {
      id: 7,
      name: "Жакет",
      description: "Стильный",
      price: "290 сом",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
      isHit: true,
    },
    {
      id: 8,
      name: "Топ",
      description: "Летний",
      price: "120 сом",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300",
      isHit: true,
    },
  ];

  const visibleCards = 3;
  const maxSlide = products.length - visibleCards;

  const nextSlide = () => {
    if (isAnimating || currentSlide >= maxSlide) return;
    setIsAnimating(true);
    setCurrentSlide(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || currentSlide <= 0) return;
    setIsAnimating(true);
    setCurrentSlide(prev => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        if (currentSlide >= maxSlide) {
          setCurrentSlide(0);
        } else {
          nextSlide();
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, maxSlide]);

  const getVisibleProducts = () => {
    return products.slice(currentSlide, currentSlide + visibleCards);
  };
  const handleWhatsAppClick = (product) => {
        const phoneNumber = "+996706247507"; // Номер телефона без + и пробелов
        const message = `Здравствуйте! Меня интересует товар "${product.name}" за ${product.price}. Можете предоставить больше информации?`;
        // Көйгөйдү чечүү: phoneNumber өзгөрмөсүн туура колдонуу
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      };

  return (
    <>
      <section className="bestseller">
        <div className="bestseller__container">
          <div className="bestseller__content">
            <div className="bestseller__left">
              <h2 className="bestseller__title">
                Популярные
                <br />
                товары
              </h2>

              <p className="bestseller__description">
                Посмотрите популярные товары по
                <br />
                низким ценам
              </p>

              <div className="bestseller__controls">
                <button 
                  className="bestseller__nav-button"
                  onClick={prevSlide}
                  disabled={isAnimating || currentSlide <= 0}
                >
                  <ChevronLeft />
                </button>
                <button 
                  className="bestseller__nav-button"
                  onClick={nextSlide}
                  disabled={isAnimating || currentSlide >= maxSlide}
                >
                  <ChevronRight />
                </button>
              </div>

              <div className="bestseller__indicators">
                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                  <div
                    key={index}
                    className={`bestseller__indicator ${
                      index === currentSlide 
                        ? 'bestseller__indicator--active' 
                        : 'bestseller__indicator--inactive'
                    }`}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentSlide(index);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="bestseller__right">
              <div className="bestseller__carousel">
                <div 
                  className="bestseller__products"
                  style={{
                    transform: `translateX(-${currentSlide * (262 + 25)}px)`,
                    transition: isAnimating ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                  }}
                >
                  {products.map((product) => (
                    <div key={product.id} className="bestseller__product-card">
                      <div className="bestseller__product-content">
                        <div className="bestseller__product-image">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            loading="lazy"
                          />

                          <div className="bestseller__product-overlay">
                            <div className="bestseller__overlay-icon">
                              <Eye size={24} />
                            </div>
                          </div>

                          {product.isHit && (
                            <div className="bestseller__hit-badge">
                              <div className="bestseller__hit-badge-text">
                                ХИТ
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="bestseller__product-info">
                          <h3 className="bestseller__product-name">
                            {product.name}
                          </h3>

                          <p className="bestseller__product-description">
                            {product.description}
                          </p>

                          <div className="bestseller__product-footer">
                            <span className="bestseller__product-price">
                              {product.price}
                            </span>

                            <button 
                              className="bestseller__product-button"
                              onClick={() => handleWhatsAppClick(product)}
                            >
                              УТОЧНИТЬ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bestseller__slide-counter">
            <span className="bestseller__slide-current">{currentSlide + 1}</span>
            <span className="bestseller__slide-separator"> / </span>
            <span className="bestseller__slide-total">{maxSlide + 1}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bestseller;