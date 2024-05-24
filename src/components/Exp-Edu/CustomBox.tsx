// CustomBox.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface CustomBoxProps {
  backgroundColor?: string;
  padding?: number;
  borderRadius?: number;
  date: string;
  title: string;
  subtitle: string;
  dateFontSize?: { sm: number; xs: number };
  titleFontSize?: { sm: number; xs: number };
  subtitleFontSize?: { sm: number; xs: number };
}

const CustomBox: React.FC<CustomBoxProps> = ({
  backgroundColor,
  padding = 3,
  borderRadius = 4,
  date,
  title,
  subtitle,
  dateFontSize,
  titleFontSize,
  subtitleFontSize ,
}) => {
  return (
    <Box zIndex={999} className={backgroundColor} p={padding} borderRadius={borderRadius}>
      <Typography fontSize={dateFontSize} className="text-orange-600">
        {date}
      </Typography>
      <Typography fontSize={titleFontSize} fontWeight={600} className="text-white">
        {title}
      </Typography>
      <Typography fontSize={subtitleFontSize} className="text-white">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default CustomBox;
