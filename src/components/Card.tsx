import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import Ratings from '../shared/Ratings'
import { formatPrice } from '../utility/formatPrice'
import CartButton from './CartButton'

type Props = {
    itemDetails: {
        info: {
            brand: string,
            description: string,
            price: number,
            shipping: boolean,
            rating: number,
            reviews: number
        },
        images: string[],
        id: string,
    },
}

function Card(props: Props) {
    const { itemDetails } = props
    const { info, images, id } = itemDetails

    return (
        <div>
            <div className='card p-2'>

                <div className='cardSlider bg-white'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        slidesPerView={1}
                        // pagination={{
                        //     type: "fraction",
                        // }}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        navigation={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {images?.map((img, index: number) => (
                            <SwiperSlide key={index}>
                                <div className='pb-10'>
                                    <div
                                        style={{
                                            background: `url(${img}) center no-repeat`,
                                            backgroundSize: 'contain',
                                            padding: '90px'
                                        }}>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div>
                    <p className="cardBrandName">
                        {info.brand}</p>
                    <p className="cardDesc">
                        {info.description}</p>
                </div>

                <div>
                    <div className="mb-1">
                        <CartButton cartType='flyout' id={id} />
                    </div>

                    <p className="cardPrice">
                        {formatPrice(info.price)}</p>

                    <p className="cardOffer">
                        Get 25% off with
                        <span>Outly Prime</span></p>

                    <p className="cardShipping">
                        {info.shipping ? (
                            'Free shipping'
                        ) : (
                            formatPrice(2000) + ' ' + 'shipping'
                        )}</p>

                    <div className="cardRating">
                        <Ratings rating={info.rating} reviews={info.reviews} />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Card