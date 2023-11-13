//Navigation on Click

import React from "react";
import Router0004 from "./Router0004";
import Router00004 from "./Router00004";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Buttonlist from "./buttonlist";

function Router004() {

  return (
    <div className="App">
      <BrowserRouter>
      <Buttonlist/>

        <Routes>
        
          {/* <Route path="/" element={<Buttonlist />} /> */}
          
          <Route path="/router0004" element={<Router0004 />} />
          <Route path="/router00004" element={<Router00004 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router004;