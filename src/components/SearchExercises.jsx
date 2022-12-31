import React, { useState, useEffect } from "react";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

import BodyPartCard from "./BodyPartCard";

import { useExercisesContext } from "../providers/exerciseProvider";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SearchExercises = () => {
    const [searchedExercise, setSearchedExercise] = useState("");

    const { setExercises, exercises, bodyParts } = useExercisesContext();

    const handleSearch = async () => {
        if (searchedExercise.length > 0) {
            const allExercises = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOptions
            );
            const filteredExercises = allExercises.filter(
                (exercise) =>
                    exercise.name
                        .toLowerCase()
                        .includes(searchedExercise.toLowerCase()) ||
                    exercise.target
                        .toLowerCase()
                        .includes(searchedExercise.toLowerCase()) ||
                    exercise.equipment
                        .toLowerCase()
                        .includes(searchedExercise.toLowerCase()) ||
                    exercise.bodyPart
                        .toLowerCase()
                        .includes(searchedExercise.toLowerCase())
            );

            setExercises(filteredExercises);
            setSearchedExercise("");
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 900,
            behavior: "smooth",
        });
    }, [exercises]);

    return (
        <Box id="exercises-section">
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        marginTop: { xs: "20px", lg: "0px" },
                        marginBottom: { xs: "15px", lg: "20px" },
                        fontWeight: "bold",
                        fontSize: { xs: "16px", lg: "26px" },
                        color: "#ffffff",
                    }}
                >
                    The best place to find good exercises for you.
                </Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        width: "80%",
                    }}
                >
                    <input
                        placeholder="Search for exercises"
                        type="text"
                        value={searchedExercise}
                        onChange={(e) => setSearchedExercise(e.target.value)}
                        style={{
                            color: "#ffffff",
                            background: "transparent",
                            width: "100%",
                            height: "40px",
                            fontSize: "16px",
                            outline: "none",
                            border: "2px solid #ffffff",
                            borderRadius: "20px 0px 0px 20px",
                            padding: "0px 20px",
                        }}
                    />
                    <Button
                        variant="contained"
                        color="error"
                        sx={{
                            width: "200px",
                            height: "40px",
                            borderRadius: "0px 20px 20px 0px",
                            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                            border: "2px solid #ffffff",
                            borderLeft: "none",
                        }}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Stack>
            </Stack>
            {!bodyParts.length ? (
                <Loader />
            ) : (
                <HorizontalScrollBar length={bodyParts.length}>
                    {bodyParts.map((bodyPart) => (
                        <BodyPartCard key={bodyPart} bodyPart={bodyPart} />
                    ))}
                </HorizontalScrollBar>
            )}
        </Box>
    );
};

export default SearchExercises;
