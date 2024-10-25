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
            height: "100%",
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
      <Box display="flex" justifyContent={"center"}>
        {/* <Typography sx={{ padding: 5, fontSize: "2rem" }}>
          Your Trusted Partner in Finding your Dream Home
        </Typography> */}
      </Box>
      <Footer />
    </>
  );
}
