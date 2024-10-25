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

import Image from "next/image";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // Adjust the path as necessary

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
          backgroundColor: "white",
          //   backgroundImage: "url(/house1.png)",
          backgroundPosition: "center", // Center the image in the Box
          // backgroundSize: "50%",
          paddingLeft: 5,
          paddingY: 2,
        }}
      >
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
              color: "black",
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
              <Button
                href="/about"
                disableRipple
                sx={{
                  color: "black",
                  fontWeight: "100",
                  fontSize: "0.85rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  "&:hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                  },
                }}
              >
                {t("About")}
              </Button>
              <Button
                disableRipple
                sx={{ color: "black", fontWeight: "100", fontSize: "0.85rem" }}
              >
                {t("Listing")}
              </Button>
              <Button
                disableRipple
                sx={{ color: "black", fontWeight: "100", fontSize: "0.85rem" }}
              >
                {t("Foreign Investor Guide")}
              </Button>
              <Button
                disableRipple
                sx={{ color: "black", fontWeight: "100", fontSize: "0.85rem" }}
              >
                {t("Neighborhood Guide")}
              </Button>
              <Button
                disableRipple
                sx={{ color: "black", fontWeight: "100", fontSize: "0.85rem" }}
              >
                {t("Contact")}
              </Button>
              <Box display="flex" alignItems={"center"}>
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
                        cn: "中文",
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
                      fontSize: "0.85rem",
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
                    <MenuItem value="cn">中文</MenuItem>
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
                    color: "black",
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
                            cn: "中文",
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
                        <MenuItem value="cn">中文</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Drawer>
            </>
          )}
        </Stack>
        <Box height="100%">
          <Stack
            width="100%"
            height="100%"
            flexDirection="row"
            display="flex"
            justifyContent="space-between"
          >
            <Stack
              flexDirection={"column"}
              marginTop={25}
              width="50%"
              paddingRight={2.5}
            >
              <Typography sx={{ fontSize: "4.5rem", lineHeight: "1.25" }}>
                {t("ABOUT")}
              </Typography>
              <Typography sx={{ fontSize: "4.5rem", lineHeight: "1.25" }}>
                {t("RICHARD GUANG")}
              </Typography>

              <Stack marginTop={2.5} gap={2.5}>
                <Typography sx={{ fontWeight: 200 }}>
                  Richard Guang is a graduate of the MIT Sloan School of
                  Management where he studied Finance and Statistics. He has a
                  fierce work ethic, tenacious drive to succeed, and an ability
                  to establish rapport with all people. Born and raised in New
                  York City, Richard&#39;s expertise and vast knowledge of the
                  city ensures the highest caliber of service to his clients,
                  whether it be buying, selling, investing, or renting a
                  property.
                </Typography>
                <Typography sx={{ fontWeight: 200 }}>
                  He has previously worked at JP Morgan Private Bank, various
                  asset management firms in New York, and is currently a member
                  of the Real Estate Board of New York. He has also been helping
                  his family manage various properties throughout the city from
                  a young age. A lifelong athlete and competitor, Richard enjoys
                  running, calisthenics, and biking.
                </Typography>
                <Typography sx={{ fontWeight: 200 }}>
                  Richard&#39;s ability to adapt quickly and to challenge the
                  status quo makes him a dynamic player who can find the
                  solution to any problem. He is passionate about luxury real
                  estate and loves leading individuals, families, and investors
                  to achieve their real estate aspirations.
                </Typography>
              </Stack>
            </Stack>
            <Box
              backgroundColor="green"
              width="50%"
              height="100%"
              sx={{
                backgroundImage: "url(/richard.png)",
                backgroundPosition: "center",
                backgroundSize: "100%",
              }}
            ></Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
