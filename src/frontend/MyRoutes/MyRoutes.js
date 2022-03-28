import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotesPage, LandingPage, Login, Signup } from "../pages/pagesExport";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notespage" element={<NotesPage />} />
    </Routes>
  );
};

export { MyRoutes };
