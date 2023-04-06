import { css, keyframes } from '@emotion/css';
import { Box } from '@mui/material';
import { ReactNode } from 'react';
import ChangeHighlight from 'react-change-highlight';
const bounce = keyframes`
from {
   opacity: 0.6
 }
 to {
   opacity: 1;
 }
`;

interface ChagneFadeIntProps {
  children: ReactNode;
  sx?: any;
}

const ChagneFadeIn = ({ children, sx }: ChagneFadeIntProps) => {
  return (
    <Box sx={sx}>
      <ChangeHighlight
        highlightClassName={css`
          background-color: 'none';
          animation: ${bounce} 0.3s ease;
          transition: all 0 ease;
        `}
      >
        {children}
      </ChangeHighlight>
    </Box>
  );
};

export default ChagneFadeIn;
