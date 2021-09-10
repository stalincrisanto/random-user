import React from 'react'
import {AppBar, Toolbar, IconButton, Container, Link, makeStyles} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../image/logo512.png'

const useStyle = makeStyles ({
    menu: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
})

const Header = () => {

    const classes = useStyle();

    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar className={classes.menu}>
                    <IconButton component={RouterLink} to="/" edge="start" onClick={() => window.location.reload()}>
                        <img src={Logo} alt="Logo" height="30px"/> 
                    </IconButton>
                    {/*
                    <RouterLink to="/">
                        Inicio
                    </RouterLink>
                    <RouterLink to="/form">
                        Formulario
                    </RouterLink>
                    <RouterLink to="/list">
                        Lista
                    </RouterLink>
                    
                    
                    <Link component={RouterLink} to="/" color="inherit">
                        Inicio
                    </Link>
                    {/*
                    <Link component={RouterLink} to="/form" color="inherit">
                        Formulario
                    </Link>
                    <Link component={RouterLink} to="/list" color="inherit">
                        Lista de usuarios
                    </Link>
                    */}
                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
