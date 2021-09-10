import React from 'react'
import { Container, Typography, Grid, Link, makeStyles } from '@material-ui/core'

const useStyles = makeStyles ((theme) => ({
    footer: {
        width: '100%',
        padding: '24px 0',
        background: theme.palette.primary.main,
        color: 'white',
    }
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className = {classes.footer}>
            <Container maxWidth="md">
                <Grid container align="center">
                    <Grid item xs = {12} sm={4}>
                        <Typography variant="h5">
                            <strong>Políticas del sitio</strong>
                        </Typography>
                        <br />
                        <Link href="#" color="inherit">
                            <Typography>
                                <strong>Políticas de privacidad</strong>
                            </Typography>
                        </Link>
                        <Link href="#" color="inherit">
                            <Typography>
                                <strong>Términos y condiciones</strong>
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs = {12} sm={4}>
                        <Typography variant="h5">
                            <strong>Servicios</strong>
                        </Typography>
                        <br />
                        <Link href="#" color="inherit">
                            <Typography>
                                <strong>Soporte</strong>
                            </Typography>
                        </Link>
                        <Link href="#" color="inherit">
                            <Typography>
                                <strong>Preguntas frecuentes</strong>
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs = {12} sm={4}>
                    <Typography variant="h5">
                            <strong>Contáctanos</strong>
                        </Typography>
                        <br />
                        <Link href="#" color="inherit">
                            <Typography>
                                <strong>0995077348</strong>
                            </Typography>
                        </Link>
                        <Link href="#" color="inherit">
                            <Typography>
                                <strong>stalin@correo.com</strong>
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
