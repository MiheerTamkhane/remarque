import React from "react";
import { MyRoutes } from "./frontend/MyRoutes/MyRoutes";
import { Navbar, Footer } from "./frontend/components/componentsExport";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MyRoutes />
      <Footer />
    </div>
  );
};

export default App;
