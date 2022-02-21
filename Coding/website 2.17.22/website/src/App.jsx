import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// note that I just downgraded to react-router-dom version 5.1.0 and it chagned the errors but still didnt fix it 
import "./App.css";

import Home from "./components/Home";
import Life from "./components/Life";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProdOps from "./components/ProdOps";
import RotationalProgram from './components/RotationalProgram';
import BITS from './components/BITS';
import Videos from './components/Videos';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/Work" element={<Work />} />
              <Route exact path="/Life" element={<Life />} />
              <Route exact path="/Projects" element={<Projects />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/ProdOps" element={<ProdOps />} />
              <Route exact path="/RotationalProgram" element={<RotationalProgram />} />
              <Route exact path="/BITS" element={<BITS />} />
              <Route exact path="/Videos" element={<Videos />} />

              {/* <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Work" component={Work} />
              <Route exact path="/Life" component={Life} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/ProdOps" component={ProdOps} />
              <Route exact path="/RotationalProgram" component={RotationalProgram} />
              <Route exact path="/BITS" component={BITS} />
              <Route exact path="/Videos" component={Videos} /> */}
              {/* <Route element={<Home />} /> */}
            </Routes>

      </div>
     </BrowserRouter>
 );
}

export default App;
