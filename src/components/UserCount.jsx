import React, { Component } from 'react'
import './styles/UserCount.css'
//los eventos tienen que ser de manera declarativa, debemos indicar dos cosas, el tipo de evento, luego el 
//manejador de eventos.
export class UserCount extends Component {
    
    //ESTADO DEL COMPONENTE
    /**
     * Los mismo componentes generan o administran info para poder pasarla a otros componente hijo
     * esos son los estados que es un objeto
    **/

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            text: 'Mi estado inicial'
        }
    }

    //OJO AQUI USO FUNCION FLECHA PORQUE SI FUESE EN FUNCION NORMAL, EL this no me hace referencia a todo el contexto
    //OJO AQUI ES  +1 por qué no ++
    handleAdd = () => {
        this.setState({
            count: this.state.count +1
        })
    }

    handleSubstract = () => {
        this.setState({
            count: this.state.count -1
        })
    }
    
    render() {
        return (
            <div className = "count">
                <h2>Contador de usuarios</h2>
                <h3>{this.state.count}</h3>
                <h3>{this.state.text}</h3>
                <button onClick = {this.handleAdd}>Aumentar</button>
                <button onClick = {this.handleSubstract}>Disminuir</button>
            </div>
        )
    }
}

export default UserCount
