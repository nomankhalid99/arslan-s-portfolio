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
          className="text-[#FFAA00]"
        >
         How can we help you?
        </Typography>
        <Typography
          fontSize={{ sm: 18, xs: 14 }}
          className="p-2 text-neutral-500"
        >
          Discover comprehensive range of services tailored
          to meet your business needs and drive growth.
        </Typography>
      </Box>
      <Box className="flex flex-col gap-5 mt-10">
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
            <Box className="hidden md:block">{service.icon}</Box>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default Services;
