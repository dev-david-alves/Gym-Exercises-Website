import { Stack } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const Navbar = () => {
    return (
        <Stack direction="row" p="20px" width="400px">
            <img src={Logo} alt="logo" width="40px" />
            <Stack
                direction="row"
                alignItems="center"
                sx={{
                    ml: { xs: "50px", lg: "100px" },
                }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#000000",
                        fontSize: "20px",
                        marginRight: "30px",
                        borderBottom: "3px solid #af0505",
                    }}
                >
                    Home
                </Link>
                <a
                    href="#exercises"
                    style={{
                        textDecoration: "none",
                        color: "#000000",
                        fontSize: "20px",
                    }}
                >
                    Exercises
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;
