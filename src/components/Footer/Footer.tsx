import { FacebookOutlined, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Box, Divider, Link, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "../../assets/Logo.png";

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  // Refs for sections to observe when they come into view
  const logoRef = useRef(null);
  const socialIconsRef = useRef(null);
  const linksRef = useRef(null);

  // Use the useInView hook to detect if the sections are in view
  const isLogoInView = useInView(logoRef, { once: true });
  const areSocialIconsInView = useInView(socialIconsRef, { once: true });
  const areLinksInView = useInView(linksRef, { once: true });

  return (
    <Box className="bg-[#121212] pt-16 pb-8">
      <Box className="w-5/6 mx-auto">
        {/* Logo Section */}
        <Box className="flex justify-center">
          <motion.img
            src={Logo}
            className="h-8 sm:h-12"
            alt="Logo"
            ref={logoRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isLogoInView ? 1 : 0,
              y: isLogoInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
          />
        </Box>

        {/* Social Icons Section */}
        <Box ref={socialIconsRef} className="flex justify-center gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: areSocialIconsInView ? 1 : 0,
              y: areSocialIconsInView ? 0 : 50,
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href="#" className="p-2 border-2 rounded-full">
              <FacebookOutlined className="text-[#FFAA00]" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: areSocialIconsInView ? 1 : 0,
              y: areSocialIconsInView ? 0 : 50,
            }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="#" className="p-2 border-2 rounded-full">
              <X className="text-[#FFAA00]" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: areSocialIconsInView ? 1 : 0,
              y: areSocialIconsInView ? 0 : 50,
            }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link href="#" className="p-2 border-2 rounded-full">
              <LinkedIn className="text-[#FFAA00]" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: areSocialIconsInView ? 1 : 0,
              y: areSocialIconsInView ? 0 : 50,
            }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="#" className="p-2 border-2 rounded-full">
              <Instagram className="text-[#FFAA00]" />
            </Link>
          </motion.div>
        </Box>

        {/* Navigation Links Section */}
        <Box ref={linksRef} className="flex justify-center gap-4 my-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: areLinksInView ? 1 : 0,
              y: areLinksInView ? 0 : 50,
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link
              href="#services"
              style={{ textDecoration: "none", color: "#9B9B9B" }}
              className="hover:text-[#FFAA00]"
            >
              Services
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: areLinksInView ? 1 : 0,
              y: areLinksInView ? 0 : 50,
            }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link
              href="#portfolio"
              style={{ textDecoration: "none", color: "#9B9B9B" }}
            >
              Portfolio
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: areLinksInView ? 1 : 0,
              y: areLinksInView ? 0 : 50,
            }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              href="#skills"
              style={{ textDecoration: "none", color: "#9B9B9B" }}
            >
              Top Skills
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: areLinksInView ? 1 : 0,
              y: areLinksInView ? 0 : 50,
            }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="#testimonials"
              style={{ textDecoration: "none", color: "#9B9B9B" }}
            >
              Testimonials
            </Link>
          </motion.div>
        </Box>

        {/* Divider and Copyright */}
        <Divider className="gradient-border-bottom" />
        <Box className="flex justify-center mt-8">
          <Typography className="text-neutral-400">
            Copyright © {date}. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
