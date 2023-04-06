import { Box, Card, Typography } from '@mui/material';
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
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarCartWidgetProps } from '../dashboard/dashboard/Dashboard.Type';
import ChartDataLabels from 'chartjs-plugin-datalabels';
const optionsLine = {
  responsive: true,
  animation: {
    duration: 1000,
  },
  indexAxis: 'y' as const,
  plugins: {
    datalabels: {
      display: true,
      color: 'white',
      formatter: (value, context) => {
        return `${context.dataset.label} : ${value}`;
      },
      align: 'end' as const,
      anchor: 'start' as const,
      // formatter: Math.round,
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
      display: true,
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

const RowBarWidget = ({ data }: BarCartWidgetProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement,
    ChartDataLabels
  );
  console.log(data);
  return (
    <Card sx={{ p: 2, height: '100%' }}>
      <>
        <Typography variant="h5" noWrap sx={{ mb: 1 }} fontWeight={700}>
          {data?.name}
        </Typography>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}></Typography>
          {data?.data.labels.length > 1 && (
            <Bar data={data?.data} options={optionsLine} height={'200px'} />
          )}
        </Box>
      </>
    </Card>
  );
};

export default RowBarWidget;
