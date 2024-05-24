import { Box, Grid, Typography } from "@mui/material";

const Statistics: React.FC = () => {
  return (
    <Box className="w-4/5 relative mx-auto bg-[#121212] p-6 mt-16">
      <Grid container>
        <Grid item lg={4} md={6} xs={12}>
          <Box className="flex gap-2 items-center ms-5 md:justify-start justify-center">
            <Typography
              fontSize={{sm:70,xs:50}}
              fontWeight={500}
              className="gradient-text"
            >
              4
            </Typography>
            <Typography
              fontSize={{sm:18,xs:14}}
              fontWeight={500}
              className="text-neutral-500"
            >
              Years of <br/> Experience
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={6}  xs={12}>
          <Box className="flex gap-2 items-center md:justify-start justify-center">
            <Typography
              fontSize={{sm:70, xs:50}}
              fontWeight={500}
              className="gradient-text"
            >
              50+
            </Typography>
            <Typography
              fontSize={{sm:18,xs:14}}
              fontWeight={500}
              className="text-neutral-500"
            >
              Project <br /> Completed
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}  xs={12}>
          <Box className="flex gap-2 items-center md:justify-start justify-center">
            <Typography
              fontSize={{sm:70, xs:50}}
              fontWeight={500}
              className="gradient-text"
            >
              1.4k
            </Typography>
            <Typography
              fontSize={{sm:18,xs:14}}
              fontWeight={500}
              className="text-neutral-500"
            >
              Happy <br /> Clients
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistics;
