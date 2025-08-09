import React from 'react'
import { Eye } from "lucide-react";

function Card({ products }) {
  const handleWhatsAppClick = (product) => {
    const phoneNumber = "+996706247507";
    const message = `Здравствуйте! Меня интересует товар "${product.name}" за ${product.price}. Можете предоставить больше информации?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="bestseller__product-card1">
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
                <>
                <div className="bestseller__hit-badge1">
                  <div className="bestseller__hit-badge-text1">
                   <h2>НЕЛИКВИД</h2>
                  </div>
                </div>
                <div className="bestseller__hit-badge2">
                  <div className="bestseller__hit-badge-text2">
                    <h2>ХИТ</h2>
                  </div>
                </div>
                </>
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
    </>
  );
}

export default Card;
