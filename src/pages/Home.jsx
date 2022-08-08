import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import WelcomeSection from "../components/WelcomeSection";
import SearchExercises from "../components/SearchExercises";
import CardSection from "../components/CardSection";

import { ExerciseProvider } from "../providers/exerciseProvider";

import { fetchData, options } from "../utils/fetchData";

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchBodyParts = async () => {
            const bodyPartsList = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                options
            );

            setBodyParts(["all", ...bodyPartsList]);
        };

        fetchBodyParts();
    }, []);

    return (
        <Box>
            <WelcomeSection />

            <ExerciseProvider
                exercises={exercises}
                setExercises={setExercises}
                bodyParts={bodyParts}
                setBodyParts={setBodyParts}
            >
                <SearchExercises />
                {exercises.length > 0 && <CardSection />}
            </ExerciseProvider>
        </Box>
    );
};

export default Home;
