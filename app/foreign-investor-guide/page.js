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
  const cards = [
    {
      title: "Why Invest in NYC Real Estate?",
      text: "New York City offers a unique opportunity for real estate investment, combining stability, high appreciation potential, and proximity to some of the world's best universities. For parents, owning a property here not only provides a safe and convenient home for your child but also represents a smart financial investment. The NYC market is known for its resilience and long-term value, making it an ideal choice for international buyers.",
    },
    {
      title: "Understanding the NYC Real Estate Market",
      text: "The NYC real estate market is vast and varied, with neighborhoods offering different lifestyles and investment potentials. Whether you're looking for a quiet residential area near Columbia University or a vibrant, bustling location close to NYU, I can guide you through the options. Typical property types range from modern condos in high-rise buildings to classic brownstones in historic districts. I will help you navigate this complex market to find the perfect home that meets both your child's needs and your investment goals.",
    },
    {
      title: "Personalized Guidance Through the Buying Process",
      text: "When you visit New York City, I will arrange a series of property tours over 2-5 days, carefully planned around your schedule. During these tours, I will provide detailed insights into each property, highlighting both the benefits and any potential drawbacks. My priority is to ensure you have all the information you need to make an informed decision.",
    },
    {
      title: "Financial Analysis and Investment Potential",
      text: "Investing in real estate is not just about finding a home; it's about securing a valuable asset for the future. I will conduct a thorough financial analysis of each property you are interested in, assessing factors such as potential rental income, appreciation forecasts, and overall return on investment (ROI). This analysis will help you understand which properties offer the best financial benefits.",
    },
    {
      title: "Offer Submission and Negotiation",
      text: "Once you've chosen the ideal property, I will guide you in making a competitive offer. My extensive knowledge of the NYC market allows me to advise you on what price to offer based on current market conditions and the property's true value. My goal is to help you secure the property at the best possible price.",
    },
    {
      title: "Seamless Closing Process",
      text: "Closing on a property in NYC involves multiple steps, from finalizing contracts to ensuring all legal and financial obligations are met. I will coordinate closely with your legal and financial advisors to handle every detail. If you need to return to China before the transaction is complete, don't worry. I have experience managing remote closings and will ensure everything is taken care of on your behalf. Whether it's signing documents or coordinating with local authorities, I will act as your trusted representative in New York.",
    },
  ];
  const locations = [
    {
      name: t("Upper East Side"),
      image: "/upper-east-side.jpg",
      overview: t(
        "The Upper East Side (UES) is known for its historic architecture, luxurious residences, and cultural landmarks. Stretching from Central Park to the East River, it’s one of the wealthiest neighborhoods in NYC, with a mix of upscale townhouses, pre-war buildings, and modern high-rises."
      ),
      culture: t(
        "The UES is home to the Museum Mile, which includes renowned institutions like the Metropolitan Museum of Art, Guggenheim, and Frick Collection. The area exudes a more traditional and sophisticated atmosphere compared to downtown."
      ),
      lifestyle: t(
        "Life on the UES is refined and quiet, with high-end boutiques, designer stores on Madison Avenue, and Michelin-starred restaurants. The neighborhood attracts families and professionals looking for a mix of luxury and convenience."
      ),
      transportation: t(
        "The 4, 5, 6 subway lines run along Lexington Avenue, with the newer Q line running down Second Avenue. Several bus lines and easy access to Central Park make getting around convenient."
      ),
    },
    {
      name: t("Upper West Side"),
      image: "/upper-west-side.jpg",
      overview: t(
        "The Upper West Side (UWS) is a family-friendly neighborhood nestled between Central Park and the Hudson River. It boasts wide, tree-lined streets, beautiful pre-war buildings, and a quieter, residential feel compared to other parts of Manhattan."
      ),
      culture: t(
        "The UWS is home to Lincoln Center, which houses the Metropolitan Opera, New York City Ballet, and the New York Philharmonic. It’s also home to the American Museum of Natural History and Beacon Theatre."
      ),
      lifestyle: t(
        "This area is laid-back, with plenty of green spaces (including Riverside Park and Central Park), cozy cafes, and casual dining. The UWS is ideal for families and academics, with a relaxed yet refined lifestyle."
      ),
      transportation: t(
        "The 1, 2, 3 subway lines run along Broadway, while the B and C lines serve the western edge near Central Park West. It’s easy to get to other parts of the city from here."
      ),
    },
    {
      name: t("Midtown"),
      image: "/midtown.jpg",
      overview: t(
        "Midtown Manhattan is the bustling commercial heart of NYC, known for landmarks like Times Square, the Empire State Building, and Rockefeller Center. It’s the city’s primary business district with towering skyscrapers and world-class hotels."
      ),
      culture: t(
        "Midtown is home to Broadway, where you’ll find some of the most famous theaters in the world. It’s also close to iconic museums like MoMA (Museum of Modern Art)."
      ),
      lifestyle: t(
        "Life in Midtown is fast-paced, with tourists and professionals bustling through its streets. It’s perfect for those who love the energy of the city, with easy access to restaurants, bars, shopping, and major attractions."
      ),
      transportation: t(
        "Midtown is a major transportation hub. Grand Central Station and Penn Station connect you to the entire city and beyond, with multiple subway lines converging here, including the N, Q, R, W, B, D, F, M, 1, 2, 3, A, C, E lines."
      ),
    },
    {
      name: t("Chelsea"),
      image: "/chelsea.jpg",
      overview: t(
        "Chelsea is a vibrant, trendy neighborhood known for its art galleries, the High Line Park, and Chelsea Market. It's home to a creative community, with a mix of old warehouses, luxury condos, and brownstones."
      ),
      culture: t(
        "The neighborhood is a hub for contemporary art, with numerous galleries located in converted warehouses, particularly around 20th to 29th Streets. It also has a strong LGBTQ+ presence and nightlife."
      ),
      lifestyle: t(
        "Chelsea offers a dynamic mix of creative, upscale living. The High Line brings a unique outdoor space, and Chelsea Piers offers recreational activities. There are plenty of cafes, restaurants, and boutique shopping options."
      ),
      transportation: t(
        "The C, E lines serve Eighth Avenue, while the 1 line runs along Seventh Avenue, making it easy to commute to different parts of Manhattan."
      ),
    },
    {
      name: t("Greenwhich Village"),
      image: "/greenwhich-village.jpg",
      overview: t(
        "Greenwich Village is one of NYC’s most historic and iconic neighborhoods, famous for its bohemian vibe, tree-lined streets, and charming townhouses. It has long been a center for artists, writers, and musicians."
      ),
      culture: t(
        "The neighborhood has a rich cultural history, once home to the beat generation and later a hub for the LGBTQ+ movement. It’s also the location of Washington Square Park and NYU."
      ),
      lifestyle: t(
        "Greenwich Village offers a laid-back, artistic lifestyle with an emphasis on local cafes, bookstores, music venues, and boutique shops. It has a close-knit, community feel."
      ),
      transportation: t(
        "The A, C, E, B, D, F, M lines, as well as the 1, 2, 3 lines, serve Greenwich Village, offering easy access to other parts of Manhattan and beyond."
      ),
    },
    {
      name: t("Financial District (FiDi)"),
      image: "/financial-district.jpg",
      overview: t(
        "The Financial District (FiDi) is home to Wall Street and the New York Stock Exchange, making it a hub for business and finance. In recent years, it has also become a desirable residential neighborhood, with many luxury condos rising."
      ),
      culture: t(
        "FiDi’s history as a financial hub is visible in landmarks like the New York Stock Exchange, Federal Hall, and One World Trade Center. The area is rich in history, blending the old with the new."
      ),
      lifestyle: t(
        "Living in FiDi offers a mix of high-powered, fast-paced weekdays and quieter weekends. It’s known for luxury high-rises, dining options, and proximity to Battery Park and the waterfront."
      ),
      transportation: t(
        "FiDi is extremely well-connected with numerous subway lines converging here, including the 2, 3, 4, 5, A, C, J, Z, R lines. The nearby PATH train also connects to New Jersey."
      ),
    },
    {
      name: t("Tribeca"),
      image: "/tribeca.jpg",
      overview: t(
        "Tribeca, short for Triangle Below Canal Street, is one of Manhattan’s most exclusive and expensive neighborhoods, known for its luxury lofts and cobblestone streets. Originally an industrial area, it has transformed into a hotspot for wealthy professionals, celebrities, and families."
      ),
      culture: t(
        "Tribeca is home to the Tribeca Film Festival and is known for its thriving arts scene and top-tier restaurants. Its galleries, cultural events, and festivals give it a dynamic and creative edge."
      ),
      lifestyle: t(
        "Tribeca offers a blend of quiet, upscale living with proximity to lower Manhattan’s business districts. It's a favorite among families looking for spacious, converted lofts and townhouses, while also attracting celebrities for its privacy."
      ),
      transportation: t(
        "The 1, 2, 3, A, C, E subway lines make Tribeca easily accessible to other parts of Manhattan, while its location near the Hudson River offers scenic walking paths."
      ),
    },
    {
      name: t("SoHo"),
      image: "/soho.jpg",
      overview: t(
        "SoHo (South of Houston Street) is famous for its cast-iron buildings and upscale boutiques. Once a hub for artists, it’s now known for luxury lofts, high-end shopping, and art galleries."
      ),
      culture: t(
        "SoHo’s artistic roots are still visible through its galleries, museums, and unique shops. The neighborhood is also a major fashion destination, with designer boutiques and flagship stores along its iconic cobblestone streets."
      ),
      lifestyle: t(
        "Living in SoHo means being surrounded by creativity and luxury. Residents enjoy chic loft living, with quick access to high-end dining, shopping, and art. It’s popular with fashion enthusiasts, artists, and affluent professionals."
      ),
      transportation: t(
        "SoHo is well-served by the C, E, R, W, N, 6 subway lines, offering easy access to Midtown, the Financial District, and Brooklyn."
      ),
    },
    {
      name: t("East Village"),
      image: "/east-village.jpg",
      overview: t(
        "The East Village has a storied history as a hub for counterculture, art, and music. It’s known for its vibrant nightlife, eclectic dining scene, and artistic community, offering a more bohemian vibe compared to its neighboring areas."
      ),
      culture: t(
        "The East Village was once the epicenter of the punk rock movement and continues to be a cultural hotspot with music venues, art galleries, and independent theaters. The area has a rich immigrant history, particularly from Eastern European and Latin American communities."
      ),
      lifestyle: t(
        "The East Village offers a lively, youthful atmosphere, with countless bars, restaurants, and coffee shops. The neighborhood appeals to creatives, students, and young professionals who enjoy its laid-back and quirky character."
      ),
      transportation: t(
        "The L, 6, N, R subway lines connect the East Village to other parts of Manhattan and Brooklyn, while numerous bus routes make transportation easy."
      ),
    },
    {
      name: t("Lower East Side"),
      image: "/lower-east-side.jpg",
      overview: t(
        "The Lower East Side (LES) is one of Manhattan’s trendiest neighborhoods, with a mix of new developments and historic tenement buildings. Known for its immigrant roots, the LES has transformed into a hotspot for nightlife and dining."
      ),
      culture: t(
        "LES is famous for its immigrant history, particularly Jewish, Italian, and Chinese communities. It’s also home to some of the city’s best nightlife, with bars, live music venues, and art galleries."
      ),
      lifestyle: t(
        "Residents of the LES enjoy a mix of old and new, with luxury condos rising alongside older, more affordable buildings. The nightlife scene is one of the most active in the city, and the food scene features everything from street food to Michelin-starred restaurants."
      ),
      transportation: t(
        "The F, M, J, Z subway lines make it easy to travel from LES to other parts of the city."
      ),
    },
    {
      name: t("Flatiron District"),
      image: "/flatiron.jpg",
      overview: t(
        "The Flatiron District is named after the iconic Flatiron Building and is known for its combination of historic architecture and modern amenities. It’s a central Manhattan neighborhood that offers a mix of commercial and residential living."
      ),
      culture: t(
        "Flatiron is home to the Museum of Sex, a hub for foodies with the Eataly food hall, and nearby Madison Square Park. The area’s rich history and central location make it a cultural and business hub."
      ),
      lifestyle: t(
        "Living in the Flatiron District offers a vibrant, cosmopolitan lifestyle with upscale dining, shopping, and easy access to the rest of the city. It’s ideal for professionals and young families who want the convenience of Midtown but with more character."
      ),
      transportation: t(
        "Flatiron is well-connected by the N, R, W, 6 subway lines, making it a great central hub for commuting."
      ),
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
            sx={{ fontSize: isMobile ? "1.4rem" : "4.5rem", fontFamily: "" }}
          >
            {t("FOREIGN INVESTOR GUIDE")}
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
            {
              "Welcome to Richard's real estate guide for foreign investors! As a seasoned NYC real estate broker, I've had the privilege of assisting many Chinese families in securing the perfect home for their children studying in the United States. With experience helping parents whose children attend prestigious universities like NYU, Columbia, Princeton, Harvard, and MIT, I understand the unique needs and concerns you may have as you embark on this important journey."
            }
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
            >
              <Box
                key={index}
                boxShadow={2}
                padding={3}
                height={isMobile ? "100%" : "250px"}
                borderRadius={2.5}
              >
                <Stack
                  flexDirection="row"
                  gap={1}
                  paddingBottom={1}
                  alignItems={isMobile ? "" : "center"}
                >
                  <Box
                    backgroundColor="blue"
                    width={"25px"}
                    height={"25px"}
                    padding={2.5}
                    borderRadius={"99999px"}
                    display="flex"
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "helvetica",
                        fontWeight: "600",
                      }}
                    >
                      {index + 1}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: isMobile ? "1rem" : "1.4rem",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    {title}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontWeight: "100",
                    fontSize: isMobile ? "0.75rem" : "1rem",
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
