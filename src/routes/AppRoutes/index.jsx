
// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import TemplateSelectionPage from '../../pages/TemplateSelectionPage';
import BuildResumePage from '../../pages/BuildResumePage';
import HeaderInputPage from '../../pages/HeaderInputPage';
// Import ProtectedRoute component for authentication
import ProtectedRoute from '../../Components/Layout/ProtectedRoute';
import Practice from '../../pages/Practice';
// --- Crucial: AppRoutes destructures handleChooseTemplate from its props ---
const AppRoutes = ({ navigate, handleChooseTemplate, selectedTemplateId, isSidebarOpen }) => {
// --- End Crucial ---
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* --- Crucial: handleChooseTemplate is passed as onChooseTemplate to TemplateSelectionPage --- */}
      <Route path="/templates" element={<TemplateSelectionPage onChooseTemplate={handleChooseTemplate} />} /> {/* <--- Passed here */}
      {/* --- End Crucial --- */}
      <Route path="/build-resume" element={<BuildResumePage onNavigate={navigate} />} />
      <Route path="/practice" element={<Practice />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/header-input"
          element={
            <HeaderInputPage
              onNavigate={navigate}
              isSidebarOpen={isSidebarOpen}
            />
          }
        />
      </Route>

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;