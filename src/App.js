import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

const App = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
