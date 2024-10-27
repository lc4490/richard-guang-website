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
  Card,
  CardContent,
  Slide,
} from "@mui/material";

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
  const [slideIn, setSlideIn] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e65bad31-7665-4454-baac-82fb0d012ec3");

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
          background: "linear-gradient(to right, #f8f9fa, #eceff1)",
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
              fontFamily: "Roboto, sans-serif",
              color: "#37474f",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            {t("Contact")}
          </Typography>
        </Box>
        <Slide direction="up" in={!slideIn} mountOnEnter unmountOnExit>
          <Card
            sx={{
              maxWidth: 500,
              mx: "auto",
              p: 4,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <form onSubmit={onSubmit}>
                <Typography variant="h6" gutterBottom>
                  {t("Name")}
                </Typography>
                <TextField fullWidth type="text" name="name" required />

                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  {t("Email")}
                </Typography>
                <TextField fullWidth type="email" name="email" required />

                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  {t("Message")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mt: 3,
                    background:
                      "linear-gradient(135deg, #3f51b5 0%, #1a237e 100%)",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#0277bd",
                    },
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {t("Send")}
                </Button>
              </form>
              {result && (
                <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
                  {result}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Slide>
      </Box>
      <Footer />
    </>
  );
}
