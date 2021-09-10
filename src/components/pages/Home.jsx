import React from 'react'
//import ItemUser from '../ItemUser';
import Title from '../Title';
import {  makeStyles, Box } from '@material-ui/core';
import { UserList } from '../containers/UserList';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: '24px 8px',
        height: '100%'
    }
})

export const Home = () => {

    const classes = useStyles();

    return (
        <Box className={classes.container}>
            {/* <Count /> */}
            <Title text="BIENVENIDO A RANDOM USER"/>
            <UserList></UserList>
            {/*<ItemUser user={data}/>*/}
        </Box>
    )
}
