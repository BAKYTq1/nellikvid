import React from 'react';
import './WorkSteps.scss';

const WorkSteps = () => {
    const steps = [
        {
            id: 1,
            text: 'Выберите подходящий товар в каталоге',
            title: "Наш ассортимент обширен! Вы обязательно найдете то что искали по лучшей цене"
        },
        {
            id: 2,
            text: 'Дождитесь подтверждения заказа продавцом',
            title: "Всю дополнительную информацию о товаре напишите прямо продавцу. Мы экономим ваше время!"
        },
        {
            id: 3,
            text: 'Оплатите заказ удобным для вас способом',
            title: "Продавец свяжется с вами в рабочее время. Обычно это происходит в течение 15 минут после обратной связи"
        },
        {
            id: 4,
            text: 'Свяжитесь с продавцом',
            title: "К оплате мы принимаем как пластиковые карты Visa и MasterCard, так и электронные деньги"
        },
        {
            id: 5,
            text: 'Получите ваш заказ от курьерской службы',
            title: "Мы доставляем заказы в стран СНГ транспортной компанией Альфа Карго, РоссКарго и другими"
        },
        {
            id: 6,
            text: 'Выберите подходящий товар в каталоге',
            title: "Оставьте отзыв о нашей работе, и продавец подарит вам скидку 5% на следующую покупку"
        }
    ];



    return (
        <div className="work-steps container">
            <h2 className="work-steps__info">Этапы работы
                <span> Ознакомьтесь с этами работой в нашем
                    магазине из этого блока</span>
            </h2>
            <div className="work-steps__grid">
                {steps.map((step, index) => (
                    <div key={index} className="work-steps__card">
                        <div className="work-steps__number">{index + 1}</div>
                        <div className="work-steps__content">
                            <h2 className="work-steps__text">{step.text}</h2>
                            <h3 className="work-steps__title">{step.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkSteps;