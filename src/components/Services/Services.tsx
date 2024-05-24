import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { skillsData } from "../../data";

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scrollStep = 1; // Adjust the scroll step
    const scrollSpeed = 20; // Adjust the scroll speed

    const scroll = () => {
      container.scrollLeft += scrollStep;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0; // Reset to the beginning
      }
    };

    const interval = setInterval(scroll, scrollSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box id="skills" className="bg-[#0D0D0D] py-16">
      <Box className="w-5/6 mx-auto">
        <Grid container spacing={3}>
          <Grid item xs={12} zIndex={99}>
            <Box textAlign="center" mb={4}>
              <Typography
                fontSize={{ sm: 50, xs: 40 }}
                fontWeight={700}
                className="gradient-text"
              >
                Top Skills
              </Typography>
              <Typography
                fontSize={{ sm: 18, xs: 16 }}
                className="text-neutral-400"
              >
                Explore the diverse skill set that powers my innovative and
                effective solutions.
              </Typography>
            </Box>
          </Grid>
          <Box className="relative mt-10 md:h-[353px] h-[250px] w-full">
            <Box
              ref={containerRef}
              className="md:h-[353px] h-[250px] w-full overflow-x-auto overflow-y-hidden"
              // style={{ whiteSpace: "nowrap" }}
            >
              <Box className="md:w-[2600px] w-[1680px] gap-4 pt-2 ps-2 flex">
                {skillsData.map((skill) => (
                  <Box
                    key={skill.id}
                    className="gradient-border p-6 flex flex-col items-center gap-3 bg-[#121212] md:h-[300px] h-[240px] md:w-[310px] w-[205px]"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="object-contain sm:h-36 h-24"
                    />
                    <Typography
                      fontSize={{ sm: 30, xs: 25 }}
                      className="text-orange-600"
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
