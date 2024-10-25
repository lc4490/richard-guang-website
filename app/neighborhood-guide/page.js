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
    {
      name: "Upper East Side",
      image: "/upper-east-side.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
    {
      name: "Upper West Side",
      image: "/upper-west-side.jpg",
      overview:
        "The Upper West Side (UWS) is a family-friendly neighborhood nestled between Central Park and the Hudson River. It boasts wide, tree-lined streets, beautiful pre-war buildings, and a quieter, residential feel compared to other parts of Manhattan.",
      culture:
        "The UWS is home to Lincoln Center, which houses the Metropolitan Opera, New York City Ballet, and the New York Philharmonic. It’s also home to the American Museum of Natural History and Beacon Theatre.",
      lifestyle:
        "This area is laid-back, with plenty of green spaces (including Riverside Park and Central Park), cozy cafes, and casual dining. The UWS is ideal for families and academics, with a relaxed yet refined lifestyle.",
      transportation:
        "The 1, 2, 3 subway lines run along Broadway, while the B and C lines serve the western edge near Central Park West. It’s easy to get to other parts of the city from here.",
    },
    {
      name: "Midtown",
      image: "/midtown.jpg",
      overview:
        "Midtown Manhattan is the bustling commercial heart of NYC, known for landmarks like Times Square, the Empire State Building, and Rockefeller Center. It’s the city’s primary business district with towering skyscrapers and world-class hotels.",
      culture:
        "Midtown is home to Broadway, where you’ll find some of the most famous theaters in the world. It’s also close to iconic museums like MoMA (Museum of Modern Art).",
      lifestyle:
        "Life in Midtown is fast-paced, with tourists and professionals bustling through its streets. It’s perfect for those who love the energy of the city, with easy access to restaurants, bars, shopping, and major attractions.",
      transportation:
        "Midtown is a major transportation hub. Grand Central Station and Penn Station connect you to the entire city and beyond, with multiple subway lines converging here, including the N, Q, R, W, B, D, F, M, 1, 2, 3, A, C, E lines.",
    },
    {
      name: "Chelsea",
      image: "/chelsea.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
    {
      name: "Greenwhich Village",
      image: "/greenwhich-village.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
    {
      name: "Financial District (FiDi)",
      image: "/financial-district.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
    {
      name: "Tribeca",
      image: "/tribeca.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
    {
      name: "Soho",
      image: "/soho.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
    {
      name: "East Village",
      image: "/east-village.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
    {
      name: "Lower East Side",
      image: "/lower-east-side.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
    {
      name: "Flatiron District",
      image: "/flatiron.jpg",
      overview:
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises.",
      culture:
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown.",
      lifestyle:
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience.",
      transportation:
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient.",
    },
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
            <Box
              width="100%"
              display="flex"
              justifyContent={"center"}
              paddingY={5}
            >
              <Typography
                sx={{
                  color: "black",
                  // fontWeight: "500",
                  fontFamily: "helvetica",
                  fontSize: isMobile ? "2rem" : "4rem",
                  textTransform: "uppercase",
                }}
              >
                {locations[selectedLocation].name}
              </Typography>
            </Box>
            <Image
              src={locations[selectedLocation].image}
              alt="banner"
              width={400} // These should be the actual dimensions of the image
              height={400} // Aspect ratio based on these dimensions
              style={{ width: "100%", height: "auto", objectFit: "contain" }} // This retains the aspect ratio
            />
            <Typography sx={{ mt: 5, fontWeight: "100" }}>
              <strong style={{ textTransform: "uppercase" }}>Overview:</strong>
              <br />
              {locations[selectedLocation].overview}
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: "100" }}>
              <strong style={{ textTransform: "uppercase" }}>Culture:</strong>
              <br />
              {locations[selectedLocation].culture}
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: "100" }}>
              <strong style={{ textTransform: "uppercase" }}>Lifestyle:</strong>
              <br />
              {locations[selectedLocation].lifestyle}
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: "100" }}>
              <strong style={{ textTransform: "uppercase" }}>
                Transportation:
              </strong>
              <br />
              {locations[selectedLocation].transportation}
            </Typography>
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
          <Typography
            sx={{ fontSize: isMobile ? "1.5rem" : "4.5rem", fontFamily: "" }}
          >
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
