import React from "react";

import { Stack, Typography, Button } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
    return (
        <Stack
            width="300px"
            height="500px"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            sx={{
                borderRadius: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <img
                src={exercise.gifUrl}
                alt={exercise.name}
                style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                    margin: "0",
                }}
            />
            <Typography
                variant="h5"
                mt="20px"
                sx={{
                    marginBottom: "20px",
                    fontSize: "20px",
                }}
            >
                {exercise.name}
            </Typography>
            <Stack
                spacing="2"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    gap: "10px",
                }}
            >
                <Button variant="contained" color="error" size="small">
                    {exercise.target}
                </Button>
                <Button variant="contained" color="primary" size="small">
                    {exercise.equipment}
                </Button>
            </Stack>
        </Stack>
    );
};

export default ExerciseCard;
