import React, { useEffect, useState } from "react";
import ItemUser from "../ItemUser";
import Title from "../Title";
import UserForm from "../UserForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const initialState = {
    name: "",
    country: "",
    email: "",
  };

  const [user, setUser] = useState(initialState);
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      const { data } = response;
      setUser(data);
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Title text="Edita un usuario" />
      <ItemUser user={user} />
      <UserForm onChange={handleChange} user={user} isEdit/>
    </>
  );
};

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
export default Edit;
