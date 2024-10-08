import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function TextRating() {
  const [value, setValue] = React.useState(5);

  return (
    <Box>
      <Rating
        name="read-only"
        value={value}
      />
    </Box>
  );
}
