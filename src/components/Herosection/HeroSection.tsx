import { Box, Typography, Link } from "@mui/material";
import Statistics from "./Statistics";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
                  'url("https://img.freepik.com/free-photo/employee-showing-appreciation-each-other_23-2149357542.jpg")',
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
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: 1,
                }}
              />
              <Box className="relative z-10 w-5/6 mx-auto">
                <HeroContent
                  title="Fastest And Most Lightweight WP Theme"
                  description="Create Amazing Business Websites"
                  body="Build professional and responsive websites tailored to your business needs. Engage your audience with sleek designs, powerful functionality, and user-friendly experiences."
                  link="#contact"
                  linkText="Get Started"
                />
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
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: 1,
                }}
              />
              <Box className="relative z-10 flex justify-end w-5/6 mx-auto">
                <HeroContent
                  title="Transform Data Into Insights"
                  description="Power Your Solutions with Machine Learning"
                  body="Leverage predictive analytics and cutting-edge algorithms to uncover trends, improve decision-making, and drive innovation across your projects."
                  link="#contact"
                  linkText="Get Started"
                />
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
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                }}
              />
              <Box className="relative z-10 w-5/6 mx-auto">
                <HeroContent
                  title="Revolutionize Customer Interaction"
                  description="Intelligent Chatbot Solutions"
                  body="Deliver 24/7 customer support, automate responses, and engage users seamlessly using advanced natural language processing and AI-powered bots."
                  link="#contact"
                  linkText="Get Started"
                />
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Statistics />
      </Box>
    </Box>
  );
};

interface HeroContentProps {
  title: string;
  description: string;
  body: string;
  link: string;
  linkText: string;
}

const HeroContent: React.FC<HeroContentProps> = ({
  title,
  description,
  body,
  link,
  linkText,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      className="flex flex-col items-start w-full gap-3 md:gap-5 md:w-1/2"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h6"
          fontWeight={"bold"}
          className="text-xl font-bold text-white md:text-2xl"
        >
          {title}
        </Typography>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-bold leading-snug text-white md:text-6xl font-poppins"
      >
        {description}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Typography
          variant="body1"
          className="text-base text-neutral-300 font-poppins"
        >
          {body}
        </Typography>
      </motion.div>
      <motion.div
      className="mt-5"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Link
          href={link}
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
          }}
          className="py-3 px-7 rounded-md bg-[#FFAA00]"
        >
          {linkText}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
