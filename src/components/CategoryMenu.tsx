// import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

type Props = {
    displayMenu: string
}
type Variants = {
    hidden: {},
    show: {}
}

function CategoryMenu(props: Props) {
    const { displayMenu } = props;

    if (displayMenu === 'Women')
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flyoutWrapper'
                style={{ backgroundColor: '#F8F9FA' }}>

                <div
                    id='women'
                    className='flyout flex justify-evenly gap-5 p-8 !w-full max-w-7xl mx-auto' aria-label='Women'
                >
                    <div className='flyout-col'>
                        <div className='flyout-inner-col'>
                            <h5>
                                Women's Clothing</h5>
                            <Link to='/'>
                                All Women's Clothing</Link>
                            <Link to='/'>New Arrivals</Link>
                            <Link to='/'>Activewear</Link>
                            <Link to='/'>
                                Bras, Underwear &amp; Lingerie
                            </Link>
                            <Link to='/'>Cashmere</Link>
                            {/* <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link>
                            <Link to='/'>Jeans</Link>
                            <Link to='/'>
                                Jumpsuits &amp; Rompers</Link>
                            <Link to='/'>
                                Pajamas &amp; Robes</Link>
                            <Link to='/'>Pants &amp; Capris</Link>
                            <Link to='/'>Skirts</Link> */}
                            <Link to='/'>Suits &amp; Suit Separates</Link>
                            <Link to='/'>Sweaters</Link>
                            <Link to='/'>Swimsuits &amp; Cover-Ups</Link>
                            <Link to='/'>Tights, Socks, &amp; Hosiery</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Juniors</h5>
                            <Link to='/'>All Juniors' Clothing</Link>
                            <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link>
                            {/* <Link to='/'>Homecoming</Link>
                            <Link to='/'>Sweaters</Link>
                            <Link to='/'>Tops</Link> */}
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Plus Sizes</h5>
                            <Link to='/'>All Plus Size Clothing</Link>
                            {/* <Link to='/'>All Trendy Plus Size</Link>
                            <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link> */}
                            <Link to='/'>Tops</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>More Sizes</h5>
                            <Link to='/'>Petites (5'4" &amp; Under)</Link>
                            <Link to='/'>Maternity</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Complete Your Look</h5>
                            <Link to='/'>Shoes</Link>
                            {/* <Link to='/'>Handbags &amp; Wallets</Link>
                            <Link to='/'>Accessories</Link>
                            <Link to='/'>Fine Jewelry</Link>
                            <Link to='/'>Watches</Link>
                            <Link to='/'>Makeup</Link> */}
                            <Link to='/'>Perfume</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Women's Brands</h5>
                            <Link to='/'>All Women's Brands</Link>
                            {/* <Link to='/'>Calvin Klein</Link>
                            <Link to='/'>CeCe</Link>
                            <Link to='/'>INC International Concepts</Link>
                            <Link to='/'>Lauren Ralph Lauren</Link>
                            <Link to='/'>Levi's</Link>
                            <Link to='/'>MICHAEL Michael Kors</Link> */}
                            <Link to='/'>Tommy Hilfiger</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Shop By Occasion</h5>
                            <Link to='/'>Evening</Link>
                            {/* <Link to='/'>Outdoor &amp; Camping</Link>
                            <Link to='/'>Vacation</Link>
                            <Link to='/'>Wear to Work</Link> */}
                            <Link to='/'>Wedding</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <h5>Discover</h5>
                            <Link to='/'>Coat Trends</Link>
                            {/* <Link to='/'>Contemporary Trends</Link>
                            <Link to='/'>Diverse Owned Brands</Link>
                            <Link to='/'>Icons of Style</Link> */}
                            <Link to='/'>Dress Trends</Link>
                            <Link to='/'>Own Your Style</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <Link to='/'>30% Off Best Brands</Link>
                            {/* <Link to='/'>Save on Lauren Ralph Lauren</Link>
                            <Link to='/'>Sale &amp; Clearance</Link> */}
                        </div>

                    </div>
                </div>

            </motion.div>
        )
    else if (displayMenu === 'Men')
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flyoutWrapper'
                style={{ backgroundColor: '#F8F9FA' }}>

                <div
                    id='men'
                    className='flyout flex justify-evenly gap-5 p-8 !w-full max-w-7xl mx-auto' aria-label='Women'
                >
                    <div className='flyout-col'>
                        <div className='flyout-inner-col'>
                            <h5>
                                Women's Clothing</h5>
                            <Link to='/'>
                                All Women's Clothing</Link>
                            <Link to='/'>New Arrivals</Link>
                            <Link to='/'>Activewear</Link>
                            <Link to='/'>
                                Bras, Underwear &amp; Lingerie
                            </Link>
                            <Link to='/'>Cashmere</Link>
                            {/* <Link to='/'>Coats &amp; Jackets</Link>
                        <Link to='/'>Dresses</Link>
                        <Link to='/'>Jeans</Link>
                        <Link to='/'>
                            Jumpsuits &amp; Rompers</Link>
                        <Link to='/'>
                            Pajamas &amp; Robes</Link>
                        <Link to='/'>Pants &amp; Capris</Link>
                        <Link to='/'>Skirts</Link> */}
                            <Link to='/'>Suits &amp; Suit Separates</Link>
                            <Link to='/'>Sweaters</Link>
                            <Link to='/'>Swimsuits &amp; Cover-Ups</Link>
                            <Link to='/'>Tights, Socks, &amp; Hosiery</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Juniors</h5>
                            <Link to='/'>All Juniors' Clothing</Link>
                            <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link>
                            {/* <Link to='/'>Homecoming</Link>
                        <Link to='/'>Sweaters</Link>
                        <Link to='/'>Tops</Link> */}
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Plus Sizes</h5>
                            <Link to='/'>All Plus Size Clothing</Link>
                            {/* <Link to='/'>All Trendy Plus Size</Link>
                        <Link to='/'>Coats &amp; Jackets</Link>
                        <Link to='/'>Dresses</Link> */}
                            <Link to='/'>Tops</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>More Sizes</h5>
                            <Link to='/'>Petites (5'4" &amp; Under)</Link>
                            <Link to='/'>Maternity</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Complete Your Look</h5>
                            <Link to='/'>Shoes</Link>
                            {/* <Link to='/'>Handbags &amp; Wallets</Link>
                        <Link to='/'>Accessories</Link>
                        <Link to='/'>Fine Jewelry</Link>
                        <Link to='/'>Watches</Link>
                        <Link to='/'>Makeup</Link> */}
                            <Link to='/'>Perfume</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Women's Brands</h5>
                            <Link to='/'>All Women's Brands</Link>
                            {/* <Link to='/'>Calvin Klein</Link>
                        <Link to='/'>CeCe</Link>
                        <Link to='/'>INC International Concepts</Link>
                        <Link to='/'>Lauren Ralph Lauren</Link>
                        <Link to='/'>Levi's</Link>
                        <Link to='/'>MICHAEL Michael Kors</Link> */}
                            <Link to='/'>Tommy Hilfiger</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Shop By Occasion</h5>
                            <Link to='/'>Evening</Link>
                            {/* <Link to='/'>Outdoor &amp; Camping</Link>
                        <Link to='/'>Vacation</Link>
                        <Link to='/'>Wear to Work</Link> */}
                            <Link to='/'>Wedding</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <h5>Discover</h5>
                            <Link to='/'>Coat Trends</Link>
                            {/* <Link to='/'>Contemporary Trends</Link>
                        <Link to='/'>Diverse Owned Brands</Link>
                        <Link to='/'>Icons of Style</Link> */}
                            <Link to='/'>Dress Trends</Link>
                            <Link to='/'>Own Your Style</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <Link to='/'>30% Off Best Brands</Link>
                            {/* <Link to='/'>Save on Lauren Ralph Lauren</Link>
                        <Link to='/'>Sale &amp; Clearance</Link> */}
                        </div>

                    </div>
                </div>

            </motion.div>
        )
    else if (displayMenu === 'Kids & Baby')
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flyoutWrapper'
                style={{ backgroundColor: '#F8F9FA' }}>

                <div
                    id='kidsAndBaby'
                    className='flyout flex justify-evenly gap-5 p-8 !w-full max-w-7xl mx-auto' aria-label='Women'
                >
                    <div className='flyout-col'>
                        <div className='flyout-inner-col'>
                            <h5>
                                Women's Clothing</h5>
                            <Link to='/'>
                                All Women's Clothing</Link>
                            <Link to='/'>New Arrivals</Link>
                            <Link to='/'>Activewear</Link>
                            <Link to='/'>
                                Bras, Underwear &amp; Lingerie
                            </Link>
                            <Link to='/'>Cashmere</Link>
                            <Link to='/'>Suits &amp; Suit Separates</Link>
                            <Link to='/'>Sweaters</Link>
                            <Link to='/'>Swimsuits &amp; Cover-Ups</Link>
                            <Link to='/'>Tights, Socks, &amp; Hosiery</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Juniors</h5>
                            <Link to='/'>All Juniors' Clothing</Link>
                            <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Plus Sizes</h5>
                            <Link to='/'>All Plus Size Clothing</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>More Sizes</h5>
                            <Link to='/'>Petites (5'4" &amp; Under)</Link>
                            <Link to='/'>Maternity</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Complete Your Look</h5>
                            <Link to='/'>Shoes</Link>
                            <Link to='/'>Perfume</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Women's Brands</h5>
                            <Link to='/'>All Women's Brands</Link>
                            <Link to='/'>Tommy Hilfiger</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Shop By Occasion</h5>
                            <Link to='/'>Evening</Link>
                            <Link to='/'>Wedding</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <h5>Discover</h5>
                            <Link to='/'>Coat Trends</Link>
                            <Link to='/'>Dress Trends</Link>
                            <Link to='/'>Own Your Style</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <Link to='/'>30% Off Best Brands</Link>
                        </div>

                    </div>
                </div>

            </motion.div>
        )
    else if (displayMenu === 'House items')
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flyoutWrapper'
                style={{ backgroundColor: '#F8F9FA' }}>

                <div
                    id='houseItems'
                    className='flyout flex justify-evenly gap-5 p-8 !w-full max-w-7xl mx-auto' aria-label='Women'
                >
                    <div className='flyout-col'>
                        <div className='flyout-inner-col'>
                            <h5>
                                Women's Clothing</h5>
                            <Link to='/'>
                                All Women's Clothing</Link>
                            <Link to='/'>New Arrivals</Link>
                            <Link to='/'>Activewear</Link>
                            <Link to='/'>
                                Bras, Underwear &amp; Lingerie
                            </Link>
                            <Link to='/'>Cashmere</Link>
                            <Link to='/'>Suits &amp; Suit Separates</Link>
                            <Link to='/'>Sweaters</Link>
                            <Link to='/'>Swimsuits &amp; Cover-Ups</Link>
                            <Link to='/'>Tights, Socks, &amp; Hosiery</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Juniors</h5>
                            <Link to='/'>All Juniors' Clothing</Link>
                            <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Plus Sizes</h5>
                            <Link to='/'>All Plus Size Clothing</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>More Sizes</h5>
                            <Link to='/'>Petites (5'4" &amp; Under)</Link>
                            <Link to='/'>Maternity</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Complete Your Look</h5>
                            <Link to='/'>Shoes</Link>
                            <Link to='/'>Perfume</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Women's Brands</h5>
                            <Link to='/'>All Women's Brands</Link>
                            <Link to='/'>Tommy Hilfiger</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Shop By Occasion</h5>
                            <Link to='/'>Evening</Link>
                            <Link to='/'>Wedding</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <h5>Discover</h5>
                            <Link to='/'>Coat Trends</Link>
                            <Link to='/'>Dress Trends</Link>
                            <Link to='/'>Own Your Style</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <Link to='/'>30% Off Best Brands</Link>
                        </div>

                    </div>
                </div>

            </motion.div>
        )
    else if (displayMenu === 'All accessories')
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flyoutWrapper'
                style={{ backgroundColor: '#F8F9FA' }}>

                <div
                    id='allAccessories'
                    className='flyout flex justify-evenly gap-5 p-8 !w-full max-w-7xl mx-auto' aria-label='Women'
                >
                    <div className='flyout-col'>
                        <div className='flyout-inner-col'>
                            <h5>
                                Women's Clothing</h5>
                            <Link to='/'>
                                All Women's Clothing</Link>
                            <Link to='/'>New Arrivals</Link>
                            <Link to='/'>Activewear</Link>
                            <Link to='/'>
                                Bras, Underwear &amp; Lingerie
                            </Link>
                            <Link to='/'>Cashmere</Link>
                            <Link to='/'>Suits &amp; Suit Separates</Link>
                            <Link to='/'>Sweaters</Link>
                            <Link to='/'>Swimsuits &amp; Cover-Ups</Link>
                            <Link to='/'>Tights, Socks, &amp; Hosiery</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Juniors</h5>
                            <Link to='/'>All Juniors' Clothing</Link>
                            <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Plus Sizes</h5>
                            <Link to='/'>All Plus Size Clothing</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>More Sizes</h5>
                            <Link to='/'>Petites (5'4" &amp; Under)</Link>
                            <Link to='/'>Maternity</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Complete Your Look</h5>
                            <Link to='/'>Shoes</Link>
                            <Link to='/'>Perfume</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Women's Brands</h5>
                            <Link to='/'>All Women's Brands</Link>
                            <Link to='/'>Tommy Hilfiger</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Shop By Occasion</h5>
                            <Link to='/'>Evening</Link>
                            <Link to='/'>Wedding</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <h5>Discover</h5>
                            <Link to='/'>Coat Trends</Link>
                            <Link to='/'>Dress Trends</Link>
                            <Link to='/'>Own Your Style</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <Link to='/'>30% Off Best Brands</Link>
                        </div>

                    </div>
                </div>

            </motion.div>
        )
    else if (displayMenu === 'Deals')
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flyoutWrapper'
                style={{ backgroundColor: '#F8F9FA' }}>

                <div
                    id='deals'
                    className='flyout flex justify-evenly gap-5 p-8 !w-full max-w-7xl mx-auto' aria-label='Women'
                >
                    <div className='flyout-col'>
                        <div className='flyout-inner-col'>
                            <h5>
                                Women's Clothing</h5>
                            <Link to='/'>
                                All Women's Clothing</Link>
                            <Link to='/'>New Arrivals</Link>
                            <Link to='/'>Activewear</Link>
                            <Link to='/'>
                                Bras, Underwear &amp; Lingerie
                            </Link>
                            <Link to='/'>Cashmere</Link>
                            <Link to='/'>Suits &amp; Suit Separates</Link>
                            <Link to='/'>Sweaters</Link>
                            <Link to='/'>Swimsuits &amp; Cover-Ups</Link>
                            <Link to='/'>Tights, Socks, &amp; Hosiery</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Juniors</h5>
                            <Link to='/'>All Juniors' Clothing</Link>
                            <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Plus Sizes</h5>
                            <Link to='/'>All Plus Size Clothing</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>More Sizes</h5>
                            <Link to='/'>Petites (5'4" &amp; Under)</Link>
                            <Link to='/'>Maternity</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Complete Your Look</h5>
                            <Link to='/'>Shoes</Link>
                            <Link to='/'>Perfume</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Women's Brands</h5>
                            <Link to='/'>All Women's Brands</Link>
                            <Link to='/'>Tommy Hilfiger</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Shop By Occasion</h5>
                            <Link to='/'>Evening</Link>
                            <Link to='/'>Wedding</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <h5>Discover</h5>
                            <Link to='/'>Coat Trends</Link>
                            <Link to='/'>Dress Trends</Link>
                            <Link to='/'>Own Your Style</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <Link to='/'>30% Off Best Brands</Link>
                        </div>

                    </div>
                </div>

            </motion.div>
        )
    else if (displayMenu === 'Sale')
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='flyoutWrapper'
                style={{ backgroundColor: '#F8F9FA' }}>

                <div
                    id='sale'
                    className='flyout flex justify-evenly gap-5 p-8 !w-full max-w-7xl mx-auto' aria-label='Women'
                >
                    <div className='flyout-col'>
                        <div className='flyout-inner-col'>
                            <h5>
                                Women's Clothing</h5>
                            <Link to='/'>
                                All Women's Clothing</Link>
                            <Link to='/'>New Arrivals</Link>
                            <Link to='/'>Activewear</Link>
                            <Link to='/'>
                                Bras, Underwear &amp; Lingerie
                            </Link>
                            <Link to='/'>Cashmere</Link>
                            <Link to='/'>Suits &amp; Suit Separates</Link>
                            <Link to='/'>Sweaters</Link>
                            <Link to='/'>Swimsuits &amp; Cover-Ups</Link>
                            <Link to='/'>Tights, Socks, &amp; Hosiery</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Juniors</h5>
                            <Link to='/'>All Juniors' Clothing</Link>
                            <Link to='/'>Coats &amp; Jackets</Link>
                            <Link to='/'>Dresses</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Plus Sizes</h5>
                            <Link to='/'>All Plus Size Clothing</Link>
                            <Link to='/'>Tops</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>More Sizes</h5>
                            <Link to='/'>Petites (5'4" &amp; Under)</Link>
                            <Link to='/'>Maternity</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Complete Your Look</h5>
                            <Link to='/'>Shoes</Link>
                            <Link to='/'>Perfume</Link>
                        </div>
                        <div className='flyout-inner-col'>
                            <h5>Women's Brands</h5>
                            <Link to='/'>All Women's Brands</Link>
                            <Link to='/'>Tommy Hilfiger</Link>
                        </div>

                    </div>

                    <div className='flyout-col'>

                        <div className='flyout-inner-col'>
                            <h5>Shop By Occasion</h5>
                            <Link to='/'>Evening</Link>
                            <Link to='/'>Wedding</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <h5>Discover</h5>
                            <Link to='/'>Coat Trends</Link>
                            <Link to='/'>Dress Trends</Link>
                            <Link to='/'>Own Your Style</Link>
                        </div>

                        <div className='flyout-inner-col'>
                            <Link to='/'>30% Off Best Brands</Link>
                        </div>

                    </div>
                </div>

            </motion.div>
        )
    else return <></>
}

export default CategoryMenu