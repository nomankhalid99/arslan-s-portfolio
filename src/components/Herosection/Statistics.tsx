import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Statistics: React.FC = () => {
  return (
    <Box className="w-5/6 relative mx-auto bg-[#121212] p-6 z-50">
      <Grid container>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          {/* Animate each box from the left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box className="flex items-center justify-center gap-2 ms-5 md:justify-start">
              <Typography
                fontSize={{ sm: 70, xs: 50 }}
                fontWeight={500}
                className="text-white"
              >
                10
              </Typography>
              <Typography
                fontSize={{ sm: 18, xs: 14 }}
                fontWeight={500}
                className="text-neutral-500"
              >
                Years of <br /> Experience
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Delay for sequential animation
          >
            <Box className="flex items-center justify-center gap-2 md:justify-start">
              <Typography
                fontSize={{ sm: 70, xs: 50 }}
                fontWeight={500}
                className="text-white"
              >
                200+
              </Typography>
              <Typography
                fontSize={{ sm: 18, xs: 14 }}
                fontWeight={500}
                className="text-neutral-500"
              >
                Project <br /> Completed
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }} // Delay for sequential animation
          >
            <Box className="flex items-center justify-center gap-2 md:justify-start">
              <Typography
                fontSize={{ sm: 70, xs: 50 }}
                fontWeight={500}
                className="text-white"
              >
                150
              </Typography>
              <Typography
                fontSize={{ sm: 18, xs: 14 }}
                fontWeight={500}
                className="text-neutral-500"
              >
                Happy <br /> Clients
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistics;
