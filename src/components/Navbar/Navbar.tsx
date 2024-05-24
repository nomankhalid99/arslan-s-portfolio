import { Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const mobileView = useMediaQuery("(min-width:920px)");

  return (
    <Box className="bg-[#0D0D0D] p-3">
      <Box className="sm:w-5/6 w-11/12 mx-auto">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap={2} alignItems="center">
            <img
              src="../src/assets/Logo.svg"
              className="h-[69px] w-[74px]"
              alt="LOGO"
            />
            {mobileView ? (
              <Typography className="text-neutral-400">
                devarslan99@gmail.com
              </Typography>
            ) : (
              ""
            )}
          </Box>
          {mobileView ? (
            <Box display="flex" gap={4} alignItems="center">
              <Link
                href="#services"
                className="hover:text-orange-600 text-#9B9B9B"
                style={{ textDecoration: "none", color: "#9B9B9B" , }}
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                style={{ textDecoration: "none", color: "#9B9B9B" }}
                className="hover:text-orange-600 text-#9B9B9B"
              >
                Portfolio
              </Link>
              <Link
                href="#skills"
                style={{ textDecoration: "none", color: "#9B9B9B" }}
                className="hover:text-orange-600 text-#9B9B9B"
              >
                Top Skills
              </Link>
              <Link
                href="#testimonials"
                style={{ textDecoration: "none", color: "#9B9B9B" }}
                className="hover:text-orange-600 text-#9B9B9B"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                className="bg-gradient-to-b from-orange-600 to-yellow-500 p-2 rounded-md"
              >
                Contact
              </Link>
            </Box>
          ) : (
            <IconButton onClick={() => setToggleMenu(!toggleMenu)}>
              <Menu className="text-2xl text-orange-600 self-center" />
            </IconButton>
          )}
        </Box>

        {!mobileView && toggleMenu && (
          <Box
            display={"flex"}
            mt={2}
            flexDirection={"column"}
            gap={3}
            alignItems="flex-start"
            fontSize={16}
          >
            <Link
              href="#services"
              style={{ textDecoration: "none", color: "#9B9B9B" }}
              className="hover:text-orange-600 text-#9B9B9B"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              style={{ textDecoration: "none", color: "#9B9B9B" }}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Portfolio
            </Link>
            <Link
              href="#skills"
              style={{ textDecoration: "none", color: "#9B9B9B" }}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Top Skills
            </Link>
            <Link
              href="#testimonials"
              style={{ textDecoration: "none", color: "#9B9B9B" }}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              style={{ textDecoration: "none", color: "black" }}
              className="bg-gradient-to-b from-[#E8112B] to-yellow-500 p-2 rounded-md"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Contact
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
