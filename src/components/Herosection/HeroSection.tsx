import { Grid, Box, Typography, Link } from "@mui/material";
import { FacebookOutlined, X, LinkedIn, Instagram } from "@mui/icons-material";
import Statistics from "./Statistics";

const HeroSection: React.FC = () => {
  return (
    <Box className="py-16" bgcolor={"#0D0D0D"}>
      <Box className="relative">
        <Box>
          <img
            src="../src/assets/HI.svg"
            className="absolute lg:block hidden top-10 left-[38rem]"
            alt="Hi"
          />
        </Box>
        <Box>
          <img
            src="../src/assets/wave.svg"
            className="absolute object-contain top-[-75px]"
            alt="Waves"
          />
        </Box>
      </Box>
      <Box className="w-5/6 mx-auto h-full bg-[#0D0D0D]">
        <Grid container>
          <Grid
            item
            className="lg:order-1 order-2"
            md={6}
            xs={12}
            sx={{ zIndex: 99 }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              mt={{ md: 9, xs: 5 }}
            >
              <Box>
                <Typography
                  fontSize={{ md: 35, xs: 25 }}
                  fontWeight="bold"
                  fontFamily="'Poppins','sans-serif'"
                  className="text-white"
                >
                  I am Arslan
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontSize={{ md: 66, xs: 48 }}
                  fontWeight={800}
                  fontFamily="'Poppins','sans-serif'"
                  className="dev"
                >
                  Web Developer
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontSize={16}
                  fontFamily="'Poppins','sans-serif'"
                  className="text-[#989898]"
                >
                  I break down complex user experience problems to create
                  integrity Solutions that connect billions of people.
                </Typography>
              </Box>
              <Box display="flex" gap={2} mt={4}>
                <Link href="#" className="border-2 rounded-full p-2">
                  <FacebookOutlined className="text-orange-600" />
                </Link>
                <Link href="#" className="border-2 rounded-full p-2">
                  <X className="text-orange-600" />
                </Link>
                <Link href="#" className="border-2 rounded-full p-2">
                  <LinkedIn className="text-orange-600" />
                </Link>
                <Link href="#" className="border-2 rounded-full p-2">
                  <Instagram className="text-orange-600" />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            className="lg:order-2 order-1"
            display="flex"
            justifyContent={{ md: "end", xs: "center" }}
            md={6}
            xs={12}
          >
            <Box className="rotate-6 relative bg-gradient-to-b from-[#E8112B] to-yellow-500 md:h-[448.09px] sm:h-[350px] h-[280px] md:w-[420.03px] sm:w-[350px] w-[280px] md:mt-9 -mt-5 overflow-hidden rounded-3xl">
              <img
                src="../src/assets/Img.png"
                className="-rotate-6 object-fit absolute -bottom-28"
                alt="IMG"
              />
            </Box>
          </Grid>
        </Grid>
        <Statistics />
      </Box>
    </Box>
  );
};

export default HeroSection;
