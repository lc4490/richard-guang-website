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
          paddingLeft: isMobile ? 0 : 5,
          paddingY: 2,
        }}
      >
        <Box sx={{ paddingLeft: isMobile ? 2.5 : 0 }}>
          <Header
            t={t}
            isMobile={isMobile}
            prefLanguage={prefLanguage}
            handleLanguageChange={handleLanguageChange}
            handleDrawerToggle={handleDrawerToggle}
            textColor={"black"}
            drawerOpen={drawerOpen}
            page={"about"}
          />
        </Box>
        <Box height={isMobile ? "100%" : "100vh"}>
          {!isMobile && (
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
                <Typography
                  sx={{
                    fontSize: "4.5rem",
                    lineHeight: "1.25",
                    fontFamily: "proxima nova",
                  }}
                >
                  {t("ABOUT")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "4.5rem",
                    lineHeight: "1.25",
                    fontFamily: "proxima nova",
                  }}
                >
                  {t("RICHARD GUANG")}
                </Typography>

                <Stack marginTop={2.5} gap={2.5}>
                  <Typography sx={{ fontWeight: 200 }}>
                    {t(
                      "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property."
                    )}
                  </Typography>
                  <Typography sx={{ fontWeight: 200 }}>
                    {t(
                      "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking."
                    )}
                  </Typography>
                  <Typography sx={{ fontWeight: 200 }}>
                    {t(
                      "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations."
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <Box
                width="50%"
                //   height="100%"
                sx={{
                  backgroundImage: "url(/richard.png)",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat", // Prevent the image from repeating
                }}
              ></Box>
            </Stack>
          )}
          {isMobile && (
            <Stack flexDirection={"column"} marginTop={5}>
              <Box sx={{ paddingLeft: isMobile ? 2.5 : 0 }}>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    lineHeight: "1.25",
                    fontFamily: "proxima nova",
                  }}
                >
                  {t("ABOUT")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    lineHeight: "1.25",
                    fontFamily: "proxima nova",
                  }}
                >
                  {t("RICHARD GUANG")}
                </Typography>
              </Box>
              <Box
                // width="50%"
                // backgroundColor="green"
                // width="500px"
                height="550px"
                sx={{
                  backgroundImage: "url(/richard.png)",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat", // Prevent the image from repeating
                }}
              ></Box>
              <Stack paddingX={2} marginTop={2.5} gap={2.5}>
                <Typography sx={{ fontWeight: 200 }}>
                  {t(
                    "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property."
                  )}
                </Typography>
                <Typography sx={{ fontWeight: 200 }}>
                  {t(
                    "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking."
                  )}
                </Typography>
                <Typography sx={{ fontWeight: 200 }}>
                  {t(
                    "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations."
                  )}
                </Typography>
              </Stack>
            </Stack>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
