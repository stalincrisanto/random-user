import React from "react";
import ReactDom from "react-dom";
import App from './components/App';
import './global.css'

//const element = <h1>Mi app en React</h1>

const container = document.getElementById("root");

//DOM solo permite mostrar uno, uso fragment para encapsular
//ReactDom.render(<ItemUser/>,container); para la primera muestra
ReactDom.render(
  <App/>,
  container
);
