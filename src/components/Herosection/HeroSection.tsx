import {  Box, Typography, Link } from "@mui/material";
import Statistics from "./Statistics";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeroSection: React.FC = () => {
  return (
    <Box className="" bgcolor={"#0D0D0D"}>
      <Box className="w-full relative h-full bg-[#0D0D0D]">
        <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true}>
          <SwiperSlide>
            <Box
              sx={{
                height: "100vh",
                backgroundImage:
                  'url("https://img.freepik.com/free-photo/employee-showing-appreciation-each-other_23-2149357542.jpg?t=st=1732107022~exp=1732110622~hmac=6ae3b0035f796ddd7a531ed167b6426c3c83afd0846ac0d5a3b57e66e5c73716&w=1380")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust alpha for desired transparency
                  zIndex: 1,
                }}
              />
              <Box className="relative z-10 w-5/6 mx-auto">
                <Box className="flex flex-col items-start w-full gap-3 md:gap-5 md:w-1/2">
                  <Typography
                    variant=""
                    className="text-xl font-bold text-white md:text-2xl"
                  >
                    Fastest And Most Lightweight WP Theme
                  </Typography>
                  <Typography
                    variant=""
                    className="text-4xl font-bold leading-snug text-white md:text-6xl font-poppins"
                  >
                    Create Amazing Business Websites
                  </Typography>
                  <Typography
                    variant=""
                    className="text-base text-neutral-300 font-poppins"
                  >
                    Build professional and responsive websites tailored to your
                    business needs. Engage your audience with sleek designs,
                    powerful functionality, and user-friendly experiences.  
                  </Typography>
                  <Link
                    href="#contact"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                    className="py-3 px-7 rounded-md bg-[#FFAA00]"
                  >
                    Get Started
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: "100vh",
                backgroundImage:
                  'url("https://img.freepik.com/free-photo/international-day-education-futuristic-style-with-robots_23-2150998722.jpg?t=st=1732109309~exp=1732112909~hmac=b0d9ce19b6e5ef89db7e31c7dc1175b2c1cc3f3b7a76c1532c8acb11e4a26edf&w=740")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                // flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust alpha for desired transparency
                  zIndex: 1,
                }}
              />
              <Box className="relative z-10 flex justify-end w-5/6 mx-auto">
                <Box className="flex flex-col items-start w-full gap-3 md:gap-5 md:w-1/2">
                  <Typography
                    variant=""
                    className="text-xl font-bold text-white md:text-2xl"
                  >
                    Power Your Solutions with Machine Learning
                  </Typography>
                  <Typography
                    variant=""
                    className="text-4xl font-bold leading-snug text-white md:text-6xl font-poppins"
                  >
                    Transform Data Into Insights
                  </Typography>
                  <Typography
                    variant=""
                    className="text-base text-neutral-300 font-poppins"
                  >
                    Leverage predictive analytics and cutting-edge algorithms to
                    uncover trends, improve decision-making, and drive
                    innovation across your projects.
                  </Typography>
                  <Link
                    href="#contact"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                    className="py-3 px-7 rounded-md bg-[#FFAA00]"
                  >
                    Get Started
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: "100vh",
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/artificial-intelligence-isometric-ai-robot-mobile-phone-screen-chatbot-app_39422-767.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust alpha for desired transparency
                  zIndex: 1,
                }}
              />
              <Box className="relative z-10 w-5/6 mx-auto">
                <Box className="flex flex-col items-start w-full gap-3 md:gap-5 md:w-1/2">
                  <Typography
                    variant=""
                    className="text-xl font-bold text-white md:text-2xl"
                  >
                    Revolutionize Customer Interaction
                  </Typography>
                  <Typography
                    variant=""
                    className="text-4xl font-bold leading-snug text-white md:text-6xl font-poppins"
                  >
                    Intelligent Chatbot Solutions
                  </Typography>
                  <Typography
                    variant=""
                    className="text-base text-neutral-300 font-poppins"
                  >
                    Deliver 24/7 customer support, automate responses, and
                    engage users seamlessly using advanced natural language
                    processing and AI-powered bots.
                  </Typography>
                  <Link
                    href="#contact"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                    className="py-3 px-7 rounded-md bg-[#FFAA00]"
                  >
                    Get Started
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Statistics />
      </Box>
    </Box>
  );
};

export default HeroSection;
