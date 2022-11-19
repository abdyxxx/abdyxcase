import { AppBar, Link, Toolbar, IconButton, Box } from '@mui/material'
import React from 'react'
import logo from '../../imges/Logo2.jpeg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import paint from '../../imges/paint.png'
import ClearIcon from '@mui/icons-material/Clear';
import '../header-style.css'

export default function MobileToolbar({showToolbar, setShowToolbar}) {
    let opacityToolbar = showToolbar ? '1' : '0'
    let displayToolbar = showToolbar ? 'flex' : 'none'
    return (
        <Box className='toolbar-modale' sx={{ display: displayToolbar, opacity: opacityToolbar, backgroundImage: `url(${'paint'})`, zIndex: '1111', alignItems: 'start', backgroundPosition: { xs: '29% 55%', sm: '2% 9%' }, position: 'fixed', top: '0%', boxSizing: 'border-box', height: '100vh', width: '100%', backgroundColor: 'rgb(229, 229, 229)' }}>
            <Toolbar onClick={null} sx={{ backgroundSize: { xs: '329%', sm: '229%' }, padding: 0, flexDirection: 'column', gap: '5vh', width: '100%', fontWeight: '600', fontSize: '1.8em', justifyContent: 'space-between', alignItems: 'center' }}>
                <ClearIcon sx={{ fontSize: '60px', alignSelf: 'end', cursor: 'pointer'}} onClick={() => setShowToolbar(false)}/>
                <img src={logo} className='logo_mobile_toolbar' />
                <Link mx={2} href='/' component='a' underline='none' color='#000' align='center' sx={{ width: '100%' }}>
                    Каталог дизайнов
                </Link>
                <Link mx={2} href='#' component='a' underline='none' color='#000' align='center'>
                    Готовые чехлы
                </Link>
                <Link mx={2} href='#' component='a' underline='none' color='#000' align='center'>
                    Доставка
                </Link>
                <Link mx={2} href='#' component='a' underline='none' color='#000' align='center'>
                    FAQ
                </Link>
                <Box sx={{ display: 'flex', gap: '15px' }}>
                    <IconButton sx={{ height: '80px', width: '80px', backgroundColor: '#fff' }}>
                        <a href='#' target='_blank'>
                            <TelegramIcon sx={{ fontSize: '50px', color: '#000', mt: '7px' }} />
                        </a>
                    </IconButton>
                    <IconButton sx={{ height: '80px', width: '80px', backgroundColor: '#fff' }}>
                        <a href='https://www.instagram.com/abdyxcase/' target='_blank'>
                            <InstagramIcon color='secondary' sx={{ fontSize: '50px', mt: '7px' }} />
                        </a>
                    </IconButton>
                </Box>
            </Toolbar>
        </Box>
    )
}
