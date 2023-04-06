import { Box, Card, Divider, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { ColorRed, ColorBlue } from 'src/utils/color';

interface IssueItemProps {
  item: any;
}

const IssueItemContainer = ({ item }: IssueItemProps) => {
  const router = useNavigate();
  return (
    <Card sx={{ p: 2 }} onClick={() => router('/issue/1')}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>{item.title}</Typography>
        <Box sx={{ backgroundColor: item.isOpen ? ColorRed : ColorBlue, p: 0.5 }}>
          {item.isOpen ? 'Open' : 'Close'}
        </Box>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography>타입: {item.type}</Typography>
        <Typography>노드: {item.name}</Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography>증상:</Typography>
          <Typography sx={{ ml: 1 }} color={ColorRed}>
            {item.reaseon}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default IssueItemContainer;
