import React from "react";
import GlobalStyle from "./global";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/DefaultPage';
import NuevoVideo from './paginas/NuevoVideo';
import NuevaCategoria from './paginas/NuevaCategoria';
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/nuevovideo" element={<NuevoVideo />}></Route>
          <Route path="/nuevacategoria" element={<NuevaCategoria />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;