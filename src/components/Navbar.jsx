import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
    return (
        <Stack direction="row" px="40px" py="20px" width="400px">
            <Icon
                icon="circum:dumbbell"
                style={{ color: "white", fontSize: "40px" }}
            />
            <Stack
                direction="row"
                alignItems="center"
                sx={{
                    ml: { xs: "15px", lg: "30px" },
                }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginRight: "30px",
                        borderBottom: "3px solid #064663",
                    }}
                >
                    Home
                </Link>
                <a
                    href="#exercises-section"
                    style={{
                        textDecoration: "none",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "semibold",
                    }}
                >
                    Exercises
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;
