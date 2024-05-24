import { SchoolOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CustomBox from "./CustomBox";

const Education:React.FC = () => {
  return (
    <Box className="gap-5 flex flex-col">
      <Box className="flex gap-3 items-center">
        <SchoolOutlined
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
          Education
        </Typography>
      </Box>
      <CustomBox
        backgroundColor="bg-[#0D0D0D]"
        date="2015-2019"
        title="GIFT University"
        subtitle="BS-Computer Science"
        dateFontSize={{ sm: 22, xs: 16 }}
        titleFontSize={{ sm: 27, xs: 21 }}
        subtitleFontSize={{ sm: 14, xs: 12 }}
      />
      <CustomBox
        backgroundColor="bg-[#0D0D0D]"
        date="2013-2015"
        title="Intermidiate(pre-Engn.)"
        subtitle="DPS Okara"
        dateFontSize={{ sm: 22, xs: 16 }}
        titleFontSize={{ sm: 27, xs: 21 }}
        subtitleFontSize={{ sm: 14, xs: 12 }}
      />
      <CustomBox
        backgroundColor="bg-[#0D0D0D]"
        date="2013"
        title="Matric(Science Grp)"
        subtitle="DPS Okara"
        dateFontSize={{ sm: 22, xs: 16 }}
        titleFontSize={{ sm: 27, xs: 21 }}
        subtitleFontSize={{ sm: 14, xs: 12 }}
      />
    </Box>
  );
};

export default Education;
