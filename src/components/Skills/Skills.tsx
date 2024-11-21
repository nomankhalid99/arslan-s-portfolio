import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { skillsData } from "../../data";
import { useInView, motion } from "framer-motion";

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scrollStep = 1;
    const scrollSpeed = 20;

    const scroll = () => {
      container.scrollLeft += scrollStep;
      if (container.scrollLeft >= container.scrollWidth) {
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, scrollSpeed);

    return () => clearInterval(interval);
  }, []);

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Use the useInView hook to track when the elements are in view
  const isHeadingInView = useInView(headingRef, { once: true });
  const isParagraphInView = useInView(paragraphRef, { once: true });

  return (
    <Box id="skills" className="bg-[#0D0D0D] py-16">
      <Box className="w-5/6 mx-auto">
        <Grid container spacing={3}>
          <Grid item xs={12} zIndex={99}>
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
                  Top Skills
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
                  Explore the diverse skill set that powers innovative and
                  effective solutions.
                </Typography>
              </motion.div>
            </Box>
          </Grid>
          <Box className="relative mt-10 md:h-[353px] h-[250px] w-full">
            <Box
              ref={containerRef}
              className="md:h-[353px] h-[250px] w-full overflow-x-auto overflow-y-hidden"
            >
              <Box className="md:w-[2600px] w-[1680px] gap-4 pt-2 ps-2 flex">
                {skillsData.map((skill) => (
                  <Box
                    key={skill.id}
                    className="gradient-border p-6 flex flex-col items-center gap-3 bg-[#121212] md:h-[300px] h-[240px] md:w-[310px] w-[205px]"
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="object-contain h-24 sm:h-36"
                    />
                    <Typography
                      fontSize={{ sm: 30, xs: 25 }}
                      className="text-[#FFAA00]"
                    >
                      {skill.percent}
                    </Typography>
                    <Typography
                      fontSize={{ sm: 24, xs: 20 }}
                      className="text-white"
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
