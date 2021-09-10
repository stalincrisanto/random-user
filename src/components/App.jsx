import React, { Component } from 'react'
import Layout from '../layout/Layout';
import Form from './pages/Form';
import { Home } from './pages/Home';
import List from './pages/List';

/** 
import Title from './Title';
import ItemUser from './ItemUser';
import UserForm from './UserForm';
import userList from '../data';
import { Box, Button, Switch } from '@material-ui/core'

import Header from './Header';
import Footer from './Footer';
**/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { User } from './pages/User';
import Edit from './pages/Edit';

export class App extends Component {
    
    //El estado siempre espera que sea un objeto
    /** 
    constructor(props){
        super(props);
        //this.state = userList
        //this.state = {
        //    users: userList
        //}
        this.state = {
            name: 'Stalin Crisanto',
            country: 'Ecuador',
            email: 'socrisanto@hotmail.com',
            telefono: '0995077348'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }**/
    
    render() {
        //el index estoy utilizando como key
        return (
            <>
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/list" component={List} />
                            <Route exact path="/form" component={Form} />
                            <Route exact path="/user/:id" component={User}/>
                            <Route exact path="/edit/:id" component={Edit}/>
                        </Switch>
                    </Layout>
                </Router>
            </>
        )
    }
}

export default App


//en title <Title /> puedo mandar por defecto text = "Título" pero si no hago eso, utilizo props
//otra cosa es que en el componente como tal tendría que enviar por defecto 

//<UserForm onChange = {this.handleChange}/> ==> aquí pongo onChange pero no es evento de HTML, puede ser cualqueir nombre
//es como mandar una propiedad, y ahí codifico el manejador handle

/**
                <Header></Header>
                <ItemUser user = {this.state}></ItemUser>
                
                <Title text = "Lista de usuarios"/>
                {
                    this.state.users.map((item, index)=>{
                        return (
                            <ItemUser key={index} user = {item}/>
                        )
                    })
                }
                <UserForm onChange = {this.handleChange} user={this.state}/>
                
                <Box align="center">
                    <Switch onChange = {() => alert("Soy un switch")}></Switch>
                    <Button variant="contained" color="secondary">Cargas más</Button><br/><br/><br/>
                </Box>
                
                <Footer></Footer>
                **/