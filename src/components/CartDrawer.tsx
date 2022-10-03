// import { useState, KeyboardEvent, MouseEvent } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartDrawerItem from './CartDrawerItem';
import { DEALS } from '../data/data'
import { formatPrice } from '../utility/formatPrice'
import Divider from '@mui/material/Divider'

type CartDrawerProps = {
    isOpen: boolean
}
export default function CartDrawer({ isOpen }: CartDrawerProps) {

    const { closeCart, cartQuantity, cartItems } = useShoppingCart()

    const items = () => (
        <div
            className='px-2 py-6'
            style={{ width: 280 }}

        >
            <div className='mb-4'>
                <h2 className='font-bold text-sm'>
                    Shopping Cart Items</h2>
            </div>
            {!(cartQuantity === 0) ? (
                <ul>
                    {cartItems?.map((cartItem, index) => (
                        <li key={index}
                            className='mb-2 cartItem'
                        // onClick={closeCart}
                        // onKeyDown={closeCart}
                        >
                            <CartDrawerItem {...cartItem} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='text-lg font-thin'>
                    Your cart is empty...</p>
            )}
            {cartQuantity > 0 && (<div className='mt-8'><Divider />
                <div className='my-2 text-lg text-end font-semibold'>
                    Total: {formatPrice(
                        cartItems.reduce((total, cartItem) => {
                            const item = DEALS.find(product => product.id === cartItem.id)
                            return total + (item?.info.price || 0) * cartItem.quantity
                        }, 0)
                    )}
                </div></div>)}
        </div>
    );

    return (
        <Drawer
            anchor='right'
            open={isOpen}
            onClose={closeCart}
        >
            {items()}
        </Drawer>
    );
}
