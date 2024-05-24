import { Box, Grid } from "@mui/material";
import Experience from "./Experience";
import Education from "./Education";

const ExpEdu :React.FC = () => {
  return (
    <Box  className="py-16 relative bg-[#121212]">
      <Box className="md:w-4/6 w-5/6 mx-auto">
        <Grid container columnSpacing={12}>
          <Grid item md={6} xs={12}>
            <Experience />
          </Grid>
          <Grid item md={6} xs={12} mt={{ md: 0, xs: 3 }}>
            <Education />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExpEdu;
