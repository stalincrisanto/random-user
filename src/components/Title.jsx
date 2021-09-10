import React from 'react';
import './styles/Title.css';
import PropTypes from 'prop-types';

const Title = ({ text = "Mi Título" }) => {
    return (
        <h1 className="title">{text}</h1>
    )
}

Title.propTypes = {
    text : PropTypes.string.isRequired
}

//default props
Title.defaultProps = {
    text : 'Mi título por defecto'
}

export default Title

//en const Title = ({ text = "Mi título" }) si no mando nada de App.jsx, sino uso proptypes