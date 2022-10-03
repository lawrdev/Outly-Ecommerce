import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating';
import StarRateIcon from '@mui/icons-material/StarRate'; // full
import StarHalfIcon from '@mui/icons-material/StarHalf'; // half
import StarOutlineIcon from '@mui/icons-material/StarOutline'; // empty

type Props = {
    rating: number,
    reviews: number
}

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#000',
    },
    '& .MuiRating-iconHover': {
        color: '#000',
    },
});

function Ratings(props: Props) {
    const { rating, reviews } = props
    const [value, setValue] = useState<number | null>(rating)

    return (
        <div className='flex gap-1'>
            <div>
                <StyledRating
                    name="item rating"
                    size="small"
                    // defaultValue={2}
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarOutlineIcon fontSize="inherit" />}
                />
            </div>
            <div>
                <p className="text-xs font-semibold text-gray-600">
                    ({reviews})</p>
            </div>
        </div>
    )
}

export default Ratings