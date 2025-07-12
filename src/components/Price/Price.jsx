import React, { useState } from 'react';
import './Price.scss';

function Price() {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !isChecked) {
      alert('Пожалуйста, заполните все поля и согласитесь с условиями');
      return;
    }
    // Здесь можно добавить логику отправки email
    console.log('Email отправлен:', email);
    alert('Прайс-лист отправлен на ваш email!');
  };

  return (
    <div className="prs">
      <section className="section-6">
        <div className="price">
          <div className="price-icon">
            <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="10" width="50" height="70" rx="3" fill="none" stroke="#e94250" strokeWidth="2"/>
              <circle cx="25" cy="25" r="3" fill="#e94250"/>
              <circle cx="25" cy="35" r="3" fill="#e94250"/>
              <circle cx="25" cy="45" r="3" fill="#e94250"/>
              <circle cx="25" cy="55" r="3" fill="#e94250"/>
              <circle cx="25" cy="65" r="3" fill="#e94250"/>
              <line x1="35" y1="25" x2="55" y2="25" stroke="#e94250" strokeWidth="2"/>
              <line x1="35" y1="35" x2="55" y2="35" stroke="#e94250" strokeWidth="2"/>
              <line x1="35" y1="45" x2="55" y2="45" stroke="#e94250" strokeWidth="2"/>
              <line x1="35" y1="55" x2="55" y2="55" stroke="#e94250" strokeWidth="2"/>
              <line x1="35" y1="65" x2="55" y2="65" stroke="#e94250" strokeWidth="2"/>
            </svg>
          </div>
          <div className="price-text">
            <h2>Получите наш прайс-лист</h2>
            <p>На указанный E-mail Вам будет выслан наш прайс-лист</p>
          </div>
        </div>
        
        <form className="price-inputs" onSubmit={handleSubmit}>
          <h3>Ваша почта</h3>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Отправить</button>
          </div>
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <span>Согласен с условиями обработки персональных данных</span>
          </label>
        </form>
      </section>
    </div>
  );
}

export default Price;