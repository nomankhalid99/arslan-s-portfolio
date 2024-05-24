import { Box, Grid, Typography } from "@mui/material";
import "../../App.css";
import { services } from "../../data";

const Services: React.FC = () => {
  return (
    <Grid id="services" className="py-16 bg-[#0D0D0D]">
      <Box textAlign="center">
        <Typography
          fontSize={{ sm: 50, xs: 40 }}
          fontWeight={700}
          className="gradient-text"
        >
          Qualities Services
        </Typography>
        <Typography
          fontSize={{ sm: 18, xs: 14 }}
          className="text-neutral-500 p-2"
        >
          Discover my comprehensive range of web development services tailored
          to meet your business needs and drive growth.
        </Typography>
      </Box>
      <Box className="mt-10 flex flex-col gap-5">
        {services.map((service) => (
          <Box
            key={service.id}
            className={`flex md:flex-row flex-col justify-between ${
              service.id === 1
                ? "rounded-lg gradient-border"
                : "gradient-border-bottom"
            } items-center md:w-3/4 w-5/6 mx-auto p-5`}
          >
            <Typography fontSize={24} fontWeight={600} className="text-white">
              {service.service}
            </Typography>
            <Box className="md:w-3/6 w-[99%] mx-auto md:mt-0 mt-2">
              {" "}
              <Typography
                fontSize={14}
                className="text-neutral-400"
                textAlign="center"
              >
                {service.description}
              </Typography>
            </Box>
            <Box className="md:block hidden">{service.icon}</Box>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default Services;
