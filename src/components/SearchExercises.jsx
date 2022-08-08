import React, { useState } from "react";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchData, options } from "../utils/fetchData";

const SearchExercises = () => {
    const [searchedExercise, setSearchedExercise] = useState("");
    const [exercises, setExercises] = useState([]);

    const handleSearch = async () => {
        if (searchedExercise.length > 0) {
            const allExercises = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                options
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

    return (
        <Box>
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
                        marginBottom: "20px",
                        fontWeight: "bold",
                        fontSize: "26px",
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
                    <TextField
                        variant="outlined"
                        placeholder="Search for exercises"
                        value={searchedExercise}
                        onChange={(e) => setSearchedExercise(e.target.value)}
                        sx={{
                            width: "100%",
                        }}
                    />
                    <Button
                        variant="contained"
                        color="error"
                        sx={{
                            width: "200px",
                            height: "55px",
                        }}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default SearchExercises;
