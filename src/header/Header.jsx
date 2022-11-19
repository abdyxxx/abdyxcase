import { AppBar, Link, Toolbar, IconButton, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../imges/Logo2.jpeg'
import ShoppingBag from '@mui/icons-material/ShoppingBagOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from "react-router-dom";
import './header-style.css'
import MobileToolbar from './MobileToolbar/MobileToolbar';
import { useSelector } from 'react-redux';

export default function Header() {
  let cartItems = useSelector(state => state.cartAmounts ? state.cartAmounts.filter(item => !!item.count) : sessionStorage.cart ? JSON.parse(sessionStorage.cart).filter(item => !!item.count): [])
  let [showToolbar, setShowToolbar] = useState(false)
  console.log(cartItems)
  return (
    <AppBar component='header' sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', backgroundColor: '#e5e5e5', color: '#424141', position: 'relative', alignItems: 'center', boxShadow: '0 8px 15px' }}>
      <Toolbar sx={{ display: 'flex', width: '100%', fontSize: { md: '15px', lg: '20px', xl: '29px' }, fontWeight: { md: '600' }, marginRight: { lg: '25px' }, justifyContent: 'space-between' }}>
        <RouterLink to="/">
          <img src={logo} className='logo' />
        </RouterLink>
        <Box sx={{ width: '100%', display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', maxWidth: '1000px', alignItems: 'center', marginX: 'auto' }}>
          <Link mx={2} href='/' component='a' underline='none' color='inherit' align='center'>
            Каталог дизайнов
          </Link>
          <Link mx={2} href='/made-cases' component='a' underline='none' color='inherit' align='center'>
            Готовые чехлы
          </Link>
          <Link mx={2} href='#' component='a' underline='none' color='inherit' align='center'>
            Доставка
          </Link>
          <Link mx={2} href='#' component='a' underline='none' color='inherit' align='center'>
            FAQ
          </Link>
        </Box>

        <IconButton sx={{ height: 'max-content', marginLeft: { md: '30px', lg: '60px' }, display: { md: 'block', xs: 'none' } }}>
          <a href='#' target='_blank'>
            <TelegramIcon sx={{ fontSize: { md: '35px', lg: '50px' }, color: '#000', mt: '7px' }} />
          </a>
        </IconButton>
        <IconButton sx={{ height: 'max-content', marginLeft: '20px', display: { md: 'block', xs: 'none' } }}>
          <a href='https://www.instagram.com/abdyxcase/' target='_blank'>
            <InstagramIcon color='secondary' sx={{ fontSize: { md: '35px', lg: '50px' }, mt: '7px' }} />
          </a>
        </IconButton>
        <IconButton sx={{ padding: '0', display: { xs: 'block', md: 'none' } }} onClick={() => setShowToolbar(true)}>
          <MenuIcon sx={{ fontSize: '80px' }} />
        </IconButton>
      </Toolbar>

      <MobileToolbar showToolbar={showToolbar} setShowToolbar={setShowToolbar} />
      <RouterLink to='/cart'>
        <Box sx={{ position: 'relative' }}>
          <IconButton className='cart-btn' sx={{ position: 'relative', border: { xs: '5px solid black', md: 'none' }, height: 'max-content', backgroundColor: '#fff', position: { xs: 'fixed', md: 'inherit' }, right: '10px', bottom: '10px' }}>
            <Typography variant='h5' sx={{ top: '-12%', left: '-12%', position: 'absolute', borderRadius: '50%', backgroundColor: 'black', padding: '7px 14px', color: '#fff', fontWeight: '500' }}>{cartItems.reduce((prev, next) => prev + next.count, 0)}</Typography>
            <ShoppingBag color='secondary' sx={{ fontSize: { xs: '90px', md: '50px', lg: '75px' }, position: 'relative' }} />
          </IconButton>
        </Box>
      </RouterLink>
    </AppBar>
  )
}
