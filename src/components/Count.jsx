import React from 'react'
import { useCounter } from '../hooks/useCounter';
import './styles/UserCount.css';

const Count = () => {

    const { count, handleAdd, handleSubstract } = useCounter(0)

    /**
     * , { useState, useEffect }
     * 
    const [ count, setCount ] = useState(0);

    useEffect(() => {
       console.log('El estado ha cambiado'); 
    }, [count])

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {
        setCount(count - 1);
    }
    **/
    return (
        <div className = "count">
            <h2>Contador de usuarios</h2>
            <h3>{count}</h3>
            <button onClick = {handleAdd}>Aumentar</button>
            <button onClick = {handleSubstract}>Disminuir</button>
        </div> 
    )
}

export default Count
