import { Box, Grid, Typography } from "@mui/material";
import "../../App.css";
import { services } from "../../data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Wave2 from '../../assets/wave2.svg'

const Services: React.FC = () => {
  return (
    <Grid id="services" className="py-16 bg-[#0D0D0D]">
         <Box>
        <img
          src={Wave2}
          className="absolute object-contain -top-30"
          alt="Waves"
        />
      </Box>
      <Box textAlign="center">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            fontSize={{ sm: 50, xs: 40 }}
            fontWeight={700}
            className="text-[#FFAA00]"
          >
            How can we help you?
          </Typography>
        </motion.div>

        {/* Description Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography fontSize={{ sm: 18, xs: 14 }} className="p-2 text-neutral-500">
            Discover comprehensive range of services tailored to meet your business needs and drive growth.
          </Typography>
        </motion.div>
      </Box>

      <Box className="flex flex-col gap-5 mt-10">
        {services.map((service) => {
          // Create a ref for each service card
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              ref={ref} // Attach the ref to the motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: service.id * 0.2 }} // Delay based on the service id
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
                <Typography fontSize={14} className="text-neutral-400" textAlign="center">
                  {service.description}
                </Typography>
              </Box>
              <Box className="hidden md:block">{service.icon}</Box>
            </motion.div>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Services;
