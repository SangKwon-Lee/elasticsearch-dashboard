import { Card, Typography, useTheme, Box } from '@mui/material';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { BaseOptionChart } from '../chart';
import Square1 from '../../assets/images/1-square-fill.svg';
import Square2 from '../../assets/images/2-square-fill.svg';
import Square3 from '../../assets/images/3-square-fill.svg';
import { RoundBartWidgetProps } from './Widget.type';

const RoundBartWidget = ({ data, icon }: RoundBartWidgetProps) => {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette.primary.main],
    chart: { sparkline: { enabled: true } },
    legend: { show: false },
    plotOptions: {
      radialBar: {
        hollow: { size: '60%' },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            color: 'white',
            fontSize: theme.typography.body1.fontSize,
            fontWeight: 700,
          },
        },
      },
    },
  });

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        height: '100%',
        backgroundColor: theme.palette.primary.darker,
        justifyContent: 'space-around',
      }}
    >
      {data && (
        <>
          <ReactApexChart
            width={86}
            height={86}
            type="radialBar"
            series={[Math.floor(data?.data * 100)]}
            options={chartOptions}
          />
          <Box sx={{ color: 'common.white' }}>
            <Typography variant="h5" sx={{ opacity: 0.72 }} color={'white'} fontWeight={700}>
              {data?.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {data.topData.map((data, index) => (
              <Box sx={{ display: 'flex', alignItems: 'center' }} key={index}>
                <img src={index === 0 ? Square1 : index === 1 ? Square2 : Square3} alt="" />
                <Typography variant="h6" sx={{ ml: 2, fontSize: 17 }}>
                  {data.name}-{Number(data.data * 100).toFixed(2)}%
                </Typography>
              </Box>
            ))}
          </Box>
          <img
            alt="img"
            src={icon}
            style={{
              width: 90,
              height: 90,
              opacity: 0.12,
              position: 'absolute',
              right: -30,
              color: theme.palette.primary.dark,
            }}
          />
        </>
      )}
    </Card>
  );
};

export default RoundBartWidget;
