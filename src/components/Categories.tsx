import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryMenu from './CategoryMenu'
import { useBackdrop } from '../context/BackdropContext'

type FlyoutVariants = {
    hidden: {},
    show: {}
}
const category: string[] = [
    'Women',
    'Men',
    'Kids & Baby',
    'House items',
    'All accessories',
    'Deals',
    'Sale'
]

export function Categories() {

    const [currActiveMenu, setCurrActiveMenu] = useState<string>('')
    const { setBackdrop } = useBackdrop()

    const updateActiveMenu = (menu: string) => {

        // remove style from prev? active link
        const menuLinks = document.querySelectorAll('a.categoryLink');
        menuLinks?.forEach((link) => {
            if (link.textContent !== menu)
                link.classList.remove('activeLink');
        })

    }

    const showMenu = (e: MouseEvent<HTMLAnchorElement>) => {

        // show backdrop
        setBackdrop(true)

        // assign current link hovered as active
        const currLink = e.target as HTMLAnchorElement;
        const currMenu: string = currLink.textContent!;

        currLink?.classList.add('activeLink')
        // set new active link
        updateActiveMenu(currMenu)
        setCurrActiveMenu(currMenu)
    }

    const hideMenu = () => {

        // hide line on exit
        const menuLinks = document.querySelectorAll('a.categoryLink');
        menuLinks?.forEach((link) => {
            link.classList.remove('activeLink');
        })

        // hide backdrop
        setBackdrop(false)

        // reset current active menu on exit
        setCurrActiveMenu('')
    }

    const flyoutVariants: FlyoutVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 0.7,
            transition: {
                duration: 0.5,
                delay: 0.4
            }
        },
    }

    return (
        <section>
            <div className="relative w-full">

                {/* desktop */}
                <div className='mx-6 pt-2 border-t-gray-300'
                    style={{ height: '40px', borderTopWidth: '1px' }}
                    onMouseLeave={hideMenu}>

                    <ul className='categoryUL max-w-7xl mx-auto'>
                        {category.map((item, index: number) => (
                            <li className='categoryItem'
                                key={index}>
                                <Link to='/'
                                    onMouseOver={showMenu}
                                    className='categoryLink relative' >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='categoryDropdown !text-xs'
                        style={{ height: '39px' }}>
                        <CategoryMenu displayMenu={currActiveMenu} />
                    </div>
                </div>


                {/* Mobile */}

            </div>
        </section>
    )
}
