import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBanner from "../assets/images/banner.png";

const WelcomeSection = () => {
    return (
        <Box>
            <Stack
                sx={{
                    p: { xs: "20px", lg: "100px" },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        marginBottom: "20px",
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#ce1212",
                        marginTop: "20px",
                    }}
                >
                    Fitness Club
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        marginBottom: "20px",
                        fontWeight: "bold",
                        fontSize: "35px",
                        color: "#000000",
                        marginTop: "20px",
                    }}
                >
                    Sweet, Smile
                    <br /> And Repeate.
                </Typography>
                <Typography
                    sx={{
                        marginBottom: "20px",
                        fontSize: "16px",
                        color: "#1f1f1f",
                    }}
                >
                    Check out the most effective exercises personalised to you.
                </Typography>
                <Button
                    variant="contained"
                    color="error"
                    sx={{
                        marginTop: "20px",
                        maxWidth: "200px",
                    }}
                >
                    Explore Exercises
                </Button>
                <Typography
                    variate="h4"
                    color="error"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { sm: "100px", lg: "200px" },
                        letterSpacing: "20px",
                        marginTop: "-20px",
                        opacity: "0.2",
                        display: { sm: "none", md: "block" },
                    }}
                >
                    Exercise
                </Typography>
            </Stack>
            <img
                src={HeroBanner}
                className="hero-banner-img"
                alt="hero banner"
            />
        </Box>
    );
};

export default WelcomeSection;
