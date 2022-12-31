import React, { useRef, useEffect } from "react";
import { Stack, Button } from "@mui/material";
import { Icon } from "@iconify/react";

const HorizontalScrollBar = ({ length, children }) => {
    const scrollRef = useRef(null);
    let scrollSize = 100;

    useEffect(() => {
        scrollSize = scrollRef.current.scrollWidth
            ? scrollRef.current.scrollWidth / length
            : 100;
    }, [children]);

    const handleClick = (right = true) => {
        scrollRef.current.scrollLeft += right ? scrollSize : -scrollSize;
    };

    return (
        <Stack direction="row" alignItems="center" my="30px">
            <Button
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "50px",
                    minHeight: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#064663",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    margin: "0px 20px 0px 30px",
                }}
                onClick={() => handleClick(false)}
            >
                <Icon
                    icon="material-symbols:arrow-back-rounded"
                    style={{ color: "white", fontSize: "30px" }}
                />
            </Button>
            <div
                ref={scrollRef}
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflowX: "hidden",
                }}
            >
                {children}
            </div>
            <Button
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "50px",
                    minHeight: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#064663",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    margin: "0px 30px 0px 20px",
                }}
                onClick={() => handleClick(true)}
            >
                <Icon
                    icon="material-symbols:arrow-forward-rounded"
                    style={{ color: "white", fontSize: "30px" }}
                />
            </Button>
        </Stack>
    );
};

export default HorizontalScrollBar;
