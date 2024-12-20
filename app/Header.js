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

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({
  isMobile,
  t,
  prefLanguage,
  handleLanguageChange,
  drawerOpen,
  handleDrawerToggle,
  textColor,
  page,
}) => {
  return (
    <Stack flexDirection="row" display="flex" justifyContent="space-between">
      <Button
        href="/"
        disableRipple
        sx={{
          // backgroundColor: "background.default",
          color: textColor,
          borderColor: "background.default",
          borderRadius: "10px",
          // fontWeight: "700",
          fontSize: "2rem",
          fontFamily: "proxima nova",
          "&:hover": {
            backgroundColor: "transparent", // Make hover color transparent
          },
        }}
      >
        RG
      </Button>
      {!isMobile && (
        <Stack flexDirection="row">
          <Button
            href="/about"
            disableRipple
            sx={{
              color: textColor,
              fontWeight: "100",
              fontSize: "0.85rem",
              textDecoration: page == "about" ? "underline" : "none",
              textUnderlineOffset: "4px",
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              },
            }}
          >
            {t("About")}
          </Button>
          <Button
            // href="https://www.elliman.com/newyorkcity/sales/ny-usa/price-high-sort/527-a-df24061116065265311-agentid"
            href="/listings"
            // target="_blank"
            disableRipple
            sx={{
              color: textColor,
              fontWeight: "100",
              fontSize: "0.85rem",
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              },
            }}
          >
            {t("Listings")}
          </Button>
          <Button
            disableRipple
            href="/foreign-investor-guide"
            sx={{
              color: textColor,
              fontWeight: "100",
              fontSize: "0.85rem",
              textDecoration:
                page == "foreign-investor-guide" ? "underline" : "none",
              textUnderlineOffset: "4px",
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              },
            }}
          >
            {t("Foreign Investor Guide")}
          </Button>
          <Button
            disableRipple
            href="/neighborhood-guide"
            sx={{
              color: textColor,
              fontWeight: "100",
              fontSize: "0.85rem",
              textDecoration:
                page == "neighborhood-guide" ? "underline" : "none",
              textUnderlineOffset: "4px",
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              },
            }}
          >
            {t("Neighborhood Guide")}
          </Button>
          <Button
            href="/contact"
            disableRipple
            sx={{
              color: textColor,
              fontWeight: "100",
              textDecoration: page == "contact" ? "underline" : "none",
              textUnderlineOffset: "4px",
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              },
            }}
          >
            {t("Contact")}
          </Button>
          <Box display="flex" alignItems={"center"}>
            <FormControl
              sx={{
                color: textColor,
                border: "none", // Remove border
                "& .MuiOutlinedInput-root": {
                  border: "none", // Remove border for outlined variant
                  "& fieldset": {
                    border: "none", // Remove fieldset border
                  },
                },
                "& .MuiInputBase-root": {
                  border: "none", // Remove border for input
                },
              }}
            >
              <Select
                value={prefLanguage}
                onChange={handleLanguageChange}
                disableunderline="true"
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <span>{"ENGLISH"}</span>;
                  }
                  const selectedItem = {
                    en: "ENGLISH",
                    cn: "中文",
                  }[selected];
                  return <span>{selectedItem}</span>;
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#333", // Change dropdown background color
                      color: "white", // Change text color of menu items
                      "& .MuiMenuItem-root": {
                        "&:hover": {
                          backgroundColor: "#555", // Change hover color for menu items
                        },
                      },
                    },
                  },
                }}
                sx={{
                  fontSize: "0.85rem",
                  color: textColor,
                  fontWeight: "100",
                  "& .MuiSelect-select": {
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  },
                  "& .MuiSelect-icon": {
                    color: textColor,
                  },
                  "&:before, &:after": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="en">ENGLISH</MenuItem>
                <MenuItem value="cn">中文</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      )}
      {isMobile && (
        <Box paddingRight={2.5}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon
              sx={{
                // backgroundColor: "background.default",
                color: textColor,
                borderColor: "background.default",
                borderRadius: "10px",
                // fontWeight: "700",
                fontSize: "2rem",
                fontFamily: "proxima nova",
                "&:hover": {
                  backgroundColor: "transparent", // Make hover color transparent
                },
              }}
            />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <Box
              width="300px"
              height="100%"
              display="flex"
              flexDirection="column"
              // justifyContent="space-between"
              padding={2}
              gap={2}
            >
              <Box
                width="100%"
                display="flex"
                justifyContent="end"
                onClick={handleDrawerToggle}
              >
                <CloseIcon sx={{ fontSize: "1.5rem" }} />
              </Box>
              <Button
                href="/about"
                disableRipple
                sx={{
                  color: "black",
                  fontWeight: "100",
                  textDecoration: page == "about" ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  "&:hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  },
                }}
              >
                {t("About")}
              </Button>
              <Button
                // href="https://www.elliman.com/newyorkcity/sales/ny-usa/price-high-sort/527-a-df24061116065265311-agentid"
                // target="_blank"
                href="/listings"
                disableRipple
                sx={{
                  color: "black",
                  fontWeight: "100",
                  "&:hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  },
                }}
              >
                {t("Listings")}
              </Button>
              <Button
                href="/foreign-investor-guide"
                disableRipple
                sx={{
                  color: "black",
                  fontWeight: "100",
                  textDecoration:
                    page == "foreign-investor-guide" ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  "&:hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  },
                }}
              >
                {t("Foreign Investor Guide")}
              </Button>
              <Button
                href="/neighborhood-guide"
                disableRipple
                sx={{
                  color: "black",
                  fontWeight: "100",
                  textDecoration:
                    page == "neighborhood-guide" ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  "&:hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  },
                }}
              >
                {t("Neighborhood Guide")}
              </Button>
              <Button
                href="/contact"
                disableRipple
                sx={{
                  color: "black",
                  fontWeight: "100",
                  textDecoration: page == "contact" ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  "&:hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  },
                }}
              >
                {t("Contact")}
              </Button>
              <Box display="flex" justifyContent={"center"}>
                <FormControl
                  sx={{
                    color: "black",
                    border: "none", // Remove border
                    "& .MuiOutlinedInput-root": {
                      border: "none", // Remove border for outlined variant
                      "& fieldset": {
                        border: "none", // Remove fieldset border
                      },
                    },
                    "& .MuiInputBase-root": {
                      border: "none", // Remove border for input
                    },
                  }}
                >
                  <Select
                    value={prefLanguage}
                    onChange={handleLanguageChange}
                    disableunderline="true"
                    displayEmpty
                    renderValue={(selected) => {
                      if (!selected) {
                        return <span>{"ENGLISH"}</span>;
                      }
                      const selectedItem = {
                        en: "ENGLISH",
                        cn: "中文",
                      }[selected];
                      return <span>{selectedItem}</span>;
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: "#333", // Change dropdown background color
                          color: "white", // Change text color of menu items
                          "& .MuiMenuItem-root": {
                            "&:hover": {
                              backgroundColor: "#555", // Change hover color for menu items
                            },
                          },
                        },
                      },
                    }}
                    sx={{
                      fontSize: "0.9rem",
                      color: "black",
                      fontWeight: "100",
                      "& .MuiSelect-select": {
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      },
                      "& .MuiSelect-icon": {
                        color: "black",
                      },
                      "&:before, &:after": {
                        border: "none",
                      },
                    }}
                  >
                    <MenuItem value="en">ENGLISH</MenuItem>
                    <MenuItem value="cn">中文</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Drawer>
        </Box>
      )}
    </Stack>
  );
};

export default Header;
