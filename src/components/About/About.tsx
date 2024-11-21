import { Box, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About: React.FC = () => {
  // Create refs for the heading and paragraph
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Use the useInView hook to track when the elements are in view
  const isHeadingInView = useInView(headingRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });

  return (
    <Box className="bg-[#121212] py-16">
      <Grid container>
        <Grid item xs={12}>
          <Box
            textAlign="center"
            className="w-4/5 mx-auto md:mt-10 sm:w-3/5"
            gap={6}
          >
            {/* Adding scroll-triggered animation for the heading */}
            <motion.div
              ref={headingRef} // Attach the ref to track this element
              initial={{ opacity: 0, y: -50 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Typography
                fontSize={{ sm: 50, xs: 40 }}
                fontWeight={700}
                fontFamily={"Poppins"}
                className="text-[#FFAA00]"
              >
                About
              </Typography>
            </motion.div>

            {/* Adding scroll-triggered animation for the paragraph */}
            <motion.div
              ref={paragraphRef} // Attach the ref to track this element
              initial={{ opacity: 0 }}
              animate={isParagraphInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <Typography
                fontSize={{ sm: 24, xs: 16 }}
                fontFamily={"Poppins"}
                className="text-white"
              >
                Proficiency in developing dynamic, scalable, and responsive web
                applications, machine learning models, and intelligent chatbot
                solutions. Expertise spans modern web technologies, including
                MongoDB, Express.js, React, and Node.js, along with advanced
                algorithms and natural language processing techniques. Emphasis
                is placed on crafting innovative solutions that drive business
                growth, optimize user engagement, and automate complex tasks. A
                strong focus on clean code, efficient problem-solving, and
                cutting-edge technologies ensures impactful and reliable digital
                experiences.
              </Typography>
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
