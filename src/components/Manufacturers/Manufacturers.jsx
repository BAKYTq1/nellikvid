import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import './Manufacturers.scss';

function Manufacturers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalImageChanging, setIsModalImageChanging] = useState(false);

  const manufacturers = [
    {
      id: 1,
      title: "Платья на заказ",
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Женские платья на заказ",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Женские толстовки швем заказ",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Элегантные костюмы",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Модные блузки",
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Стильные юбки",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const visibleCards = 3;
  const maxSlide = manufacturers.length - visibleCards;

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const openModal = (manufacturer) => {
    setSelectedImage(manufacturer);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextModalImage = () => {
    const currentIndex = manufacturers.findIndex(m => m.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % manufacturers.length;
    
    setIsModalImageChanging(true);
    
    setTimeout(() => {
      setSelectedImage(manufacturers[nextIndex]);
      setIsModalImageChanging(false);
    }, 300);
  };

  const prevModalImage = () => {
    const currentIndex = manufacturers.findIndex(m => m.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + manufacturers.length) % manufacturers.length;
    
    setIsModalImageChanging(true);
    
    setTimeout(() => {
      setSelectedImage(manufacturers[prevIndex]);
      setIsModalImageChanging(false);
    }, 300);
  };

  return (
    <>
      <section className="manufacturers">
        <div className="manufacturers__container">
          <div className="manufacturers__header">
            <div className="manufacturers__text">
              <h2 className="manufacturers__title">
                Производители одежды в Бишкеке
              </h2>
              <p className="manufacturers__description">
                Закажите прямо у производителей одежды
              </p>
            </div>
            
            <div className="manufacturers__controls">
              <button 
                className="manufacturers__nav-button"
                onClick={prevSlide}
                disabled={currentSlide <= 0}
              >
                <ChevronLeft />
              </button>
              <button 
                className="manufacturers__nav-button"
                onClick={nextSlide}
                disabled={currentSlide >= maxSlide}
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="manufacturers__carousel">
            <div 
              className="manufacturers__cards"
              style={{
                transform: `translateX(-${currentSlide * (380 + 20)}px)`,
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {manufacturers.map((manufacturer) => (
                <div 
                  key={manufacturer.id} 
                  className="manufacturers__card"
                  onClick={() => openModal(manufacturer)}
                >
                  <div className="manufacturers__card-image">
                    <img 
                      src={manufacturer.image} 
                      alt={manufacturer.title}
                      loading="lazy"
                    />
                    <div className="manufacturers__card-overlay">
                      <h3 className="manufacturers__card-title">
                        {manufacturer.title}
                      </h3>
                    </div>
                    <div className="manufacturers__zoom-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                        <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2"/>
                        <line x1="8" y1="11" x2="14" y2="11" stroke="white" strokeWidth="2"/>
                        <line x1="11" y1="8" x2="11" y2="14" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="manufacturers__modal" onClick={closeModal}>
          <div className="manufacturers__modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="manufacturers__modal-close" onClick={closeModal}>
              <X size={24}  />
            </button>
            
            <button className="manufacturers__modal-nav manufacturers__modal-nav--prev" onClick={prevModalImage}>
              <ChevronLeft size={32} />
            </button>
            
            <div className="manufacturers__modal-image">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                style={{
                  opacity: isModalImageChanging ? 0 : 1
                }}
              />
             
            </div>
            
            <button className="manufacturers__modal-nav manufacturers__modal-nav--next" onClick={nextModalImage}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Manufacturers;