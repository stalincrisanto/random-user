import React from 'react'
import { useParams } from 'react-router';
import ItemUser from '../ItemUser';
import userList from '../../data';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: '24px 8px',
        height: '70vh'
    }
})

export const User = () => {
    
    const {id} = useParams();
    const singleUser = userList.find((user) => user.id === id);
    
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <ItemUser user = {singleUser}/>
        </Box>
    )
}
