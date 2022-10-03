import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { motion } from "framer-motion"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useShoppingCart } from '../context/ShoppingCartContext'


type CartProps = {
    cartType: string,
    id: string,
}
function CartButton({ cartType, id }: CartProps) {
    const [showFlyout, setShowFlyout] = useState<boolean>(false)

    const {
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useShoppingCart()

    let quantity: number = getItemQuantity(id);

    return (
        <div className='select-none'>

            {cartType === 'flyout' ? (
                <div
                    className="cartHidden flex justify-end">

                    {(quantity === 0) ? (
                        <div
                            onClick={() => increaseQuantity(id)}
                            onMouseOver={() => setShowFlyout(true)}
                            onMouseLeave={() => setShowFlyout(false)}
                            className="cartHiddenIcon overflow-hidden flex justify-end">
                            {showFlyout ? (<motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="cartHiddenFlyout">
                                <p className="text-xs font-semibold p-0 bg-gray-700 pl-4 pr-2 py-1 rounded-l-xl cursor-pointer">
                                    Add to cart
                                </p>

                            </motion.div>) : (<></>)}
                            <div className='cartHiddenIcon relative z-50'>
                                <IconButton
                                    size="small"
                                    color="inherit"
                                    aria-label="add to shopping cart">
                                    <AddShoppingCartIcon fontSize='small' />
                                </IconButton>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='flex items-center mb-2'>
                                <div className='cursor-pointer active:scale-90'
                                    onClick={() => decreaseQuantity(id)}>
                                    <RemoveCircleOutlineIcon fontSize='small' />
                                </div>
                                <div className='mx-2 flex items-end'>
                                    <span className='text-xl font-bold w-6 mr-1 flex justify-center'>
                                        <p>{quantity}</p></span>
                                    in cart
                                </div>
                                <div className='cursor-pointer active:scale-90'
                                    onClick={() => increaseQuantity(id)}>
                                    <AddCircleOutlineIcon
                                        fontSize='small' />
                                </div>
                            </div>
                            <div className='w-fit ml-auto'>
                                <div className='bg-gray-700 text-white text-xs px-3 py-1 rounded-md cursor-pointer active:scale-90 select-none'
                                    onClick={() => removeFromCart(id)}>
                                    Remove </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                // type shown
                <div className="cartShown">
                    <Button
                        disableElevation
                        size="small"
                        variant="contained"
                        endIcon={<AddShoppingCartIcon />}
                        sx={{ fontSize: '10px', fontWeight: 'bold', color: '#fff' }}>
                        Add to cart
                    </Button>
                </div>
            )}

        </div >
    )
}

export default CartButton