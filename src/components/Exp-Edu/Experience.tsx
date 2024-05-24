import { MilitaryTech } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CustomBox from "./CustomBox";

const Experience: React.FC = () => {
  return (
    <Box className="gap-5 flex flex-col">
      <Box className="flex gap-3 items-center">
        <MilitaryTech
          sx={{
            fontSize: { sm: 50, xs: 40 },
            fontWeight: 700,
          }}
          className="text-orange-600"
        />
        <Typography
          fontSize={{ sm: 50, xs: 40 }}
          fontWeight={700}
          className="gradient-text"
        >
          Experience
        </Typography>
      </Box>
      <CustomBox
        backgroundColor="bg-[#0D0D0D]"
        date="2021-present"
        title="Senior Solution Architect"
        subtitle="eFAIDA Technologies"
        dateFontSize={{ sm: 22, xs: 16 }}
        titleFontSize={{ sm: 27, xs: 21 }}
        subtitleFontSize={{ sm: 14, xs: 12 }}
      />
      <CustomBox
        backgroundColor="bg-[#0D0D0D]"
        date="2020-2021"
        title="FullStack Developer"
        subtitle="Blockstacks Technologies Limted"
        dateFontSize={{ sm: 22, xs: 16 }}
        titleFontSize={{ sm: 27, xs: 21 }}
        subtitleFontSize={{ sm: 14, xs: 12 }}
      />
      <CustomBox
        backgroundColor="bg-[#0D0D0D]"
        date="2018-2020"
        title="Software Engineer"
        subtitle="Sizdom Technologies"
        dateFontSize={{ sm: 22, xs: 16 }}
        titleFontSize={{ sm: 27, xs: 21 }}
        subtitleFontSize={{ sm: 14, xs: 12 }}
      />
    </Box>
  );
};

export default Experience;
