import { DEALS } from '../data/data'
import { formatPrice } from '../utility/formatPrice'
import { useShoppingCart } from '../context/ShoppingCartContext'
import Tooltip from '@mui/material/Tooltip'

type DealsInfo = {
    brand: string,
    description: string,
    price: number,
    shipping: boolean,
    rating: number,
    reviews: number
}
type CartDrawerItemProps = {
    id: string,
    quantity: number
}
type Item = {
    info: DealsInfo;
    images: string[];
    id: string;
}

function CartDrawerItem({ id, quantity }: CartDrawerItemProps) {
    // const [item, setItem] = useState<Item>()
    const { removeFromCart } = useShoppingCart()

    const item = DEALS.find(product => product.id === id)


    if (item === null) return null

    console.log('from CARTITEM', id, quantity, 'and item is...', item)

    // TODO: replace with a func in useEffect to get prdoucts from db

    return (
        <div className="flex justify-between gap-3 relative">
            <div>
                <div className="cartDrawerImageWrapper">
                    <img src={item?.images[0]}
                        alt='product'
                        className='cartDrawerImage'
                    />
                </div>
            </div>
            <div className='flex flex-col justify-center gap-1 flex-grow'>
                <p className='text-xs font-semibold'>
                    {item?.info.description}
                    {quantity > 1 ? <span className='text-sm font-normal'>
                        (x{quantity})</span> : null}
                </p>
                <p className='text-xs font-semibold text-gray-400'>
                    {formatPrice(item?.info.price!)}
                </p>
            </div>
            <div className='flex items-center gap-1'>
                <p className='text-xs font-semibold'>
                    {formatPrice(item?.info.price! * quantity!)}</p>
                <Tooltip title="Delete">
                    <div className='closeBtn'
                        onClick={() => removeFromCart(item?.id!)}>
                        &times;
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default CartDrawerItem