import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
  }
});

const SingleUser = ({ picture, name, location, email, phone }) => {
  
    const classes = useStyle();

  return (
    <Card className={classes.cardUser}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image={picture.large}
        title="Imagen de usaurio"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">
          <strong>Nombre: </strong> {`${name.title} ${name.first} ${name.last}`}
        </Typography>
        <Typography variant="body1">
          <strong>País: </strong> {location.country}
        </Typography>
        <Typography variant="body1">
          <strong>Email: </strong> {email}
        </Typography>
        <Typography variant="body1">
          <strong>Teléfono: </strong> {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};

SingleUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    coutry: PropTypes.string,
    email: PropTypes.string,
  }),
};

SingleUser.defaultProps = {
  user: {
    name: "Mi nombre por defecto",
    coutry: "País por defecto",
    email: "Email por defecto",
  },
};

export default SingleUser;
