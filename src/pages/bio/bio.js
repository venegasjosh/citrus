import React, { Suspense, lazy } from "react";
import { Container} from "reactstrap";
import Loading from "../../components/loading/loading";
import Titlemini from "../../components/minititle/minititle";
import Midwaytitle from "../../components/midwaytitle/midwaytitle";
import Mediabar from "../../components/mediabar/mediabar";
import "./bio.css"
const Gallery = lazy(() => import("../../components/gallery/gallery"))

const Bio = (props) => (
   <div fluid className="sam"> 
  <Suspense fallback={<Loading />}>
    <Titlemini />
    
    <Gallery />
    <Midwaytitle />
    <Mediabar />
    </Suspense>
  </div> 
);

export default Bio;
