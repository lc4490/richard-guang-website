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
} from "@mui/material";

import Image from "next/image";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

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
  const cards = [
    {
      title: t("Why Invest in NYC Real Estate?"),
      text: t(
        "New York City offers a unique opportunity for real estate investment, combining stability, high appreciation potential, and proximity to some of the world's best universities. For parents, owning a property here not only provides a safe and convenient home for your child but also represents a smart financial investment. The NYC market is known for its resilience and long-term value, making it an ideal choice for international buyers."
      ),
    },
    {
      title: t("Understanding the NYC Real Estate Market"),
      text: t(
        "The NYC real estate market is vast and varied, with neighborhoods offering different lifestyles and investment potentials. Whether you're looking for a quiet residential area near Columbia University or a vibrant, bustling location close to NYU, I can guide you through the options. Typical property types range from modern condos in high-rise buildings to classic brownstones in historic districts. I will help you navigate this complex market to find the perfect home that meets both your child's needs and your investment goals."
      ),
    },
    {
      title: t("Personalized Guidance Through the Buying Process"),
      text: t(
        "When you visit New York City, I will arrange a series of property tours over 2-5 days, carefully planned around your schedule. During these tours, I will provide detailed insights into each property, highlighting both the benefits and any potential drawbacks. My priority is to ensure you have all the information you need to make an informed decision."
      ),
    },
    {
      title: t("Financial Analysis and Investment Potential"),
      text: t(
        "Investing in real estate is not just about finding a home; it's about securing a valuable asset for the future. I will conduct a thorough financial analysis of each property you are interested in, assessing factors such as potential rental income, appreciation forecasts, and overall return on investment (ROI). This analysis will help you understand which properties offer the best financial benefits."
      ),
    },
    {
      title: t("Offer Submission and Negotiation"),
      text: t(
        "Once you've chosen the ideal property, I will guide you in making a competitive offer. My extensive knowledge of the NYC market allows me to advise you on what price to offer based on current market conditions and the property's true value. My goal is to help you secure the property at the best possible price."
      ),
    },
    {
      title: t("Seamless Closing Process"),
      text: t(
        "Closing on a property in NYC involves multiple steps, from finalizing contracts to ensuring all legal and financial obligations are met. I will coordinate closely with your legal and financial advisors to handle every detail. If you need to return to China before the transaction is complete, don't worry. I have experience managing remote closings and will ensure everything is taken care of on your behalf. Whether it's signing documents or coordinating with local authorities, I will act as your trusted representative in New York."
      ),
    },
  ];
  return (
    <>
      <Box
        id="home"
        sx={{
          width: "100%",
          height: "100%",

          //   backgroundImage: "url(/house1.png)",
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
            page={"foreign-investor-guide"}
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
              textAlign: "center",
              fontSize: isMobile ? "1.8rem" : "4.5rem",
              fontFamily: "",
            }}
          >
            {t("Foreign Investor Guide")}
          </Typography>
        </Box>
        <Box width={"100%"} paddingX={isMobile ? 5 : 30}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "100",
              fontSize: isMobile ? "0.75rem" : "1rem",
            }}
          >
            {t(
              "Welcome to Richard's real estate guide for foreign investors! As a seasoned NYC real estate broker, I've had the privilege of assisting many Chinese families in securing the perfect home for their children studying in the United States. With experience helping parents whose children attend prestigious universities like NYU, Columbia, Princeton, Harvard, and MIT, I understand the unique needs and concerns you may have as you embark on this important journey."
            )}
          </Typography>
        </Box>

        <Grid container padding={2.5} spacing={2.5}>
          {cards.map(({ title, text }, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              flexDirection="column"
              alignItems="center"
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                boxShadow={5}
                padding={3}
                height={isMobile ? "100%" : "275px"}
                borderRadius={2.5}
                sx={{
                  background:
                    "linear-gradient(135deg, #f9f9f9 0%, #e0f7fa 100%)",
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Stack
                  flexDirection="row"
                  gap={1}
                  paddingBottom={1}
                  alignItems={isMobile ? "" : "center"}
                >
                  <Box
                    sx={{
                      background:
                        "linear-gradient(135deg, #3f51b5 0%, #1a237e 100%)",
                      width: "40px",
                      height: "40px",
                      padding: 1.5,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* You can replace this with an icon */}
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "helvetica",
                        fontWeight: "600",
                        fontSize: "1.25rem",
                      }}
                    >
                      {index + 1}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: isMobile ? "1.2rem" : "1.5rem",
                      fontWeight: "700",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#1a237e",
                      },
                    }}
                  >
                    {title}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontWeight: "300",
                    fontSize: isMobile ? "0.9rem" : "1.1rem",
                    color: "#616161",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
