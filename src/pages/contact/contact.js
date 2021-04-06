import React from "react";
import "./contact.css";
import { Jumbotron, Container, Col } from "reactstrap";
import Titlemini from "../../components/minititle/minititle";
import Mediabar from "../../components/mediabar/mediabar";

const Contact = () => (
    
  <Container className="trojan">
    <Titlemini />
    <Jumbotron className="harry" >
      <h2 > Contact us!</h2><br/>
      <h4 >
        To email us about bookings, merch, and tour dates:
      </h4><br/>
      <h5>
       citruslover.band@gmail.com
      </h5>
    </Jumbotron>
    <Mediabar />
  </Container>
);

export default Contact;
