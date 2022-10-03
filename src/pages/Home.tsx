import { ReactElement } from 'react'

import ExploreBrands from "../components/ExploreBrands"
import ExploreDeals from "../components/ExploreDeals"
import SwiperHome from "../components/SwiperHome"
import { ScrollToTop } from "../shared/ScrollToTop"
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


interface HomeProps {
    children?: ReactElement;
}

export function Home(props: HomeProps) {

    return (
        <div>

            <div className='mt-2 mb-6'>
                <SwiperHome />
            </div>

            <div className='mb-16'>
                <ExploreDeals />
            </div>

            <div className='mb-16'>

                <ExploreBrands />
            </div>


            <footer>
                {/* footer here */}
            </footer>

            <ScrollToTop {...props}>
                <Fab size="small"
                    aria-label="scroll back to top"
                    className="!bg-gray-700 !text-white"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
        </div >
    )
}
