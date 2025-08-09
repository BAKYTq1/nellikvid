import React from 'react'
import './Banner.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import banner1 from '../../../assets/MirbekImages/Banner1.svg'
// import bgBanner from '../../../assets/MirbekImages/BgBanner.png'
import DownButtons from './DownButtons/DownButtons.jsx'


function Banner() {
    return (
        <>
            <div className="banner">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    loop={true}
                    className="banner-swiper"
                >

                    <SwiperSlide >
                        <div
                            className="banner-slide "
                            style={{ backgroundImage: `url(https://nelikvid.kg/upload/iblock/1cc/1cc62247c571eae2f282f8e4d3523dc3.jpg)` }}
                        >
                            <div className="banner-container">

                                <div className="banner-content">
                                    <h2>Женская двойка</h2>
                                    <button>Посмотреть каталог</button>
                                </div>
                                <div className="banner-image">
                                    <img src="https://nelikvid.kg/product/banner/ban01.png" alt="Product" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                            className="banner-slide boots"
                            style={{ backgroundImage: `url(https://nelikvid.kg/upload/iblock/7b1/7b13021230d5152325b75042eb71e25d.jpg)` }}
                        >
                            <div className="banner-container ">

                                <div className="banner-image">
                                    <img src="https://nelikvid.kg/upload/iblock/d1c/d1c0924aaaccb33118977202f97e6520.png" alt="Product" />
                                </div>
                                <div className="banner-content">
                                    <h2>Минималистичные. <br />
                                         Беговые. Скоростные.
                                    </h2>
                                    <button>Посмотреть каталог</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div
                            className="banner-slide bag"
                            style={{ backgroundImage: `url(https://nelikvid.kg/upload/iblock/901/9016a633bcb0002bc128f56cbc452a09.jpg)` }}
                        >
                            <div className="banner-container ">

                                <div className="banner-content">
                                    <h2>Рюкзаки для туризма <br />
                                         от 3 450 сом</h2>
                                    <button>Посмотреть каталог</button>
                                </div>
                                <div className="banner-image">
                                    <img src="https://nelikvid.kg/upload/iblock/c21/c2151a2437cd488c3fd42ebc6f6b3b5d.png" alt="Product" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <DownButtons />
                <div className="custom-pagination" />

            </div>
        </>
    )
}

export default Banner
