import { Box, Grid, Typography } from "@mui/material";
import { reviews, testimonialsData } from "../../data";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView and motion from Framer Motion

const Testimonials: React.FC = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Use the useInView hook to track when the elements are in view
  const isHeadingInView = useInView(headingRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });

  return (
    <Box
      id="testimonials"
      className="bg-[#121212] relative pt-16 md:pb-36 pb-16"
    >
      <Box>
        <img
          src="../src/assets/wave4.svg"
          className="absolute object-contain -top-0 "
          alt="Waves"
        />
      </Box>
      {testimonialsData.map((item) => {
          const ref = useRef(null); // Create a reference for each background image
          const isInView = useInView(ref, { once: true }); //Trigger animation once when 20% of the image is in view

          return (
            <Box key={item.id}>
              {/* Animating the background image with motion.img */}
              <motion.img
                ref={ref}
                src={item.img}
                className="absolute hidden object-contain md:block"
                alt="Waves"
                style={{
                  top: item.top !== null ? `${item.top}%` : "auto",
                  left: item.left !== null ? `${item.left}%` : "auto",
                  bottom: item.bottom !== null ? `${item.bottom}%` : "auto",
                  right: item.right !== null ? `${item.right}%` : "auto",
                }}
                initial={{ opacity: 0, scale: 0.8 }} // Start with opacity 0 and slightly scaled down
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} // Fade in and scale up when in view
                transition={{ duration: 0.6 , delay: item.id * 0.2 }}
              />
            </Box>
          );
        })}

      <Box className="w-5/6 mx-auto md:w-4/6">
        <Grid container columnSpacing={8} rowSpacing={3}>
          <Grid item xs={12} zIndex={9999}>
            <Box textAlign="center" mb={4}>
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
                  Testimonials
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
                  Read what satisfied clients have to say about the experience
                  of working with a dedicated professional committed to
                  excellence.
                </Typography>
              </motion.div>
            </Box>
          </Grid>

          {/* Animating each testimonial box with useInView */}
          {reviews.map((review) => {
            const ref = useRef(null); // Create a reference for each review box
            const isInView = useInView(ref, { once: true }); // Trigger once when 20% of the box is in view

            return (
              <Grid item key={review.id} lg={4} sm={6} xs={12}>
                <motion.div
                  className="h-full"
                  ref={ref} // Attach the ref to each review box
                  initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move it down
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 100,
                  }} // Fade in and slide up when in view
                  transition={{ duration: 0.6 , delay: review.id * 0.2 }}
                >
                  <Box className="gradient-border bg-[#121212] p-4 h-full flex flex-col gap-4">
                    <Typography
                      fontSize={14}
                      mt={6}
                      className="text-neutral-400"
                    >
                      {review.review}
                    </Typography>
                    <Typography fontSize={16} className="text-neutral-400">
                      {review.name}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
