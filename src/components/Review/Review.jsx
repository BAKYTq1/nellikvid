import React from 'react'
import './Review.scss'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function Review() {
    const [activeSlide, setActiveSlide] = React.useState(1)
    const data = [
        {
            id: 1,
            name: "Мария Смирнова",
            title: "Доставкой в срок и ценой довольна. Советую заказывать всем своим подругам. Рюкзаки и походный инвентарь - лучше всех в городе. Консультанты вежливые, рассказали блондинке что сейчас в тренде."
        },
        {
            id: 2,
            name: "Иван Трофимов",
            title: "Заказывал в этом магазине кроссовки для бега. Доставили быстро. Товар надлежащего качества. Цены ниже чем в магазинах моего города, что не может не радовать. Всем советую покупать здесь."
        }
    ]

    return (
        <section>
            <div className='review '>
                <div className="review-left">
                    <h2>Отзывы довольных клиентов <br /> о нашей работе</h2>
                    <p>Лучше всего о нашей работе говорят отзывы!</p>
                    <button>Оставить отзыв</button>
                </div>
                <div className='review-right'>
                    <div className="slider">
                        {
                            data.map(item => (
                                <div className={`review-item ${activeSlide === item.id ? 'active' : ''}`} key={item.id}>
                                    <h3>{item.name}</h3>
                                    <p>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='slider-controls'>
                        <button onClick={() => setActiveSlide(activeSlide === 1 ? 2 : 1)}> <IoIosArrowBack /></button>
                        <button onClick={() => setActiveSlide(activeSlide === 2 ? 1 : 2)}><IoIosArrowForward /></button>
                    </div>
                    <div className="slider-dots">
                        <div className={`slider-dot ${activeSlide === 1 ? 'active' : ''}`} onClick={() => setActiveSlide(1)}></div>
                        <div className={`slider-dot ${activeSlide === 2 ? 'active' : ''}`} onClick={() => setActiveSlide(2)}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review