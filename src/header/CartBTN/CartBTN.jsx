import React from 'react';
import ShoppingBag from '@mui/icons-material/ShoppingBagOutlined';

import { IconButton } from '@mui/material';

export default function CartBTN() {
    return (
        <Link to="/cart">
            <IconButton className='cart-btn' sx={{ height: 'max-content', backgroundColor: '#fff' }}>
                <ShoppingBag color='secondary' sx={{ fontSize: '75px' }} />
            </IconButton>
        </Link>
    )
}
