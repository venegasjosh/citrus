import React from 'react'
import { Container} from "reactstrap";
import Titlemini from "../../components/minititle/minititle";
import Midwaytitle from "../../components/midwaytitle/midwaytitle";
import Mediabar from "../../components/mediabar/mediabar";
import Gallery from "../../components/gallery/gallery";

const Bio = (props) => (
  <Container >
    <Titlemini />
    <Gallery />
    <Midwaytitle />
    <Mediabar />
  </Container>
);

export default Bio;
