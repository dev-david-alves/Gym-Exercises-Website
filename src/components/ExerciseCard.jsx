import React from "react";
import { Link } from "react-router-dom";

import { Stack, Typography, Button } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
    return (
        <Link
            to={`/exercises/${exercise.id}`}
            style={{ textDecoration: "none", color: "#000000" }}
        >
            <Stack
                width="300px"
                height="460px"
                p="10px"
                textAlign="center"
                alignItems="center"
                sx={{
                    borderRadius: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        backgroundColor: "#191D21",
                    },
                }}
            >
                <img
                    src={exercise.gifUrl}
                    alt={exercise.name}
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px",
                    }}
                />
                <Typography
                    variant="h5"
                    m="20px"
                    sx={{
                        fontSize: "16px",
                        color: "#ffffff",
                        width: "250px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {exercise.name}
                </Typography>
                <Stack
                    width="80%"
                    spacing="2"
                    alignItems="center"
                    justifyContent="space-between"
                    direction="column"
                    gap="10px"
                >
                    <Button
                        variant="outlined"
                        width="100%"
                        height="30px"
                        sx={{
                            fontSize: "14x",
                            color: "#ffffff",
                            width: "100%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {exercise.target}
                    </Button>
                    <Button
                        variant="outlined"
                        width="100%"
                        height="30px"
                        color="warning"
                        sx={{
                            fontSize: "14x",
                            color: "#ffffff",
                            width: "100%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {exercise.equipment}
                    </Button>
                </Stack>
            </Stack>
        </Link>
    );
};

export default ExerciseCard;
