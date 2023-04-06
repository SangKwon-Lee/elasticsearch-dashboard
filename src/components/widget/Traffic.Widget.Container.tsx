import { Box, Card, Typography, useTheme } from '@mui/material';
import { formatBytes } from 'src/utils/formatBytes';

interface TrafficWidgetProps {
  data?: any;
}

const TrafficWidget = ({ data }: TrafficWidgetProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        p: 2,
        backgroundColor: theme.palette.primary.darker,
      }}
    >
      {data?.data > 0 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <Typography variant="subtitle1" color={theme.palette.primary.lighter}>
            {data?.name}
          </Typography>
          <Typography variant="h4" fontWeight={700} color={theme.palette.primary.lighter}>
            {formatBytes(data?.data)}
          </Typography>
          <Typography fontSize={13} color={theme.palette.primary.lighter} fontWeight={700}>
            총 전송량 {formatBytes(data?.total)}
          </Typography>
        </Box>
      )}
    </Card>
  );
};

export default TrafficWidget;
