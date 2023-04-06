import { Box, Card, Typography } from '@mui/material';
import { MultiLineGraphWidgetProps } from '../dashboard/dashboard/Dashboard.Type';
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
const optionsLine = {
  responsive: true,
  animation: {
    duration: 1000,
  },
  tooltip: {
    mode: 'index',
  },
  plugins: {
    tooltip: {
      interaction: {
        mode: 'index',
      },
      intersect: false,
      itemSort: (a, b) => {
        return b.raw - a.raw;
      },
    },
    datalabels: {
      display: false,
    },
    legend: {
      display: true,
      position: 'right' as const,
      labels: {
        boxWidth: 15,
      },
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
      display: true,
      grid: {
        drawBorder: false,
      },
    },
    y: {
      display: true,
      grid: {
        drawBorder: false,
      },
      gridLines: {
        drawBorder: false,
      },
    },
  },
};
const MultiLineGraphWidget = ({ data }: MultiLineGraphWidgetProps) => {
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
      }}
    >
      <>
        <Typography variant="h5" noWrap sx={{ mb: 1 }} fontWeight={700}>
          {data?.name}
        </Typography>
        <Box
          sx={{
            mb: 2,
          }}
        >
          {data?.data.labels.length > 1 && (
            <Line data={data?.data} options={optionsLine} height={'200px'} />
          )}
        </Box>
      </>
    </Card>
  );
};

export default MultiLineGraphWidget;
