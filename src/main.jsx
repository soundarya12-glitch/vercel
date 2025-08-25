import { StrictMode } from "react";
import React from 'react'
import { createRoot } from "react-dom/client";
import './index.css'; 
import { MantineProvider } from '@mantine/core';
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>
);
