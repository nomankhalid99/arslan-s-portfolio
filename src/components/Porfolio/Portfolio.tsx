import { useState } from "react";
import { Box, Grid, Link, Typography, Button } from "@mui/material";
import { data } from "../../data";

const Portfolio: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleItems(6);
    } else {
      setVisibleItems(data.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <Box id="portfolio" className="bg-[#0D0D0D] relative py-16">
      <Box>
        <img
          src="../src/assets/wave2.svg"
          className="absolute object-cotain -top-30"
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
                className="gradient-text"
              >
                Portfolio
              </Typography>
              <Typography fontSize={{sm:18 ,xs:16 }} className="text-neutral-400">
              Take a look at our past projects and see how we have transformed ideas into impactful digital experiences.
              </Typography>
            </Box>
          </Grid>
          {data.slice(0, visibleItems).map((item) => (
            <Grid
              position="relative"
              key={item.id}
              item
              lg={4}
              sm={6}
              xs={12}
              className="rounded-2xl"
            >
              <Box className="p-5 absolute z-30 h-[89%] w-[95%] rounded-2xl flex flex-col justify-center items-center whitespace-normal text-center text-black bg-gradient-to-b from-[#E8112B] to-yellow-500 opacity-0 transition duration-300 hover:opacity-90 hover:cursor-pointer">
                <Link
                  href={item.url}
                  target="_blank"
                  fontSize={25}
                  padding={8}
                  fontWeight={800}
                  style={{ textDecoration: "none", color: "black" }}
                  rel="noopener noreferrer"
                >
                  Go to Site
                </Link>
              </Box>
              <img
                src={item.img}
                className="rounded-2xl h-100 w-100"
                alt="img"
              />
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={4}>
          <Button
            sx={{ color: "black", fontWeight: 600 }}
            className="bg-gradient-to-b from-orange-600 to-yellow-500 p-2 rounded-md"
            onClick={handleToggleView}
          >
            {isExpanded ? "View Less" : "View More"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
