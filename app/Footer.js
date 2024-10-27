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
import {
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const Footer = ({}) => {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      {!isMobile && (
        <Stack
          width="100%"
          padding={5}
          display="flex"
          flexDirection={"row"}
          justifyContent="space-between"
        >
          <Typography sx={{ fontFamily: "helvetica", fontWeight: "100" }}>
            {t("WECHAT")}: guang-rich
          </Typography>
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
              }}
            >
              <FaTiktok style={{ fontSize: "20px" }} />
            </Button>
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
              }}
            >
              <FaYoutube style={{ fontSize: "20px" }} />
            </Button>
          </Stack>
          <Stack>
            <Typography sx={{ fontFamily: "helvetica", fontWeight: "100" }}>
              +1 (718) 496 7914
            </Typography>
            <Button href="mailto:rguang@elliman.com?...">
              <Box gap={1} display="flex" flexDirection="row">
                <FaEnvelope style={{ fontSize: "20px", color: "black" }} />
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "helvetica",
                    fontWeight: "100",
                  }}
                >
                  RGUANG@ELLIMAN.COM
                </Typography>
              </Box>
            </Button>
          </Stack>
        </Stack>
      )}
      {isMobile && (
        <Stack
          width="100%"
          padding={5}
          display="flex"
          flexDirection={"column"}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Stack
            flexDirection={"column"}
            // justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <Typography sx={{ fontFamily: "helvetica", fontWeight: "100" }}>
              +1 (718) 496 7914
            </Typography>
            <Button href="mailto:rguang@elliman.com?...">
              <Box gap={1} display="flex" flexDirection="row">
                <FaEnvelope style={{ fontSize: "20px", color: "black" }} />
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "helvetica",
                    fontWeight: "100",
                  }}
                >
                  RGUANG@ELLIMAN.COM
                </Typography>
              </Box>
            </Button>

            <Typography sx={{ fontFamily: "helvetica", fontWeight: "100" }}>
              {t("WECHAT")}: guang-rich
            </Typography>
          </Stack>
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
              }}
            >
              <FaTiktok style={{ fontSize: "20px" }} />
            </Button>
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
              }}
            >
              <FaYoutube style={{ fontSize: "20px" }} />
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Footer;
