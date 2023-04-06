import { Box, Card, Typography, useTheme } from '@mui/material';
import { priceToString } from 'src/utils/priceToString';
import { IssueWidgetProsp } from '../dashboard/dashboard/Dashboard.Type';
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
import styled from '@emotion/styled';
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

const CustomTypo = styled(Typography)`
  color: black;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  margin: auto;
  margin-top: 3px;
`;

const CustomCircle = styled.div((props: any) => ({
  width: '30px',
  height: '30px',
  backgroundColor: props.color,
  borderRadius: '50%',
  cursor: 'pointer',
}));

const IssueWidget = ({ data }: IssueWidgetProsp) => {
  const theme = useTheme();
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

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CustomCircle color="#00AB55">
            <CustomTypo>{data?.point.warning}</CustomTypo>
          </CustomCircle>
          <CustomCircle color="#FFE16A">
            <CustomTypo>{data?.point.minor}</CustomTypo>
          </CustomCircle>
          <CustomCircle color="#FFC107">
            <CustomTypo>{data?.point.major}</CustomTypo>
          </CustomCircle>
          <CustomCircle color="#B72136">
            <CustomTypo>{data?.point.critical}</CustomTypo>
          </CustomCircle>
        </Box>
        {data?.data.labels.length > 1 && (
          <Box sx={{ mt: 1 }}>
            <Line data={data?.data} options={optionsLine} height={'200px'} />
          </Box>
        )}
      </>
    </Card>
  );
};

export default IssueWidget;
