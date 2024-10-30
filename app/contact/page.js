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
  Grid,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import {
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import Image from "next/image";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // Adjust the path as necessary

import Header from "../Header";
import Footer from "../Footer";

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

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4db629e9-ab75-462e-a7fc-60c894da8d4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Box
        id="home"
        sx={{
          width: "100%",
          height: "100%",

          //   backgroundImage: "url(/house1.png)",
          backgroundColor: "#f4f6f8", // Light background
          backgroundPosition: "center", // Center the image in the Box
          // backgroundSize: "50%",

          paddingY: 2,
        }}
      >
        <Box sx={{ paddingLeft: isMobile ? 2.5 : 5 }}>
          <Header
            t={t}
            isMobile={isMobile}
            prefLanguage={prefLanguage}
            handleLanguageChange={handleLanguageChange}
            handleDrawerToggle={handleDrawerToggle}
            textColor={"black"}
            drawerOpen={drawerOpen}
            page={"contact"}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          padding={5}
          flexDirection="column"
        >
          <Typography
            sx={{
              fontSize: isMobile ? "2.5rem" : "4.5rem",
              fontFamily: "proxima nova",
            }}
          >
            {t("Contact")}
          </Typography>
        </Box>
        <Box
          backgroundColor=""
          display="flex"
          paddingX={isMobile ? 2 : 10}
          justifyContent={"space-between"}
        >
          <Box width={isMobile ? "40%" : "33%"} backgroundColor="">
            <Typography
              sx={{
                textAlign: isMobile ? "center" : "left",
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: "100",
                fontFamily: "proxima nova",
              }}
            >
              {t("Get In Touch")}
            </Typography>
            {/* phone */}
            <Box
              marginTop={2.5}
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              alignItems={"center"}
            >
              <Typography sx={{ fontWeight: "200", fontSize: "0.9rem" }}>
                {t("Give me a call at")}
              </Typography>
              <Box display="flex" justifyContent={"left"}>
                <Button href="tel:+17184967914">
                  <Box gap={1} display="flex" flexDirection="row">
                    <Typography
                      sx={{
                        color: "primary",
                        fontFamily: "helvetica",
                        fontWeight: "100",
                        fontSize: "0.8rem",
                        textTransform: "lowercase",
                      }}
                    >
                      +1 (718) 496 7914
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
            {/* email */}
            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              alignItems={"center"}
            >
              <Typography sx={{ fontWeight: "200", fontSize: "0.9rem" }}>
                {t("Send me an email at")}
              </Typography>
              <Button href="mailto:rguang@elliman.com?...">
                <Box gap={1} display="flex" flexDirection="row">
                  <Typography
                    sx={{
                      color: "primary",
                      fontFamily: "helvetica",
                      fontWeight: "100",
                      fontSize: "0.8rem",
                      textTransform: "lowercase",
                    }}
                  >
                    rguang@elliman.com
                  </Typography>
                </Box>
              </Button>
            </Box>
            <Stack flexDirection={isMobile ? "column" : "row"} marginTop={2.5}>
              <Stack flexDirection="row">
                <Button
                  href="https://www.instagram.com/richard.guang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "black",
                    borderRadius: "50%", // Keep it circular
                    width: "60px", // Smaller size
                    height: "60px", // Smaller size
                    display: "flex", // Flexbox to center the icon
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                    "&:hover": {
                      backgroundColor: "black", // Change to your desired hover color
                      color: "white",
                    },
                  }}
                >
                  <FaInstagram style={{ fontSize: "20px" }} />
                </Button>
                <Button
                  href="https://www.tiktok.com/@rizzarddd"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "black",
                    borderRadius: "50%", // Keep it circular
                    width: "60px", // Smaller size
                    height: "60px", // Smaller size
                    display: "flex", // Flexbox to center the icon
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                    "&:hover": {
                      backgroundColor: "black", // Change to your desired hover color
                      color: "white",
                    },
                  }}
                >
                  <FaTiktok style={{ fontSize: "20px" }} />
                </Button>
              </Stack>
              <Stack flexDirection={"row"}>
                <Button
                  href="https://www.linkedin.com/in/richard-guang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "black",
                    borderRadius: "50%", // Keep it circular
                    width: "60px", // Smaller size
                    height: "60px", // Smaller size
                    display: "flex", // Flexbox to center the icon
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                    "&:hover": {
                      backgroundColor: "black", // Change to your desired hover color
                      color: "white",
                    },
                  }}
                >
                  <FaLinkedin style={{ fontSize: "20px" }} />
                </Button>
                <Button
                  href="https://www.youtube.com/@richardguang"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "black",
                    borderRadius: "50%", // Keep it circular
                    width: "60px", // Smaller size
                    height: "60px", // Smaller size
                    display: "flex", // Flexbox to center the icon
                    alignItems: "center", // Center vertically
                    justifyContent: "center", // Center horizontally
                    "&:hover": {
                      backgroundColor: "black", // Change to your desired hover color
                      color: "white",
                    },
                  }}
                >
                  <FaYoutube style={{ fontSize: "20px" }} />
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box width={isMobile ? "50%" : "66%"} backgroundColor="">
            <form onSubmit={onSubmit}>
              <Typography
                gutterBottom
                sx={{
                  fontWeight: "100",
                  fontSize: isMobile ? "1rem" : "1.25rem",
                }}
              >
                {t("Name")}
              </Typography>
              <TextField fullWidth type="text" name="name" required />

              <Typography
                gutterBottom
                sx={{
                  fontWeight: "100",
                  fontSize: isMobile ? "1rem" : "1.25rem",
                }}
              >
                {t("Email")}
              </Typography>
              <TextField fullWidth type="email" name="email" required />

              <Typography
                gutterBottom
                sx={{
                  fontWeight: "100",
                  fontSize: isMobile ? "1rem" : "1.25rem",
                }}
              >
                {t("Phone")}
              </Typography>
              <TextField fullWidth type="phone" name="phone" required />

              <Typography
                gutterBottom
                sx={{
                  fontWeight: "100",
                  fontSize: isMobile ? "1rem" : "1.25rem",
                }}
              >
                {t("Message")}
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={isMobile ? 1 : 3}
                name="message"
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
              >
                {t("Send")}
              </Button>
            </form>
            {result && (
              <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
                {result}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
