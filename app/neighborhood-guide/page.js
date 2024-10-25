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
  const locations = [
    { name: "Upper East Side", image: "/upper-east-side.jpg" },
    { name: "Lower West Side", image: "/upper-west-side.jpg" },
    { name: "Midtown", image: "/midtown.jpg" },
    { name: "Chelsea", image: "/chelsea.jpg" },
    { name: "Greenwhich Village", image: "/greenwhich-village.jpg" },
    { name: "Financial District (FiDi)", image: "/financial-district.jpg" },
    { name: "Tribeca", image: "/tribeca.jpg" },
    { name: "Soho", image: "/soho.jpg" },
    { name: "East Village", image: "/east-village.jpg" },
    { name: "Lower East Side", image: "/lower-east-side.jpg" },
    { name: "Flatiron District", image: "/flatiron.jpg" },
  ];

  // description modal
  const [openDesModal, setOpenDesModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const handleDesModal = (index) => {
    setSelectedLocation(index);
    setOpenDesModal(true);
  };
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
        {/* description modal */}
        <Modal open={openDesModal} onClose={() => setOpenDesModal(false)}>
          <Box
            overflow="auto"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              bgcolor: "background.default",
              //   border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="end"
              onClick={() => setOpenDesModal(false)}
            >
              <CloseIcon sx={{ fontSize: "1.5rem" }} />
            </Box>{" "}
            {locations[selectedLocation].name}
            <Image
              src={locations[selectedLocation].image}
              alt="banner"
              width={400} // These should be the actual dimensions of the image
              height={400} // Aspect ratio based on these dimensions
              style={{ width: "100%", height: "auto", objectFit: "contain" }} // This retains the aspect ratio
            />
          </Box>
        </Modal>
        <Box sx={{ paddingLeft: isMobile ? 2.5 : 5 }}>
          <Header
            t={t}
            isMobile={isMobile}
            prefLanguage={prefLanguage}
            handleLanguageChange={handleLanguageChange}
            handleDrawerToggle={handleDrawerToggle}
            textColor={"black"}
            drawerOpen={drawerOpen}
            page={"neighborhood-guide"}
          />
        </Box>
        <Box display="flex" justifyContent="center" padding={5}>
          <Typography sx={{ fontSize: "4.5rem", fontFamily: "" }}>
            NEIGHBORHOOD GUIDE
          </Typography>
        </Box>
        <Grid container paddingX={2.5}>
          {locations.map(({ name, image }, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <Button
                key={index}
                // href={link}
                onClick={() => handleDesModal(index)}
                target="_blank"
                sx={{
                  width: "100%",
                  aspectRatio: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  //   backgroundColor: "background.default",
                  border: "1px solid background.default",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={image}
                  alt="temp"
                  width={200}
                  height={200}
                  style={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: "10px",
                    objectFit: "cover",
                    // opacity: "50%",
                  }}
                />
                <Box
                  //   backgroundColor="red"
                  width="100%"
                  display="flex"
                  justifyContent="left"
                  paddingY={2}
                >
                  <Typography sx={{ color: "black", fontWeight: "100" }}>
                    {name}
                  </Typography>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
