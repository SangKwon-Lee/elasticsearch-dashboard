import { Card, Typography, useTheme, Box } from '@mui/material';
import Square1 from '../../assets/images/1-square-fill.svg';
import Square2 from '../../assets/images/2-square-fill.svg';
import Square3 from '../../assets/images/3-square-fill.svg';
import { TopThreeWidgetProps } from '../dashboard/dashboard/Dashboard.Type';

const TopThreeWidget = ({ data, isPercent }: TopThreeWidgetProps) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        height: '100%',
        backgroundColor: theme.palette.primary.darker,
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
        {data &&
          data.map((data, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <Box sx={{ color: 'common.white', mr: 2, mb: 1 }}>
                <Typography variant="h6" sx={{ opacity: 0.72 }} color={'white'} fontWeight={700}>
                  {data.name}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {data.topData.map((data, index) => (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }} key={index}>
                    <img src={index === 0 ? Square1 : index === 1 ? Square2 : Square3} alt="" />
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                      {isPercent
                        ? `  ${data.name} - ${(data.data * 10).toFixed(1)}%`
                        : `  ${data.name} - ${data.data}`}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
      </Box>
    </Card>
  );
};

export default TopThreeWidget;
