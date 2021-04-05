import React from "react";

import Entry from "./pages/entry";
import Main from './components/main'

import ScrollToTop from './components/scroll/ScrollToTop'
// router--------

// styles-----------
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
      // <div className="App">
    

        <div className="Container">
        
          <header className="App-header"></header>
          {/* <Entry className="entry" /> */}
          <Main/>
        </div>
      // </div>
  );
}

export default App;
