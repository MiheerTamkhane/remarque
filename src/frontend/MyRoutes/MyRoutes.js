import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/pagesExport";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export { MyRoutes };
