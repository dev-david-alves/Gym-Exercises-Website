import React from "react";
import { Stack, Link, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p="10px 30px"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Typography variant="h5" color="#ffffff" fontSize="14px">
                by{" "}
                <span
                    style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#ECB365",
                    }}
                >
                    David Alves
                </span>
            </Typography>
            <Stack direction="row">
                <a
                    href="https://www.linkedin.com/in/dev-david-alves/"
                    target="_black"
                    rel="noreferrer"
                    style={{
                        width: "50px",
                        height: "50px",
                        margin: "0px 10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0e76a8",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                        borderRadius: "50%",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            opacity: "0.7",
                        },
                    }}
                >
                    <Icon
                        icon="ri:linkedin-fill"
                        style={{ color: "white", fontSize: "25px" }}
                    />
                </a>

                <a
                    href="https://github.com/dev-david-alves/"
                    target="_black"
                    rel="noreferrer"
                    style={{
                        width: "50px",
                        height: "50px",
                        margin: "0px 10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#171515",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                        borderRadius: "50%",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            opacity: "0.7",
                        },
                    }}
                >
                    <Icon
                        icon="uim:github-alt"
                        style={{ color: "white", fontSize: "25px" }}
                    />
                </a>

                <a
                    href="mailto:david.als.soares@gmail.com"
                    target="_black"
                    rel="noreferrer"
                    style={{
                        width: "50px",
                        height: "50px",
                        margin: "0px 10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#c71610",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                        borderRadius: "50%",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            opacity: "0.7",
                        },
                    }}
                >
                    <Icon
                        icon="ic:baseline-email"
                        style={{ color: "white", fontSize: "25px" }}
                    />
                </a>
            </Stack>
        </Stack>
    );
};

export default Footer;
