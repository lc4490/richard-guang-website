"use client";

import {
  Box,
  Button,
  Stack,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [prefLanguage, setPrefLanguage] = useState("en"); // Initialize with a default value

  const handleLanguageChange = (event) => {
    setPrefLanguage(event.target.value); // Update state on change
  };
  return (
    <Box
      id="home"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(/house1.png)",
        backgroundPosition: "center", // Center the image in the Box
        // backgroundSize: "50%",
        paddingX: 5,
        paddingY: 2,
      }}
    >
      {/* darken */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
        }}
      />

      {/* header */}
      <Stack flexDirection="row" display="flex" justifyContent="space-between">
        <Button
          href="#home"
          disableRipple
          sx={{
            // backgroundColor: "background.default",
            color: "white",
            borderColor: "background.default",
            borderRadius: "10px",
            // fontWeight: "700",
            fontSize: "2rem",
            fontFamily: "proxima nova",
            "&:hover": {
              backgroundColor: "transparent", // Make hover color transparent
            },
          }}
        >
          RG
        </Button>
        <Stack flexDirection="row">
          <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
            About
          </Button>
          <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
            Listing
          </Button>
          <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
            Foreign Investor Guide
          </Button>
          <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
            Neighborhood Guide
          </Button>
          <Button
            disableRipple
            sx={{ color: "white", fontWeight: "100", fontSize: "0.9rem" }}
          >
            Contact
          </Button>
          <Box display="flex" alignItems={"center"}>
            <FormControl
              sx={{
                color: "white",
                border: "none", // Remove border
                "& .MuiOutlinedInput-root": {
                  border: "none", // Remove border for outlined variant
                  "& fieldset": {
                    border: "none", // Remove fieldset border
                  },
                },
                "& .MuiInputBase-root": {
                  border: "none", // Remove border for input
                },
              }}
            >
              <Select
                value={prefLanguage}
                onChange={handleLanguageChange}
                disableunderline="true"
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <span>{"ENGLISH"}</span>;
                  }
                  const selectedItem = {
                    en: "ENGLISH",
                    cn: "中文（简体）",
                    tc: "中文（繁體）",
                  }[selected];
                  return <span>{selectedItem}</span>;
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#333", // Change dropdown background color
                      color: "white", // Change text color of menu items
                      "& .MuiMenuItem-root": {
                        "&:hover": {
                          backgroundColor: "#555", // Change hover color for menu items
                        },
                      },
                    },
                  },
                }}
                sx={{
                  fontSize: "0.9rem",
                  color: "white",
                  fontWeight: "100",
                  "& .MuiSelect-select": {
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  },
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                  "&:before, &:after": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="en">ENGLISH</MenuItem>
                <MenuItem value="cn">中文（简体）</MenuItem>
                <MenuItem value="tc">中文（繁體）</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Stack>
      {/* Title */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the text
          textAlign: "center", // Center text alignment
          color: "white", // Text color
        }}
      >
        <Typography
          sx={{
            fontSize: "5rem",
            fontWeight: "400",
            fontFamily: "proxima nova",
          }}
        >
          RICHARD GUANG
        </Typography>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "400",
            fontFamily: "proxima nova",
          }}
        >
          REAL ESTATE
        </Typography>
      </Box>
    </Box>
  );
}
