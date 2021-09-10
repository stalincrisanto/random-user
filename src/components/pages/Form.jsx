import React, { useState } from 'react'
import ItemUser from '../ItemUser';
import Title from '../Title';
import UserForm from '../UserForm';

const Form = () => {
    const initialState = {
        name: '',
        country: '',
        email: ''
    }

    const [user, setUser] = useState(initialState)

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    }

    return (
        <>
            <Title text="Ingresa tu usuario"/>
            <ItemUser user={user}/>
            <UserForm onChange={handleChange} user={user}/> 
        </>
    )
}

/**
export class Form extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            country: '',
            email: '',
            telefono: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <>
                <Title text="Ingresa tu usuario"/>
                <ItemUser user={this.state}/>
                <UserForm onChange={this.handleChange} user={this.state}/> 
            </>
        )
    }
}
**/
export default Form
