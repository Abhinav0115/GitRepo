import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
    return (
        <Container
            fluid
            tag="footer"
            className="text-center m-0  bg-success HeadFootBG text-white text-uppercase sticky-bottom p-3"
        >
            GitHub Repository search app build using{" "}
            <span className="text-warning">React & firebase</span>
        </Container>
    );
};

export default Footer;
