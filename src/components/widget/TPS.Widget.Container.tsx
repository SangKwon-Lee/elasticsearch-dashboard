import { Box, Card, Typography } from '@mui/material';
import { TPSWidgetProps } from '../dashboard/dashboard/Dashboard.Type';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';
const optionsLine = {
  responsive: true,
  animation: {
    duration: 1000,
  },
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    filler: {
      propagate: true,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        drawBorder: false,
      },
    },
    y: {
      display: false,
      grid: {
        drawBorder: false,
      },
      gridLines: {
        drawBorder: false,
      },
    },
  },
};
const TPSWidget = ({ data, response }: TPSWidgetProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  return (
    <Card
      sx={{
        p: 2,
        height: '100%',
      }}
    >
      <>
        <Typography variant="h4" noWrap sx={{ mb: 1 }} fontWeight={700}>
          {data?.name}
        </Typography>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
            TPS 평균 {_.meanBy(data?.data.datasets[0].data).toFixed(2)}
          </Typography>
          {data?.data.labels.length > 1 && (
            <Line data={data?.data} options={optionsLine} height={'100px'} />
          )}
        </Box>
      </>
      <>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
            응답시간 평균 {_.meanBy(response?.data.datasets[0].data).toFixed(2)}
          </Typography>
          {response?.data.labels.length > 1 && (
            <Line data={response?.data} options={optionsLine} height={'100px'} />
          )}
        </Box>
      </>
    </Card>
  );
};

export default TPSWidget;
