import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotesPage, LandingPage, Login, Signup } from "../pages/pagesExport";
import Mockman from "mockman-js";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notespage" element={<NotesPage />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};

export { MyRoutes };
