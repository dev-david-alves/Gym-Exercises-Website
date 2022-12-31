import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const SimilarExercises = ({ target, equipment }) => {
    const [similarTargetExercises, setSimilarTargetExercises] = useState([]);
    const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState(
        []
    );

    useEffect(() => {
        const getData = async () => {
            let exDbUrl = `https://exercisedb.p.rapidapi.com/exercises/target/${target}`;
            const similarTarget = await fetchData(exDbUrl, exerciseOptions);
            setSimilarTargetExercises(similarTarget);

            exDbUrl = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`;
            const similarEquipment = await fetchData(exDbUrl, exerciseOptions);
            setSimilarEquipmentExercises(similarEquipment);
        };

        getData();
    }, [target, equipment]);

    return (
        <Box
            gap="12px"
            width="100%"
            my="30px"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
            }}
        >
            {!similarTargetExercises.length ? (
                <Loader />
            ) : (
                <>
                    <Typography
                        variant="h3"
                        mt="30px"
                        ml="50px"
                        sx={{
                            marginTop: "10px",
                            fontWeight: "bold",
                            fontSize: "22px",
                            color: "#ffffff",
                            cursor: "default",
                            "&:hover": {
                                opacity: "0.6",
                            },
                        }}
                    >
                        Similar exercises targeting the{" "}
                        <span
                            style={{
                                color: "red",
                                textTransform: "capitalize",
                            }}
                        >
                            {target}{" "}
                        </span>
                    </Typography>
                    <Box width="100%">
                        {similarTargetExercises && (
                            <HorizontalScrollBar
                                length={
                                    similarTargetExercises.slice(0, 50).length
                                }
                            >
                                {similarTargetExercises
                                    .slice(0, 50)
                                    .map((exercise, key) => (
                                        <div
                                            style={{ marginRight: "20px" }}
                                            key={key}
                                        >
                                            <ExerciseCard
                                                key={exercise.id}
                                                exercise={exercise}
                                            />
                                        </div>
                                    ))}
                            </HorizontalScrollBar>
                        )}
                    </Box>
                </>
            )}

            {!similarEquipmentExercises.length ? (
                <Loader />
            ) : (
                <>
                    <Typography
                        variant="h3"
                        mt="30px"
                        ml="50px"
                        sx={{
                            marginTop: "10px",
                            fontWeight: "bold",
                            fontSize: "22px",
                            color: "#ffffff",
                            cursor: "default",
                            "&:hover": {
                                opacity: "0.6",
                            },
                        }}
                    >
                        Similar exercises using{" "}
                        <span
                            style={{
                                color: "red",
                                textTransform: "capitalize",
                            }}
                        >
                            {equipment}{" "}
                        </span>
                    </Typography>
                    <Box width="100%">
                        {similarEquipmentExercises && (
                            <HorizontalScrollBar
                                length={
                                    similarEquipmentExercises.slice(0, 50)
                                        .length
                                }
                            >
                                {similarEquipmentExercises
                                    .slice(0, 50)
                                    .map((exercise, key) => (
                                        <div
                                            style={{ marginRight: "20px" }}
                                            key={key}
                                        >
                                            <ExerciseCard
                                                key={exercise.id}
                                                exercise={exercise}
                                            />
                                        </div>
                                    ))}
                            </HorizontalScrollBar>
                        )}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default SimilarExercises;
