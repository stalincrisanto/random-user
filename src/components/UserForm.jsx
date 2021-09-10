import { Box, Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/UserForm.css";

const UserForm = (props) => {
  const { name, country, email, telefono, id } = props.user;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", props.user);
      history.push("/list");
    } catch (error) {
      console.log(error);
    }
    console.log(props.user);
  };

  const handleEdit = async () => {
    try {
        await axios.put(`http://localhost:3000/users/${id}`, props.user);
        history.push("/list");
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div>
      <h2 className="title-form">Nuevo Usuario</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-form">
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            onChange={props.onChange}
            value={name}
          />
        </div>
        <div className="input-form">
          <label>Country: </label>
          <input
            type="text"
            name="country"
            onChange={props.onChange}
            value={country}
          />
        </div>
        <div className="input-form">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={props.onChange}
            value={email}
          />
        </div>
        <div className="input-form">
          <label>Teléfono: </label>
          <input
            type="text"
            name="telefono"
            onChange={props.onChange}
            value={telefono}
          />
        </div>
        <br />
        <Box align="center">
          {props.isEdit ? (
            <Button color="primary" variant="contained" onClick={handleEdit}>
              Editar
            </Button>
          ) : (
            <Button type="submit" color="primary" variant="contained">
              Crear
            </Button>
          )}
        </Box>
      </form>
    </div>
  );
};

export default UserForm;

/**handleChange = (e) => {
        //console.log(e.target.value)
        //Aquí cambio los estados del componente propio
        this.setState ({
            [e.target.name]: e.target.value,
            [e.target.country]: e.target.value,
            [e.target.email]: e.target.value,
        })
    }**/

//Un componente controlado (formulario) son manejados por un componente react es decir por el estado
//Si están manejados por el DOM los llamamos componentes no controlados.
//Form control para material UI, fullWidth propiedad para que ocupe todo el espacio un input
//const {name,country,email} = this.props.user;

//<button type="button" onClick={this.handleClick}>Agregar</button> es una forma para prevenir el evento de recargar la página
