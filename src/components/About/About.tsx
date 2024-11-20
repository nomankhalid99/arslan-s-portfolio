import { Box, Grid, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box className="bg-[#121212] py-16">
      <Grid container>
        <Grid item xs={12}>
          <Box textAlign="center" className="w-4/5 mx-auto md:mt-10 sm:w-3/5" gap={6}>
            <Typography
              fontSize={{ sm: 50, xs: 40 }}
              fontWeight={700}
              fontFamily={"Poppins"}
              className="text-[#FFAA00]"
            >
              About
            </Typography>
            <Typography
              fontSize={{ sm: 24, xs: 16 }}
              fontFamily={"Poppins"}
              className="text-white"
            >
              Proficiency in developing dynamic, scalable, and responsive web
              applications, machine learning models, and intelligent chatbot
              solutions. Expertise spans modern web technologies, including
              MongoDB, Express.js, React, and Node.js, along with advanced
              algorithms and natural language processing techniques. Emphasis is
              placed on crafting innovative solutions that drive business
              growth, optimize user engagement, and automate complex tasks. A
              strong focus on clean code, efficient problem-solving, and
              cutting-edge technologies ensures impactful and reliable digital
              experiences.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
