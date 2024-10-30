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

import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "./i18n"; // Adjust the path as necessary

import Header from "./Header";
import Footer from "./Footer";

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
  const realEstateTexts = [
    "Expert knowledge of NYC neighborhoods",
    "Personalized service for both local and international clients",
    "Specializing in luxury properties and investment opportunities",
    "With years of experience in the New York City real estate market, I specialize in helping clients find their perfect property, whether it's for investment or a place to call home.",
  ];
  return (
    <>
      <Box
        id="home"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/house1.png)",
          backgroundPosition: "center", // Center the image in the Box
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          backgroundSize: isMobile ? "" : "100%",
          paddingLeft: isMobile ? 2.5 : 5,
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
            height: isMobile ? "100vh" : "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
          }}
        />

        <Header
          t={t}
          isMobile={isMobile}
          prefLanguage={prefLanguage}
          handleLanguageChange={handleLanguageChange}
          handleDrawerToggle={handleDrawerToggle}
          textColor={"white"}
          drawerOpen={drawerOpen}
          page={"home"}
        />
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
              fontSize: isMobile ? "2.5rem" : "5rem",
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
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection="column"
        sx={{ backgroundColor: "#f4f6f8" }}
      >
        <>
          <Typography
            sx={{
              textAlign: "center",
              padding: 5,
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontFamily: "proxima nova",
            }}
          >
            {t("Your Trusted Partner in Finding your Dream Home")}
          </Typography>

          <Box
            backgroundColor=""
            width={isMobile ? "90vw" : "75vw"}
            height={isMobile ? "100%" : "75vh"}
          >
            <Stack
              direction={isMobile ? "column" : "row"}
              width="100%"
              height="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack
                width={isMobile ? "100%" : "75%"}
                paddingRight={isMobile ? 0 : 2.5}
                justifyContent="center"
                alignItems="center"
                gap={5}
              >
                {realEstateTexts.map((text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      textAlign: "center",
                      fontWeight: "100",
                    }}
                  >
                    {t(text)}
                  </Typography>
                ))}
              </Stack>

              <Box
                width={isMobile ? "100%" : "50%"}
                height={isMobile ? "400px" : "100%"}
                sx={{
                  backgroundImage: "url(/richard.png)",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Stack>
          </Box>
        </>
      </Box>
      <Footer />
    </>
  );
}
