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
          key={item.id}
            src={item.img}
            className="absolute hidden object-contain md:block"
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
      <Box className="w-5/6 mx-auto md:w-4/6">
        <Grid container columnSpacing={8} rowSpacing={3}>
          <Grid item xs={12}>
            <Box textAlign="center" mb={4}>
              <Typography
                fontSize={{ sm: 50, xs: 40 }}
                fontWeight={700}
                className="text-[#FFAA00]"
              >
                Testimonials
              </Typography>
              <Typography
                fontSize={{ sm: 18, xs: 16 }}
                className="text-neutral-400"
              >
              Read what satisfied clients have to say about the experience of working with a dedicated professional committed to excellence.
              </Typography>
            </Box>
          </Grid>
          {reviews.map((review) => (
            <Grid item key={review.id} lg={4} sm={6} xs={12}>
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
