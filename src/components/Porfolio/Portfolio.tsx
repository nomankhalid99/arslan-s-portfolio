import { Box, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion"; // Import motion and useInView from Framer Motion
import { data } from "../../data"; // Ensure the data is imported properly
import { useRef } from "react";

const Portfolio: React.FC = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Use the useInView hook to track when the elements are in view
  const isHeadingInView = useInView(headingRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });

  return (
    <Box id="portfolio" className="bg-[#0D0D0D] relative py-16">
      <Box className="w-5/6 mx-auto">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box textAlign="center" mb={4}>
              {/* Animation for "Portfolio" title and description */}
              <motion.div
                ref={headingRef} // Attach the ref to track this element
                initial={{ opacity: 0, y: -50 }}
                animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  fontSize={{ sm: 50, xs: 40 }}
                  fontWeight={700}
                  className="text-[#FFAA00]"
                >
                  Portfolio
                </Typography>
              </motion.div>
              <motion.div
                ref={paragraphRef} // Attach the ref to track this element
                initial={{ opacity: 0 }}
                animate={isParagraphInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <Typography
                  fontSize={{ sm: 18, xs: 16 }}
                  className="text-neutral-400"
                >
                  Take a look at past projects and see how ideas have been
                  transformed into impactful digital experiences.
                </Typography>
              </motion.div>
            </Box>
          </Grid>
          {data.map((item) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <Grid
                position="relative"
                key={item.id}
                item
                lg={4}
                sm={6}
                xs={12}
                className="rounded-2xl"
              >
                <motion.div
                  ref={ref} // Attach the ref to the image container
                  key={item.id}
                  initial={{ opacity: 0, x: -100 }} // Start off-screen with opacity 0
                  animate={{
                    opacity: isInView ? 1 : 0, // Fade in when in view
                    x: isInView ? 0 : -100, // Move the image into place from the left
                  }}
                  transition={{ duration: 1, delay: item.id * 0.2  }} // Smooth animation
                >
                  <img
                    src={item.img}
                    className="w-full h-64 cursor-auto rounded-2xl"
                    alt="img"
                  />
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Portfolio;
