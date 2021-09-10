import React from 'react';
import { Box, Button, CircularProgress, Typography, TextField } from '@material-ui/core';
import Modal from '../Modal';
import SingleUser from '../SingleUser';
export const UserListView = ({onLoad, users, loading, error, onFilter}) => {

    return (
        <>
        <TextField label="Buscar" onChange={onFilter}/>
        {users.length === 0 ?
            (
                <Box align="center" height="100vh">
                    <Typography variant="h3">No se encontraron los datos</Typography>
                </Box>
            )
            :
            (
                <Box height="100%">
                    {users.map((item, index) => {
                    return <SingleUser key={index} {...item}/>
                    })}
                    <Box align="center">
                        <Button variant="contained" color="secondary" onClick={onLoad}>Cargar más</Button>
                    </Box>
                </Box>
            )
        }
        {error && <Typography align="center">{error}</Typography>}
        {loading && (<Modal><CircularProgress color="secondary"/></Modal>)}
        </>
    )
}
