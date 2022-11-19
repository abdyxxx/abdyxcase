import { Container, Grid, Typography, Button, MenuItem } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header/Header'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './cart-style.css'
import { addToCart, removeToCart } from '../redux/cartSlice'
import CartSelect from './CartSelect/CartSelect'

function Cart() {
    let cartItems = useSelector(state => state.cartAmounts ? state.cartAmounts.filter(item => !!item.count) : JSON.parse(sessionStorage.cart).filter(item => !!item.count))
    let cartAmounts = useSelector(state => state.cartAmounts)
    let products = useSelector(state => state.productsData)
    let price = useSelector(state => state.price)
    let dispatch = useDispatch()
    console.log(cartAmounts)
    console.log(products)
    return (
        <>
            <Header />
            <Container className='main__wrapper' sx={{ backgroundColor: '#fff', pt: '50px', minHeight: '85vh', textAlign: 'center' }}>
                {cartItems[0] && products ?
                    <>
                        <Stack>
                            {cartItems.map(item => {
                                let itemData = products.filter(product => product.id === item.id)[0];
                                return (
                                    <div key={item.id} className='cart__table'>
                                        <div className='cart__field cart__img'><img src={`images/${itemData.img}`} className='cartItem__img' /></div>
                                        <div className='cart__field cart__name'>{itemData.name}<br /><span className='model'>{itemData.model ? ' на ' + itemData.model : ''}</span></div>

                                        <div className='cart__field cart__count'>
                                            <div className='cart__button cart__button_remove' onClick={() => dispatch(removeToCart(item))}>
                                                <RemoveIcon />
                                            </div>
                                            {item.count}
                                            <div className='cart__button cart__button_add' onClick={() => dispatch(addToCart(item))}>
                                                <AddIcon />
                                            </div>
                                        </div>
                                        <div className='cart__field'>{itemData.model ? null : <CartSelect />}</div>
                                        <div className='cart__field cart__price'>{price * item.count} ₸</div>
                                    </div>
                                )
                            })}
                        </Stack>
                        <Box className='cart__sum' mt={4}>
                            <Typography variant="h4" color="initial" mb={4} className='cart__sum-graph' sx={{ fontSize: { xs: '1.5em', md: '2.5em' } }}>
                                Сумма <span className='cart__sum-value'>{cartItems.length > 1 ? cartItems.reduce((prev, current) => prev + current.count, 0) * price : cartItems[0].count * price}</span>₸
                            </Typography>
                            <Button variant="contained" color="secondary" className='cart__order-button' fontSize='lg'>
                                Оформить заказ
                            </Button>
                        </Box>
                    </>
                    : <Typography variant='h2' pt={5}>
                        Корзина пуста
                    </Typography>}
            </Container>
        </>
    )
}


export default Cart