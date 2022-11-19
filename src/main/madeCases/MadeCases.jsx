import { Box, Container } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import '../main-style.css'
import Header from '../../header/Header'
import MadeCasesList from './MadeCasesList'

export default function MadeCases() {
    return (
        <>
            <Header />
            <Container className='main__wrapper' sx={{ backgroundColor: '#fff', pt: '50px', minHeight: '90vh', paddingBottom: {lg: '60px', xs: '30px'} }}>
                {/* <Box pb={5}>
                    <Typography variant='h2' align='center' className='headline' sx={{ fontWeight: '700', fontSize: {xs: '50px', md: '60px'} }}>
                        Не просто чехлы
                    </Typography>
                </Box>
                <Box className='main__description' mb={8}>
                    <Typography variant="h4" color="initial" align='center' sx={{ fontWeight: '600', fontSize: {xs: '23px', md: '40px'} }}>
                        Это кейсы <span className='handmade_label'>ручной работы</span>, на основе прозрачных силиконовых кейсов,
                        доведенных до красоты руками <del>детей</del> мастера. Все детали надежно покрыты специальной эпоксидной смолой.
                    </Typography>
                    <Typography mt={4} variant="h5" color="grey" align='center' sx={{ fontWeight: '600', fontSize: {xs: '18px', md: '30px'} }}>
                        Вы можете выбрать из уже готовых работ или оформить заказ выбрав дизайн и модель своего телефона
                    </Typography>
                </Box> */}
                <MadeCasesList />
            </Container>
        </>
    )
}
