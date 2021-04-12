import React, { Suspense, lazy } from "react";
import { Container} from "reactstrap";
import Loading from "../../components/loading/loading";
import Titlemini from "../../components/minititle/minititle";
import Midwaytitle from "../../components/midwaytitle/midwaytitle";
import Mediabar from "../../components/mediabar/mediabar";

const Gallery = lazy(() => import("../../components/gallery/gallery"))

const Bio = (props) => (
  <Container >
  <Suspense fallback={<Loading />}>
    <Titlemini />
    
    <Gallery />
    
    <Midwaytitle />
    <Mediabar />
    </Suspense>
  </Container>
);

export default Bio;
