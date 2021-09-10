import React, { useState, useEffect } from 'react'
//import userList from '../../data';
import ItemUser from '../ItemUser';
import Title from '../Title';
import axios from 'axios';

const List = () => {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            const { data } = response;
            setUsers(data);
            //console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Title text="Lista de usuarios"/>
            {users.map((item,index) => {
                return <ItemUser key={index} user={item} isEdit isDelete/>
            })}
        </>
    )
}

export default List;

/**
 
export class List extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            users: userList
        }
    }
    
    render() {
        return (
            <>
                <Title text="Lista de usuarios"/>
                {this.state.users.map((item,index) => {
                    return <ItemUser key={index} user={item} />
                })}
            </>
        )
    }
}

export default List

**/
