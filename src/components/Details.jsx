import React from "react";
import { Stack, Typography, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ exercise }) => {
    const { name, gifUrl, target, equipment, bodyPart } = exercise;

    const extraDetail = [
        {
            name: bodyPart,
            icon: BodyPartImage,
        },
        {
            name: target,
            icon: TargetImage,
        },
        {
            name: equipment,
            icon: EquipmentImage,
        },
    ];

    return (
        <Stack
            sx={{
                flexDirection: { lg: "row", sm: "column" },
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
            }}
        >
            <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                style={{ borderRadius: "10px 0px 0px 10px" }}
            />
            <Stack px="20px" py="30px">
                <Typography
                    variant="h5"
                    sx={{
                        textTransform: "uppercase",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#ECB365",
                    }}
                >
                    {name}
                </Typography>

                {extraDetail.map(({ name, icon }, index) => (
                    <Stack
                        key={index}
                        flexDirection="row"
                        alignItems="center"
                        gap="12px"
                    >
                        <Button
                            sx={{
                                borderRadius: "50%",
                                backGroundColor: "#fff2db",
                                width: "100px",
                                height: "100px",
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                                marginTop: "10px",
                                cursor: "default",
                            }}
                        >
                            <img src={icon} alt={bodyPart} loading="lazy" />
                        </Button>
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: "uppercase",
                                marginTop: "10px",
                                fontWeight: "bold",
                                fontSize: "18px",
                                color: "#ffffff",
                                cursor: "default",
                                "&:hover": {
                                    opacity: "0.6",
                                },
                            }}
                        >
                            {name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Details;
