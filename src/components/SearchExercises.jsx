import React, { useState } from "react";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";

const SearchExercises = () => {
    const [exercise, setExercise] = useState("");

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
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
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
                    >
                        Search
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default SearchExercises;
