import React from "react";
import './minititle.css'
import { Row, Col} from "reactstrap";

import { Link} from "react-router-dom";

function Titlemini() {
  return (
    <Row>
    <Col>
      <br/>
          <Link to="/"><p className="titulojr">Citrus Lover</p></Link></Col>
    </Row>
  );
}

export default Titlemini;
