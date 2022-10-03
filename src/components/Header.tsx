// import React from 'react'

import { Categories } from "./Categories"
import { Navbar } from "./Navbar"
import { motion } from "framer-motion"
import { useBackdrop } from '../context/BackdropContext'

type Variants = {
    hidden: {},
    show: {}
}

function Header() {

    const { showBackdrop } = useBackdrop()

    const flyoutVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 0.7,
            transition: {
                duration: 0.5,
                delay: 0.4
            }
        },
    }

    return (<>
        {showBackdrop && <motion.div
            variants={flyoutVariants}
            initial='hidden'
            animate='show'
            className="backdrop">
            BACK DROP
        </motion.div>}
        <header
            id='back-to-top-anchor'
            className='mb-2 relative'
            style={{ zIndex: 100, backgroundColor: '#F8F9FA' }}>

            <div className='mb-4 max-w-7xl mx-auto'>
                <Navbar />
            </div>

            {/* search here */}

            <div className='mb-2 pb-2'>
                <Categories />
            </div>

            {/* <Divider component="div" role="presentation"></Divider> */}
        </header>
    </>)
}

export default Header