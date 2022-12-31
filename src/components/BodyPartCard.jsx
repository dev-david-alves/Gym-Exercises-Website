import React from "react";
import DumbbellImage from "../assets/icons/dumbbell.png";

import { Box, Typography, Button } from "@mui/material";

import { useExercisesContext } from "../providers/exerciseProvider";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const ExerciseCard = ({ bodyPart }) => {
    const { setExercises } = useExercisesContext();

    const handleSearch = async () => {
        const allExercises = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises",
            exerciseOptions
        );

        const filteredExercises = allExercises.filter(
            (exercise) =>
                exercise.name.toLowerCase().includes(bodyPart.toLowerCase()) ||
                exercise.target
                    .toLowerCase()
                    .includes(bodyPart.toLowerCase()) ||
                exercise.equipment
                    .toLowerCase()
                    .includes(bodyPart.toLowerCase()) ||
                exercise.bodyPart.toLowerCase().includes(bodyPart.toLowerCase())
        );

        setExercises(filteredExercises);
    };

    return (
        <Button
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "150px",
                minHeight: "150px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
                margin: "0px 10px",
            }}
            onClick={handleSearch}
        >
            <img
                src={DumbbellImage}
                alt="gym"
                style={{ width: "40%", height: "auto" }}
            />
            <Typography
                mt="5px"
                sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#ffffff",
                }}
            >
                {bodyPart}
            </Typography>
        </Button>
    );
};

export default ExerciseCard;
