import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{props.children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
