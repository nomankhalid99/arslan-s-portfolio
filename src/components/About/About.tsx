import { Box, Grid, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box className="bg-[#121212] py-16">
      <Grid container>
        <Grid item xs={12}>
          <Box textAlign="center" className="sm:w-3/5 w-4/5 mx-auto" gap={6}>
            <Typography
              fontSize={{ sm: 50, xs: 40 }}
              fontWeight={700}
              fontFamily={"Poppins"}
              className="gradient-text"
            >
              About
            </Typography>
            <Typography
              fontSize={{ sm: 24, xs: 16 }}
              fontFamily={"Poppins"}
              className="text-white"
            >
              I am a passionate MERN stack developer with a knack for creating
              dynamic, responsive, and scalable web applications. With a strong
              foundation in MongoDB, Express.js, React, and Node.js, I
              specialize in building full-stack solutions that drive business
              growth and enhance user experiences. My commitment to clean code,
              efficient problem-solving, and continuous learning ensures that I
              deliver top-quality projects. Let’s transform your ideas into
              impactful digital products together.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
