import { Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Logo from '../../assets/Logo.png';

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const mobileView = useMediaQuery("(min-width:920px)");

  return (
    <Box className="absolute z-50 w-full p-3 ">
      <Box className="w-11/12 mx-auto sm:w-5/6">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap={2} alignItems="center">
            <img
              src={Logo}
              className="md:h-[49px] h-[30px]"
              alt="LOGO"
            />
            {/* {mobileView ? (
              <Typography className="text-neutral-400">
                devarslan99@gmail.com
              </Typography>
            ) : (
              ""
            )} */}
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
                  // background: "linear-gradient(90deg, rgba(48,48,48,1) 0%, rgba(255,170,0,1) 26%)"
                }}
                className="py-2 px-5 rounded-md bg-[#FFAA00]"
              >
                Contact
              </Link>
            </Box>
          ) : (
            <IconButton onClick={() => setToggleMenu(!toggleMenu)}>
              <Menu className="self-center text-2xl text-[#FFAA00]" />
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
            bgcolor={'#000000'}
            p={3}
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
              className="bg-[#FFAA00] p-2 rounded-md"
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
