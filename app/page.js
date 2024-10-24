"use client";

import {
  Box,
  Button,
  Stack,
  FormControl,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "./i18n"; // Adjust the path as necessary

export default function Home() {
  const { t, i18n } = useTranslation();
  const [prefLanguage, setPrefLanguage] = useState("en");
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setPrefLanguage(newLanguage); // Update state on change
  };
  return (
    <>
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
        <Stack
          flexDirection="row"
          display="flex"
          justifyContent="space-between"
        >
          <Button
            href="/"
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
          {!isMobile && (
            <Stack flexDirection="row">
              <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
                {t("About")}
              </Button>
              <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
                {t("Listing")}
              </Button>
              <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
                {t("Foreign Investor Guide")}
              </Button>
              <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
                {t("Neighborhood Guide")}
              </Button>
              <Button disableRipple sx={{ color: "white", fontWeight: "100" }}>
                {t("Contact")}
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
          )}
          {isMobile && (
            <>
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon
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
                />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  width="300px"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  // justifyContent="space-between"
                  padding={2}
                  gap={2}
                >
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="end"
                    onClick={handleDrawerToggle}
                  >
                    <CloseIcon sx={{ fontSize: "1.5rem" }} />
                  </Box>
                  <Button
                    disableRipple
                    sx={{ color: "black", fontWeight: "100" }}
                  >
                    {t("About")}
                  </Button>
                  <Button
                    disableRipple
                    sx={{ color: "black", fontWeight: "100" }}
                  >
                    {t("Listing")}
                  </Button>
                  <Button
                    disableRipple
                    sx={{ color: "black", fontWeight: "100" }}
                  >
                    {t("Foreign Investor Guide")}
                  </Button>
                  <Button
                    disableRipple
                    sx={{ color: "black", fontWeight: "100" }}
                  >
                    {t("Neighborhood Guide")}
                  </Button>
                  <Button
                    disableRipple
                    sx={{
                      color: "black",
                      fontWeight: "100",
                    }}
                  >
                    {t("Contact")}
                  </Button>
                  <Box display="flex" justifyContent={"center"}>
                    <FormControl
                      sx={{
                        color: "black",
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
                              backgroundColor: "white", // Change dropdown background color
                              color: "black", // Change text color of menu items
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
                          color: "black",
                          fontWeight: "100",
                          "& .MuiSelect-select": {
                            paddingTop: "10px",
                            paddingBottom: "10px",
                          },
                          "& .MuiSelect-icon": {
                            color: "black",
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
                </Box>
              </Drawer>
            </>
          )}
        </Stack>
        {/* Title */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the text
            textAlign: "center", // Center text alignment
            color: "white", // Text color
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "3rem" : "5rem",
              fontWeight: "400",
              fontFamily: "proxima nova",
            }}
          >
            {t("RICHARD GUANG")}
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "400",
              fontFamily: "proxima nova",
            }}
          >
            {t("REAL ESTATE")}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent={"center"}>
        <Typography sx={{ padding: 5, fontSize: "2rem" }}>
          Your Trusted Partner in Finding your Dream Home
        </Typography>
      </Box>
    </>
  );
}
