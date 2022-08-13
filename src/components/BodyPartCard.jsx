import React from "react";
import GymImage from "../assets/icons/gym.png";

import { Box, Typography } from "@mui/material";

import { useExercisesContext } from "../providers/exerciseProvider";
import { fetchData, options } from "../utils/fetchData";

const ExerciseCard = ({ bodyPart }) => {
    const { setExercises } = useExercisesContext();

    const handleSearch = async () => {
        const allExercises = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises",
            options
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
        <Box
            m="10px"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "180px",
                height: "180px",
                backgroundColor: "#e6e6e6",
                cursor: "pointer",
                borderRadius: "10px",
                backgroundColor: "white",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
            onClick={handleSearch}
        >
            <img
                src={GymImage}
                alt="gym"
                style={{ width: "60px", height: "auto" }}
            />
            <Typography
                mt="10px"
                sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                }}
            >
                {bodyPart}
            </Typography>
        </Box>
    );
};

export default ExerciseCard;
