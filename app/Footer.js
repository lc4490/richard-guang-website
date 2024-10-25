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
import { FaTiktok, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = ({}) => {
  return (
    <Stack
      width="100%"
      padding={5}
      display="flex"
      flexDirection={"row"}
      justifyContent="space-between"
    >
      <Typography sx={{ fontFamily: "helvetica", fontWeight: "100" }}>
        WECHAT: guang-rich
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
        <Typography sx={{ fontFamily: "helvetica", fontWeight: "100" }}>
          RGUANG@ELLIMAN.COM
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
