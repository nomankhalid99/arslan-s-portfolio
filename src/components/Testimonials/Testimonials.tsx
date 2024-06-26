import { Box, Grid, Typography } from "@mui/material";
import { reviews, testimonialsData } from "../../data";
import React from "react";

const Testimonials :React.FC = () => {
  
  return (
    <Box id="testimonials" className="bg-[#121212] relative pt-16 md:pb-36 pb-16">
      <Box>
        <img
          src="../src/assets/wave4.svg"
          className="absolute object-cotain -top-0 "
          alt="Waves"
        />
      </Box>
      {testimonialsData.map((item) => (
        <Box>
          <img
            src={item.img}
            className="absolute object-contain md:block hidden"
            alt="Waves"
            style={{
              top: item.top !== null ? `${item.top}%` : "auto",
              left: item.left !== null ? `${item.left}%` : "auto",
              bottom: item.bottom !== null ? `${item.bottom}%` : "auto",
              right: item.right !== null ? `${item.right}%` : "auto",
            }}
          />
        </Box>
      ))}
      <Box className="md:w-4/6 w-5/6 mx-auto">
        <Grid container columnSpacing={8} rowSpacing={3}>
          <Grid item xs={12}>
            <Box textAlign="center" mb={4}>
              <Typography
                fontSize={{ sm: 50, xs: 40 }}
                fontWeight={700}
                className="gradient-text"
              >
                Testimonials
              </Typography>
              <Typography
                fontSize={{ sm: 18, xs: 16 }}
                className="text-neutral-400"
              >
               Read what my satisfied clients have to say about working with me and my commitment to excellence.
              </Typography>
            </Box>
          </Grid>
          {reviews.map((review) => (
            <Grid item lg={4} sm={6} xs={12}>
              <Box className="gradient-border bg-[#121212] p-4 flex flex-col gap-4">
                <Typography fontSize={14} mt={6} className="text-neutral-400">
                  {review.review}
                </Typography>
                <Typography fontSize={16} className="text-neutral-400">
                  {review.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
