import { createContext, ReactNode, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
    children: ReactNode;
}
type CartItem = {
    id: string,
    quantity: number
}
type ShoppingCartContextProp = {
    getItemQuantity: (id: string) => number,
    increaseQuantity: (id: string) => void,
    decreaseQuantity: (id: string) => void,
    removeFromCart: (id: string) => void,
    openCart: () => void,
    closeCart: () => void,
    cartQuantity: number, // total number of items in cart
    cartItems: CartItem[], // an array of cart Items
    isDrawerOpen: boolean
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProp)

// customHook to get context
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', [])

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

    // this will calc the sum of each item's quantity in cart
    const cartQuantity = cartItems.reduce(
        (prevValue, item) => prevValue + item.quantity, 0)

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseQuantity(id: string) {
        setCartItems(prevState => {
            // if no item in the cart has this id, we then add it to the cart
            if (prevState.find(item => item.id === id) == null)
                return [...prevState, { id, quantity: 1 }]
            else {
                // else since item exists in the cart, just add 1 to it
                return prevState.map(item => {
                    if (item.id === id)
                        return { ...item, quantity: item.quantity + 1 }
                    else {
                        // otherwise just return the item
                        return item
                    }
                })
            }
        })
    }
    function decreaseQuantity(id: string) {
        setCartItems(prevState => {
            // if item quantity is 1, we filter it out of cartItems, i.e remove it, so any id we pass in, if the quantity is 1 we remove it
            if (prevState.find(item => item.id === id)?.quantity === 1)
                return prevState.filter(item => item.id !== id)
            // with the above if we pass in the id of an item that doesn't exist, it will still return the current list since all items will pass the above test
            else {
                // else since item exists in the cart, just remove 1 from it
                return prevState.map(item => {
                    if (item.id === id)
                        return { ...item, quantity: item.quantity - 1 }
                    else {
                        // otherwise just return the item
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: string) {
        // hear we filter out the item matching the id we pass in
        setCartItems(prevState => {
            return prevState.filter(item => item.id !== id)
        })
    }
    const openCart = () => setIsDrawerOpen(true)
    const closeCart = () => setIsDrawerOpen(false)

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity,
                isDrawerOpen,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}