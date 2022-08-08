import { Box } from "@mui/system";
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Box>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercises/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    );
};

export default App;
