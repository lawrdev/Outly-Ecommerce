import Image_brownbag from '../assets/images/dealsimgs/bagbrown.png'
import Image_blackbag from '../assets/images/dealsimgs/bagblack.png'
import Image_greenbag from '../assets/images/dealsimgs/baggreen.png'
import Image_heelsblack from '../assets/images/dealsimgs/heelsblack.png'
import Image_heelspink from '../assets/images/dealsimgs/heelspink.png'
import Image_heelsgray from '../assets/images/dealsimgs/heelsgray.png'
import Image_heelsgold from '../assets/images/dealsimgs/heelsgold.png'
import Image_heelsblue from '../assets/images/dealsimgs/heelsblue.png'
import Image_hoodiebluef from '../assets/images/dealsimgs/hoodiebluef.png'
import Image_hoodieblueb from '../assets/images/dealsimgs/hoodieblueb.png'
import Image_hoodiegreenf from '../assets/images/dealsimgs/hoodiegreenf.png'
import Image_hoodiegreenb from '../assets/images/dealsimgs/hoodiegreenb.png'
import Image_jean1 from '../assets/images/dealsimgs/jean1.png'
import Image_jean2 from '../assets/images/dealsimgs/jean2.png'
import Image_babyg1 from '../assets/images/dealsimgs/babyg1.png'
import Image_babyg2 from '../assets/images/dealsimgs/babyg2.png'
import Image_babyg3 from '../assets/images/dealsimgs/babyg3.png'
import Image_babyg4 from '../assets/images/dealsimgs/babyg4.png'
import Image_babyg5 from '../assets/images/dealsimgs/babyg5.png'
import Image_blend1 from '../assets/images/dealsimgs/blend1.png'
import Image_blend2 from '../assets/images/dealsimgs/blend2.png'
import Image_blend3 from '../assets/images/dealsimgs/blend3.png'
import Image_blend4 from '../assets/images/dealsimgs/blend4.png'
import Image_dress1 from '../assets/images/dealsimgs/dress1.png'
import Image_dress2 from '../assets/images/dealsimgs/dress2.png'
import Image_dress3 from '../assets/images/dealsimgs/dress3.png'
import Image_dress4 from '../assets/images/dealsimgs/dress4.png'
import Image_girls4 from '../assets/images/dealsimgs/girls1.png'
import Image_girls6 from '../assets/images/dealsimgs/girls2.png'
import Image_girls3 from '../assets/images/dealsimgs/girls3.png'
import Image_girls1 from '../assets/images/dealsimgs/girls4.png'
import Image_girls5 from '../assets/images/dealsimgs/girls5.png'
import Image_girls2 from '../assets/images/dealsimgs/girls6.png'
import { v4 as uuidv4 } from 'uuid'

import Image_nike from '../assets/images/categoryimgs/nike.png'
import Image_apple from '../assets/images/categoryimgs/apple.png'
import Image_samsung from '../assets/images/categoryimgs/samsung.png'
import Image_tlc from '../assets/images/categoryimgs/tlc.png'
import Image_armani from '../assets/images/categoryimgs/armani.png'
import Image_michaelkors from '../assets/images/categoryimgs/michaelkors.png'
import Image_coach from '../assets/images/categoryimgs/coachbag.png'
import Image_cybex from '../assets/images/categoryimgs/cybex.png'


type DealsInfo = {
    brand: string,
    description: string,
    price: number,
    shipping: boolean,
    rating: number,
    reviews: number
}
type DealsArray = {
    info: DealsInfo,
    images: string[],
    id: string
}[]
type BrandsType = { name: string, image: string }[]

export const DEALS: DealsArray = [
    {
        info: {
            brand: 'Phoebe',
            description: 'Large Leather Grab Tote',
            price: 30000,
            shipping: true,
            rating: 4.0,
            reviews: 17
        },
        images: [
            Image_brownbag,
            Image_blackbag,
            Image_greenbag,
        ],
        id: uuidv4()
    },
    {
        info: {
            brand: 'And Now This',
            description: "Women's Ultra High Rise Straight Jeans",
            price: 12000,
            shipping: true,
            rating: 4.5,
            reviews: 19
        },
        images: [
            Image_girls1,
            Image_girls2,
            Image_girls3,
            Image_girls4,
            Image_girls5,
            Image_girls6
        ],
        id: uuidv4()
    },
    {
        info: {
            brand: 'Little Me',
            description: 'Baby Girls Coverall with Frog Footies ',
            price: 9000,
            shipping: true,
            rating: 3.5,
            reviews: 9
        },
        images: [
            Image_babyg1,
            Image_babyg2,
            Image_babyg3,
            Image_babyg4,
            Image_babyg5,
        ],
        id: uuidv4()
    },
    {
        info: {
            brand: 'Steve Madden',
            description: 'Daisie Pumps',
            price: 20000,
            shipping: false,
            rating: 5.0,
            reviews: 21
        },
        images: [
            Image_heelsblue,
            Image_heelspink,
            Image_heelsgray,
            Image_heelsgold,
            Image_heelsblack,
        ],
        id: uuidv4()
    },
    {
        info: {
            brand: 'MICHAEL Michael Kors',
            description:
                "Women's Smocked-Waist Tiered Dress",
            price: 4000,
            shipping: true,
            rating: 4.5,
            reviews: 13
        },
        images: [
            Image_dress1,
            Image_dress2,
            Image_dress3,
            Image_dress4,
        ],
        id: uuidv4()
    },
    {
        info: {
            brand: 'Kalorik',
            description: '1400 Watt 3L Blender',
            price: 4800,
            shipping: true,
            rating: 3.0,
            reviews: 7
        },
        images: [
            Image_blend1,
            Image_blend2,
            Image_blend3,
            Image_blend4,
        ],
        id: uuidv4()
    },
    {
        info: {
            brand: 'Puma',
            description: "Men's Essential Oversized Logo Hoodie",
            price: 8000,
            shipping: true,
            rating: 2.0,
            reviews: 4
        },
        images: [
            Image_hoodiegreenf,
            Image_hoodiegreenb,
            Image_hoodiebluef,
            Image_hoodieblueb,

        ],
        id: uuidv4()
    },
    {
        info: {
            brand: 'Original Penguin',
            description: "Men's Daytona Slim-Fit Jeans ",
            price: 5000,
            shipping: true,
            rating: 4.5,
            reviews: 3
        },
        images: [
            Image_jean1,
            Image_jean2,
        ],
        id: uuidv4()
    },
]

export const BRANDS: BrandsType = [
    { name: 'Apple', image: Image_apple },
    { name: 'Nike', image: Image_nike },
    { name: 'Coach', image: Image_coach },
    { name: 'Cybex', image: Image_cybex },
    { name: 'Samsung', image: Image_samsung },
    { name: 'Armani', image: Image_armani },
    { name: 'Tlc', image: Image_tlc },
    { name: 'Michael Kors', image: Image_michaelkors },
]