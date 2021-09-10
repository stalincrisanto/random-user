import React, { useState } from "react";
import "./styles/ItemUser.css";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Button,
  Box,
  Modal,
  Paper
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles({
  cardUser: {
    maxWidth: 500,
    margin: "8px auto",
    display: "flex",
    alignItems: "center",
  },
  cardMedia: {
    flex: 1,
  },
  cardContent: {
    flex: 2,
  },
  actions: {
    display:'flex',
    justifyContent: 'space-around'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  confirm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '20%',
    width: '30%'
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%'
  }
});

const ItemUser = (props) => {
  const { name, country, email, telefono, id } = props.user;
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  }

  const handleModal = () => {
    setOpen(true);
  }

  return (
    <Card className={classes.cardUser}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image="/logo192.png"
        title="Imagen de usaurio"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">
          <strong>Nombre: </strong> {name}
        </Typography>
        <Typography variant="body1">
          <strong>País: </strong> {country}
        </Typography>
        <Typography variant="body1">
          <strong>Email: </strong> {email}
        </Typography>
        <Typography variant="body1">
          <strong>Teléfono: </strong> {telefono}
        </Typography>
        {
          <Box className={classes.actions}>
            {props.isEdit && (
              <Button component={Link} to={`/edit/${id}`} variant="contained">
                Editar
              </Button>
            )}
            {props.isDelete && (
              <Button variant="contained" color="secondary" onClick={handleModal}>
                Elminar
              </Button>
            )}
          </Box>
        }
      </CardContent>
      <Modal open={open} className={classes.modal}>
        <Paper className={classes.confirm}>
          <Typography>Está seguro de eliminar este usuario?</Typography>
          <Box className={classes.modalActions}>
            <Button variant="contained" color="primary" onClick={handleDelete}>Aceptar</Button>
            <Button variant="contained" color="primary" onClick={()=>setOpen(false)}>Cancelar</Button>
          </Box>
        </Paper>
      </Modal>
    </Card>
  );
};

ItemUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    coutry: PropTypes.string,
    email: PropTypes.string,
  }),
};

ItemUser.defaultProps = {
  user: {
    name: "Mi nombre por defecto",
    coutry: "País por defecto",
    email: "Email por defecto",
  },
};

export default ItemUser;
