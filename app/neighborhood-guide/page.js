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
        "Chelsea is a vibrant, trendy neighborhood known for its art galleries, the High Line Park, and Chelsea Market. It's home to a creative community, with a mix of old warehouses, luxury condos, and brownstones.",
      culture:
        "The neighborhood is a hub for contemporary art, with numerous galleries located in converted warehouses, particularly around 20th to 29th Streets. It also has a strong LGBTQ+ presence and nightlife.",
      lifestyle:
        "Chelsea offers a dynamic mix of creative, upscale living. The High Line brings a unique outdoor space, and Chelsea Piers offers recreational activities. There are plenty of cafes, restaurants, and boutique shopping options.",
      transportation:
        "The C, E lines serve Eighth Avenue, while the 1 line runs along Seventh Avenue, making it easy to commute to different parts of Manhattan.",
    },
    {
      name: "Greenwhich Village",
      image: "/greenwhich-village.jpg",
      overview:
        "Greenwich Village is one of NYC’s most historic and iconic neighborhoods, famous for its bohemian vibe, tree-lined streets, and charming townhouses. It has long been a center for artists, writers, and musicians.",
      culture:
        "The neighborhood has a rich cultural history, once home to the beat generation and later a hub for the LGBTQ+ movement. It’s also the location of Washington Square Park and NYU.",
      lifestyle:
        "Greenwich Village offers a laid-back, artistic lifestyle with an emphasis on local cafes, bookstores, music venues, and boutique shops. It has a close-knit, community feel.",
      transportation:
        "The A, C, E, B, D, F, M lines, as well as the 1, 2, 3 lines, serve Greenwich Village, offering easy access to other parts of Manhattan and beyond.",
    },
    {
      name: "Financial District (FiDi)",
      image: "/financial-district.jpg",
      overview:
        "The Financial District (FiDi) is home to Wall Street and the New York Stock Exchange, making it a hub for business and finance. In recent years, it has also become a desirable residential neighborhood, with many luxury condos rising.",
      culture:
        "FiDi’s history as a financial hub is visible in landmarks like the New York Stock Exchange, Federal Hall, and One World Trade Center. The area is rich in history, blending the old with the new.",
      lifestyle:
        "Living in FiDi offers a mix of high-powered, fast-paced weekdays and quieter weekends. It’s known for luxury high-rises, dining options, and proximity to Battery Park and the waterfront.",
      transportation:
        "FiDi is extremely well-connected with numerous subway lines converging here, including the 2, 3, 4, 5, A, C, J, Z, R lines. The nearby PATH train also connects to New Jersey.",
    },
    {
      name: "Tribeca",
      image: "/tribeca.jpg",
      overview:
        "Tribeca, short for Triangle Below Canal Street, is one of Manhattan’s most exclusive and expensive neighborhoods, known for its luxury lofts and cobblestone streets. Originally an industrial area, it has transformed into a hotspot for wealthy professionals, celebrities, and families.",
      culture:
        "Tribeca is home to the Tribeca Film Festival and is known for its thriving arts scene and top-tier restaurants. Its galleries, cultural events, and festivals give it a dynamic and creative edge.",
      lifestyle:
        "Tribeca offers a blend of quiet, upscale living with proximity to lower Manhattan’s business districts. It's a favorite among families looking for spacious, converted lofts and townhouses, while also attracting celebrities for its privacy.",
      transportation:
        "The 1, 2, 3, A, C, E subway lines make Tribeca easily accessible to other parts of Manhattan, while its location near the Hudson River offers scenic walking paths.",
    },
    {
      name: "Soho",
      image: "/soho.jpg",
      overview:
        "SoHo (South of Houston Street) is famous for its cast-iron buildings and upscale boutiques. Once a hub for artists, it’s now known for luxury lofts, high-end shopping, and art galleries.",
      culture:
        "SoHo’s artistic roots are still visible through its galleries, museums, and unique shops. The neighborhood is also a major fashion destination, with designer boutiques and flagship stores along its iconic cobblestone streets.",
      lifestyle:
        "Living in SoHo means being surrounded by creativity and luxury. Residents enjoy chic loft living, with quick access to high-end dining, shopping, and art. It’s popular with fashion enthusiasts, artists, and affluent professionals.",
      transportation:
        "SoHo is well-served by the C, E, R, W, N, 6 subway lines, offering easy access to Midtown, the Financial District, and Brooklyn.",
    },
    {
      name: "East Village",
      image: "/east-village.jpg",
      overview:
        "The East Village has a storied history as a hub for counterculture, art, and music. It’s known for its vibrant nightlife, eclectic dining scene, and artistic community, offering a more bohemian vibe compared to its neighboring areas.",
      culture:
        "The East Village was once the epicenter of the punk rock movement and continues to be a cultural hotspot with music venues, art galleries, and independent theaters. The area has a rich immigrant history, particularly from Eastern European and Latin American communities.",
      lifestyle:
        "The East Village offers a lively, youthful atmosphere, with countless bars, restaurants, and coffee shops. The neighborhood appeals to creatives, students, and young professionals who enjoy its laid-back and quirky character.",
      transportation:
        "The L, 6, N, R subway lines connect the East Village to other parts of Manhattan and Brooklyn, while numerous bus routes make transportation easy.",
    },
    {
      name: "Lower East Side",
      image: "/lower-east-side.jpg",
      overview:
        "The Lower East Side (LES) is one of Manhattan’s trendiest neighborhoods, with a mix of new developments and historic tenement buildings. Known for its immigrant roots, the LES has transformed into a hotspot for nightlife and dining.",
      culture:
        "LES is famous for its immigrant history, particularly Jewish, Italian, and Chinese communities. It’s also home to some of the city’s best nightlife, with bars, live music venues, and art galleries.",
      lifestyle:
        "Residents of the LES enjoy a mix of old and new, with luxury condos rising alongside older, more affordable buildings. The nightlife scene is one of the most active in the city, and the food scene features everything from street food to Michelin-starred restaurants.",
      transportation:
        "The F, M, J, Z subway lines make it easy to travel from LES to other parts of the city.",
    },
    {
      name: "Flatiron District",
      image: "/flatiron.jpg",
      overview:
        "The Flatiron District is named after the iconic Flatiron Building and is known for its combination of historic architecture and modern amenities. It’s a central Manhattan neighborhood that offers a mix of commercial and residential living.",
      culture:
        "Flatiron is home to the Museum of Sex, a hub for foodies with the Eataly food hall, and nearby Madison Square Park. The area’s rich history and central location make it a cultural and business hub.",
      lifestyle:
        "Living in the Flatiron District offers a vibrant, cosmopolitan lifestyle with upscale dining, shopping, and easy access to the rest of the city. It’s ideal for professionals and young families who want the convenience of Midtown but with more character.",
      transportation:
        "Flatiron is well-connected by the N, R, W, 6 subway lines, making it a great central hub for commuting.",
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
