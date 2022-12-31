import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";

import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Details from "../components/Details";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const exDbUrl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
            const exerciseData = await fetchData(exDbUrl, exerciseOptions);
            setExerciseDetail(exerciseData);

            const youtubeSearchURL =
                "https://youtube-search-and-download.p.rapidapi.com";
            const exerciseVideosData = await fetchData(
                `${youtubeSearchURL}/search?query=${exerciseData.name}`,
                youtubeOptions
            );
            setExerciseVideos(exerciseVideosData.contents);
        };

        getData();
    }, [id]);

    return (
        <Box
            width="100%"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Details exercise={exerciseDetail} />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
            <SimilarExercises
                target={exerciseDetail.target}
                equipment={exerciseDetail.equipment}
            />
        </Box>
    );
};

export default ExerciseDetail;
