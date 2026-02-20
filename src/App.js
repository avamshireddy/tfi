import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Quiz from "./Quiz";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Quiz Page (Protected) */}
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;