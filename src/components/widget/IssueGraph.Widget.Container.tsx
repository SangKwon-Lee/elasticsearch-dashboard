import { Card, Typography, Box, useTheme } from '@mui/material';
import { priceToString } from 'src/utils/priceToString';
import { IssueGraphWidgetProps } from '../dashboard/dashboard/Dashboard.Type';
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
const IssueGraphWidget = ({ data }: IssueGraphWidgetProps) => {
  const theme = useTheme();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
  );

  return (
    <Card
      sx={{
        p: 2,
        height: '100%',
        bgcolor: (theme) => theme.palette.error.lighter,
      }}
    >
      <>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" color={theme.palette.error.dark} fontWeight={700}>
            {data?.name}
          </Typography>
        </Box>
        <Typography
          variant="h3"
          color={theme.palette.error.dark}
          fontWeight={700}
          sx={{ mt: 1, mb: 2 }}
        >
          {priceToString(_.sumBy(data.data.datasets[0].data))}
        </Typography>

        {data?.data.labels.length > 1 && (
          <Box sx={{ mt: 1 }}>
            <Bar data={data?.data} options={optionsLine} height={'280px'} />
          </Box>
        )}
      </>
    </Card>
  );
};

export default IssueGraphWidget;
