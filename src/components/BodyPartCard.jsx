import React from "react";
import GymImage from "../assets/icons/gym.png";

import { Box, Typography } from "@mui/material";

const ExerciseCard = ({ bodyPart }) => {
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
