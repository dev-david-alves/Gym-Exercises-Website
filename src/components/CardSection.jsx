import React from "react";
import { Stack, Typography } from "@mui/material";

import { useExercisesContext } from "../providers/exerciseProvider";
import ExerciseCard from "./ExerciseCard";

const CardSection = () => {
    const { exercises } = useExercisesContext();

    return (
        <Stack alignItems="center" justifyContent="center" mt="50px">
            <Typography
                variant="h3"
                sx={{
                    marginBottom: "50px",
                    fontWeight: "bold",
                    fontSize: "30px",
                }}
            >
                Here is the best exercises for your workout: {exercises.length}{" "}
                results Found
            </Typography>

            <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
                sx={{
                    flexWrap: "wrap",
                    gap: "20px",
                }}
            >
                {exercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </Stack>
        </Stack>
    );
};

export default CardSection;
