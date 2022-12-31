import React from "react";
import { Box, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return <Loader />;

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
                Watch{" "}
                <span style={{ color: "red", textTransform: "capitalize" }}>
                    {name}{" "}
                </span>{" "}
                exercise videos
            </Typography>
            <Box width="100%">
                <HorizontalScrollBar length={6}>
                    {exerciseVideos?.slice(0, 6).map((item, index) => {
                        return (
                            <a
                                key={index}
                                className="exercise-video"
                                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                                target="_black"
                                rel="noreferrer"
                                style={{ marginRight: "20px" }}
                            >
                                <img
                                    src={item.video.thumbnails[0].url}
                                    alt={item.video.title}
                                    style={{
                                        borderRadius: "10px 10px 0px 0px",
                                    }}
                                />
                                <Box px="10px">
                                    <Typography
                                        variant="h5"
                                        color="#ffffff"
                                        mt="10px"
                                        sx={{
                                            fontSize: "14px",
                                            textWrap: "wrap",
                                        }}
                                    >
                                        {item.video.title}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="primary"
                                        mt="5px"
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            textWrap: "wrap",
                                        }}
                                    >
                                        {item.video.channelName}
                                    </Typography>
                                </Box>
                            </a>
                        );
                    })}
                </HorizontalScrollBar>
            </Box>
        </Box>
    );
};

export default ExerciseVideos;
