import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBanner from "../assets/images/banner.jpg";

const WelcomeSection = () => {
    return (
        <Box>
            <Stack
                sx={{
                    px: { xs: "50px", lg: "110px" },
                    py: { xs: "20px", lg: "40px" },
                    alignItems: { xs: "center", lg: "flex-start" },
                    textAlign: { xs: "center", lg: "left" },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        marginBottom: "5px",
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#ECB365",
                    }}
                >
                    Fitness Club
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        marginBottom: "10px",
                        fontWeight: "bold",
                        fontSize: "35px",
                        color: "#ffffff",
                    }}
                >
                    Sweet, Smile
                    <br /> And Repeate.
                </Typography>
                <Typography
                    sx={{
                        marginBottom: "10px",
                        fontSize: "16px",
                        color: "gray",
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
                        height: "40px",
                        borderRadius: "20px",
                    }}
                >
                    Explore Exercises
                </Button>
                <Typography
                    variate="h4"
                    color="error"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { sm: "85px", lg: "170px" },
                        letterSpacing: "20px",
                        marginTop: "-10px",
                        opacity: "0.3",
                        display: { xs: "none", md: "block" },
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
