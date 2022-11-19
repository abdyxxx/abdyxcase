import React, { useEffect, useState } from 'react'
import { Button, Card, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import getItems from '../../firebase'
import { flexbox } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import '../main-style.css'
import { addToCart, setItemsToDispatch, setInitialCartState } from '../../redux/cartSlice'

function ProductsList() {
    let productsState = useSelector(state => state.productListItems)
    let dispatch = useDispatch();
    return (
        <Grid container spacing={8} className='items' justifyContent="center" sx={{ paddingBottom: {lg: '60px', xs: '30px'} }}>
            {productsState ? productsState.map((item) =>
            (<Grid item key={item.id}>
                <Card image={`./images/${item.img}`} sx={{ height: '100%', width: {sx: '400px', md: '500px'}, display: flexbox, backgroundColor: '#d9d9d9', borderRadius: '9px', alignItems: 'center' }}>
                    <img src={`images/${item.img}`} className='item__img' />
                    <Typography variant="h3" mb={3} fontWeight='600' sx={{ padding: '20px 20px 0' }}>
                        {item.name}
                    </Typography>
                    <Typography variant="h5" mb={2} fontWeight='500' sx={{ paddingX: '20px' }}>
                        {item.descr}
                    </Typography>
                    <Button onClick={() => dispatch(addToCart(item))} color='secondary' className='item__btn' sx={{ p: '10px 20px', fontSize: '22px', margin: '6px auto', backgroundColor: '#fff', display: 'block', border: 'none' }}>
                        Добавить
                    </Button>
                </Card>
            </Grid>)
            ) : <Typography variant='h4' mt={10}>LOADING...</Typography>}

        </Grid>
    )
}

export default ProductsList