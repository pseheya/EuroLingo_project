import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./Component_tree/Header";
import { Home } from "./Component_tree/Home";
import { About } from "./Component_tree/About_us";
import { defaultSystem } from "@chakra-ui/react/preset";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./root.css";
import TechList from "./Component_tree/TechList";
import Game from "./Component_tree/Game";

const App: React.FC = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/tech-list" element={<TechList />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
