import { Box, Card, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface CardUIProps {
  title?: string;
  children?: ReactNode;
  contents?: any;
  onClick?: any;
}

const CardUI = ({ children, title, contents, onClick }: CardUIProps) => (
  <Card sx={{ my: 2 }} onClick={onClick}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, pb: 1 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography color="#54D62C" variant="h6">
        {contents}
      </Typography>
    </Box>
    <Box sx={{ p: 2 }}>{children}</Box>
  </Card>
);

export default CardUI;
