import { FacebookOutlined, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Box, Divider, Link, Typography } from "@mui/material";

const Footer: React.FC = () => {

    const date = new Date().getFullYear()

  return (
    <Box className="bg-[#121212] pt-16 pb-8">
      <Box className="w-5/6 mx-auto">
        <Box className="flex justify-center ">
          <img src="../src/assets/Logo.png" className="h-8 sm:h-12" alt="Logo" />
        </Box>
        <Box className="flex justify-center gap-4 mt-6">
          <Link href="#" className="p-2 border-2 rounded-full">
            <FacebookOutlined className="text-[#FFAA00]" />
          </Link>
          <Link href="#" className="p-2 border-2 rounded-full">
            <X className="text-[#FFAA00]" />
          </Link>
          <Link href="#" className="p-2 border-2 rounded-full">
            <LinkedIn className="text-[#FFAA00]" />
          </Link>
          <Link href="#" className="p-2 border-2 rounded-full">
            <Instagram className="text-[#FFAA00]" />
          </Link>
        </Box>
        <Box className="flex justify-center gap-4 my-6">
          <Link
            href="#services"
            style={{ textDecoration: "none", color: "#9B9B9B" }}
            className="hover:text-[#FFAA00] text-#9B9B9B"
          >
            Services
          </Link>
          <Link href="#portfolio" style={{ textDecoration: "none", color: "#9B9B9B" }}>
            Portfolio
          </Link>
          <Link href="#skills" style={{ textDecoration: "none", color: "#9B9B9B" }}>
            Top Skills
          </Link>
          <Link
            href="#testimonials"
            style={{ textDecoration: "none", color: "#9B9B9B" }}
          >
            Testimonials
          </Link>
        </Box>
        <Divider className="gradient-border-bottom"/>
        <Box className="flex justify-center mt-8">
            <Typography className="text-neutral-400">Copyright © {date}. All rights reserved.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
