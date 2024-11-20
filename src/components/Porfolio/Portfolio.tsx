import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { data } from "../../data"; // Make sure data is properly imported

const Portfolio: React.FC = () => {
  // const [visibleItems, setVisibleItems] = useState(6);
  // const [isExpanded, setIsExpanded] = useState(false);

  // const handleToggleView = () => {
  //   console.log("Before toggle: ", visibleItems, isExpanded);
  //   if (isExpanded) {
  //     setVisibleItems(6);
  //   } else {
  //     setVisibleItems(data.length);
  //   }
  //   setIsExpanded(!isExpanded);
  //   console.log("After toggle: ", visibleItems, isExpanded);
  // };

  return (
    <Box id="portfolio" className="bg-[#0D0D0D] relative py-16">
      <Box>
        <img
          src="../src/assets/wave2.svg"
          className="absolute object-contain -top-30"
          alt="Waves"
        />
      </Box>
      <Box className="w-5/6 mx-auto">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box textAlign="center" mb={4}>
              <Typography
                fontSize={{ sm: 50, xs: 40 }}
                fontWeight={700}
                className="text-[#FFAA00]"
              >
                Portfolio
              </Typography>
              <Typography fontSize={{ sm: 18, xs: 16 }} className="text-neutral-400">
                Take a look at past projects and see how ideas have been transformed into impactful digital experiences.
              </Typography>
            </Box>
          </Grid>
          {data.map((item) => (
            <Grid
              position="relative"
              key={item.id}
              item
              lg={4}
              sm={6}
              xs={12}
              className="rounded-2xl"
            >
              <img
                src={item.img}
                className="cursor-auto rounded-2xl h-100 w-100"
                alt="img"
              />
            </Grid>
          ))}
        </Grid>
        {/* <Box textAlign="center" mt={4}>
          <button
            className="px-5 py-2 font-bold bg-yellow-500 rounded-md cursor-pointer"
            // onClick={handleToggleView}
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Portfolio;
