import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotesPage, LandingPage, Login, Signup } from "../pages/pagesExport";
import { ProtectedRoute } from "../protectedRoute/ProtectedRoute";
import { useAuth } from "../contexts/contextExport";
import Mockman from "mockman-js";
const MyRoutes = () => {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mock" element={<Mockman />} />

      {!auth.status && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}

      <Route
        path="/notespage"
        element={
          <ProtectedRoute>
            <NotesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export { MyRoutes };
