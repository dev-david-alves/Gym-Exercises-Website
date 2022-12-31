import React, { useState, useEffect } from "react";
import { Stack, Typography, Pagination } from "@mui/material";

import { useExercisesContext } from "../providers/exerciseProvider";
import ExerciseCard from "./ExerciseCard";

const CardSection = () => {
    const pageValue = 1;
    const itemsPerPage = 8;

    let end = pageValue * itemsPerPage;
    let start = end - itemsPerPage;

    const { exercises } = useExercisesContext();
    const [shownExercises, setShownExercises] = useState([]);

    useEffect(() => {
        setShownExercises(exercises.slice(start, end));
    }, [exercises]);

    const handleChange = (event, value) => {
        end = value * itemsPerPage;
        start = end - itemsPerPage;
        setShownExercises(exercises.slice(start, end));
    };

    return (
        <Stack alignItems="center" justifyContent="center" my="30px">
            <Typography
                variant="h3"
                sx={{
                    fontSize: { xs: "20px", lg: "30px" },
                    marginBottom: { xs: "15px", lg: "30px" },
                    fontWeight: "bold",
                    color: "#ffffff",
                }}
                textAlign="center"
            >
                Here is the best exercises for your workout:{" "}
                <span style={{ color: "red" }}>{exercises.length} </span>
                results Found
            </Typography>

            <Stack
                alignItems="start"
                justifyContent="center"
                direction="row"
                sx={{
                    flexWrap: "wrap",
                    gap: "20px",
                }}
                p="0 30px"
                mb="30px"
            >
                {shownExercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </Stack>
            <Pagination
                count={Math.ceil(exercises.length / itemsPerPage)}
                size="large"
                onChange={handleChange}
                color="primary"
                variant="outlined"
            />
        </Stack>
    );
};

export default CardSection;
