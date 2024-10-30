"use client";

import {
  Box,
  Typography,
  useMediaQuery,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
import Papa from "papaparse";
import { useState, useEffect } from "react";
import Image from "next/image";

import { useTranslation } from "react-i18next";

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

  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchCsv = async () => {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/1GfWOVfwNV4iXUGgTX7faKVC6FyeX5TGRY5IRiy2_RTY/gviz/tq?tqx=out:csv"
      );
      const csvText = await response.text(); // Use .text() to get the full response

      Papa.parse(csvText, {
        header: true, // If your CSV has headers
        complete: (results) => {
          setListings(results.data); // Set the parsed data to state
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
        },
      });
    };

    fetchCsv();
  }, []);

  return (
    <>
      <Box
        id="home"
        sx={{
          width: "100%",
          height: "100%",
          paddingY: 2,
          backgroundColor: "#f4f6f8", // Light background
        }}
      >
        {/* heading */}
        <Box sx={{ paddingLeft: isMobile ? 2.5 : 5 }}>
          <Header
            t={t}
            isMobile={isMobile}
            prefLanguage={prefLanguage}
            handleLanguageChange={handleLanguageChange}
            handleDrawerToggle={handleDrawerToggle}
            textColor={"black"}
            drawerOpen={drawerOpen}
            page={"listings"}
          />
        </Box>

        {/* title */}
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
              fontFamily: "proxima nova",
              color: "#333", // Dark text
            }}
          >
            {t("Listings")}
          </Typography>
        </Box>

        {/* Listings */}
        <Grid container spacing={4} paddingX={2.5}>
          {listings
            .filter((listing) => listing.url && listing.address) // Filter out invalid listings
            .map((listing, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    //   borderRadius: "16px",
                    //   boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation
                    //   transition: "transform 0.3s ease", // Hover effect
                    //   "&:hover": {
                    //     transform: "scale(1.05)", // Hover scale effect
                    //   },
                  }}
                >
                  {listing.image && (
                    <CardMedia>
                      <Image
                        src={listing.image}
                        alt="listing image"
                        width={400}
                        height={250}
                        style={{
                          // borderTopLeftRadius: "16px",
                          // borderTopRightRadius: "16px",
                          objectFit: "cover",
                          width: 400,
                          height: 250,
                        }}
                      />
                    </CardMedia>
                  )}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    >
                      {listing.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {listing.location}, New York, New York,{" "}
                      {listing.postal_code}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: 1,
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {listing.price__value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {listing["listing-item__feat__value"] &&
                        `${listing["listing-item__feat__value"]} ${
                          listing["listing-item__feat__description"]
                            ? listing["listing-item__feat__description"]
                                .charAt(0)
                                .toUpperCase() +
                              listing["listing-item__feat__description"].slice(
                                1
                              )
                            : ""
                        }`}
                      {listing["listing-item__feat__value 2"] &&
                        ` | ${listing["listing-item__feat__value 2"]} ${
                          listing["listing-item__feat__description 2"]
                            ? listing["listing-item__feat__description 2"]
                                .charAt(0)
                                .toUpperCase() +
                              listing[
                                "listing-item__feat__description 2"
                              ].slice(1)
                            : ""
                        }`}
                      {listing["listing-item__feat__value 3"] &&
                        ` | ${listing["listing-item__feat__value 3"]} ${
                          listing["listing-item__feat__description 3"]
                            ? listing["listing-item__feat__description 3"]
                                .charAt(0)
                                .toUpperCase() +
                              listing[
                                "listing-item__feat__description 3"
                              ].slice(1)
                            : ""
                        }`}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", paddingY: 2 }}>
                    <Button
                      href={listing?.url || "#"}
                      target="_blank"
                      variant="contained"
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "white",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                        },
                      }}
                    >
                      {t("View Details")}
                    </Button>
                    <Button
                      href={"/contact"}
                      // target="_blank"
                      variant="contained"
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "white",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                        },
                      }}
                    >
                      {t("Inquire")}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
