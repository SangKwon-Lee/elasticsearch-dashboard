import {
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableContainer,
  Typography,
  useTheme,
} from '@mui/material';
import dayjs from 'dayjs';
import { merge } from 'lodash';
import { useParams } from 'react-router';
import ReactApexChart from 'react-apexcharts';
import Page from 'src/components/commons/Page';
import useSettings from 'src/hooks/useSettings';
import { BaseOptionChart } from 'src/components/chart';
import ServerDetailTableRow from './ServerDetailTableRow';
import Scrollbar from 'src/components/commons/Scrollbar';
import { TableHeadCustom } from 'src/components/commons/table';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';
const tableLabels = [
  { id: 'datetime', label: '일시', align: 'left' },
  { id: 'level', label: '레벨', align: 'left' },
  { id: 'group', label: '그룹', align: 'left' },
  { id: 'message', label: '로그 메시지', align: 'left' },
];
const ServerDetailContainer = () => {
  const themeStretch = useSettings();
  const theme = useTheme();
  const { id } = useParams();

  const Dummy = {
    name: '거래량 추이 (1시간)',
    time: [dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs()],
    data: [
      {
        name: 'TPS',
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ],
      },
    ],
  };

  const Dummy2 = {
    name: 'MCI 소스채널 거래량 상위 (실시간)',
    data: [
      {
        name: '채널1',
        data: [Math.floor(Math.random() * 100)],
      },
      {
        name: '채널2',
        data: [Math.floor(Math.random() * 100)],
      },
      {
        name: '채널3',
        data: [Math.floor(Math.random() * 100)],
      },
      {
        name: '채널4',
        data: [Math.floor(Math.random() * 100)],
      },
      {
        name: '채널5',
        data: [Math.floor(Math.random() * 100)],
      },
    ].sort((a: any, b: any) => b.data - a.data),
  };

  const Dummy3 = [
    {
      datetime: dayjs(),
      level: 'info',
      group: '그룹1',
      message:
        "CA certificate matching 'ca_trusted_fingerprint' found, adding it to 'certificate_authorities'",
    },
    {
      datetime: dayjs(),
      level: 'info',
      group: '그룹1',
      message:
        "CA certificate matching 'ca_trusted_fingerprint' found, adding it to 'certificate_authorities'",
    },
    {
      datetime: dayjs(),
      level: 'info',
      group: '그룹1',
      message:
        "CA certificate matching 'ca_trusted_fingerprint' found, adding it to 'certificate_authorities'",
    },
  ];

  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: Dummy?.time.map((data) => dayjs(data).format('HH:mm')),
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
      tickAmount: 10,
    },
    yaxis: {
      labels: {
        formatter: (seriesName: any) => seriesName.toFixed(0),
        style: {
          colors: theme.palette.text.primary,
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      showForSingleSeries: true,
      showForNullSeries: true,
      showForZeroSeries: true,
      horizontalAlign: 'center',
    },
    tooltip: {
      theme: theme.palette.mode,
      y: {
        formatter: (seriesName: any) => seriesName.toFixed(0),
      },
    },
    chart: {
      animations: {
        enabled: false,
      },
    },
  });

  const chartOptions2 = merge(BaseOptionChart(), {
    colors: [theme.palette.primary.main],
    chart: { sparkline: { enabled: true } },
    legend: { show: false },
    plotOptions: {
      radialBar: {
        hollow: { size: '65%' },
        track: { margin: 4 },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '16px',
            fontWeight: 600,
            offsetY: -10,
          },
          value: {
            color: 'white',
            fontSize: 29,
            fontWeight: 700,
          },
        },
      },
    },
  });

  const chartOptions3 = merge(BaseOptionChart(), {
    chart: {
      sparkline: {
        enabled: true,
      },
      animatinos: {
        enabled: false,
      },
    },
    colors: [
      theme.palette.primary.darker,
      theme.palette.primary.dark,
      theme.palette.primary.dark,
      theme.palette.primary.main,
      theme.palette.primary.main,
    ],
    xaxis: {
      categories: Dummy2.data.map((data) => data.name),
      labels: { show: true },
    },
    yaxis: {
      show: true,
    },
    stroke: {
      colors: ['transparent'],
      width: 5,
    },
    dataLabels: {
      enabled: true,
      formatter: (seriesName: string, ots) =>
        `${ots.w.config.series[ots.seriesIndex].name} : ${seriesName}`,
    },
    grid: {
      padding: {
        top: 0,
        left: 20,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 5,
        barHeight: '80%',
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName: string, ots) =>
          `${ots.w.config.series[ots.seriesIndex].name} : ${seriesName}`,
        title: {
          formatter: () => '',
        },
      },
      theme: theme.palette.mode,
    },
  });

  return (
    <Page title={'서버 상세'}>
      <Container maxWidth={themeStretch.themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="서버 상세"
          links={[
            { name: 'CPM', href: '/dashboard' },
            { name: '서버', href: '/network' },
            { name: String(id), href: '/network' },
          ]}
        />
        <Grid container spacing={3}>
          {/* 1번 */}
          <Grid item xs={12} md={2}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                textAlign="center"
                variant="h6"
                color={theme.palette.grey[500]}
                sx={{ mb: 2 }}
              >
                TPS
              </Typography>
              <Typography textAlign="center" variant="h4" fontWeight={700}>
                2.21
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="line"
                series={Dummy.data}
                options={chartOptions}
                height={'200px'}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart type="radialBar" series={[86]} options={chartOptions2} />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="line"
                series={Dummy.data}
                options={chartOptions}
                height={'200px'}
              />
            </Card>
          </Grid>
          {/* 2번 */}
          <Grid item xs={12} md={2}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography
                    textAlign="center"
                    variant="h6"
                    color={theme.palette.grey[500]}
                    sx={{ mb: 2 }}
                  >
                    수신큐
                  </Typography>
                  <Typography textAlign="center" variant="h4" fontWeight={700}>
                    3
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    textAlign="center"
                    variant="h6"
                    color={theme.palette.grey[500]}
                    sx={{ mb: 2 }}
                  >
                    송신큐
                  </Typography>
                  <Typography textAlign="center" variant="h4" fontWeight={700}>
                    4
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="line"
                series={Dummy.data}
                options={chartOptions}
                height={'200px'}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart type="radialBar" series={[86]} options={chartOptions2} />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="line"
                series={Dummy.data}
                options={chartOptions}
                height={'200px'}
              />
            </Card>
          </Grid>
          {/* 3번 */}
          <Grid item xs={12} md={2}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                textAlign="center"
                variant="h6"
                color={theme.palette.grey[500]}
                sx={{ mb: 2 }}
              >
                Close_Wait
              </Typography>
              <Typography textAlign="center" variant="h4" fontWeight={700}>
                8
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="line"
                series={Dummy.data}
                options={chartOptions}
                height={'200px'}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart type="radialBar" series={[86]} options={chartOptions2} />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="line"
                series={Dummy.data}
                options={chartOptions}
                height={'200px'}
              />
            </Card>
          </Grid>
          {/*4번 */}
          <Grid item xs={12} md={2}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography
                    textAlign="center"
                    variant="h6"
                    color={theme.palette.grey[500]}
                    sx={{ mb: 2 }}
                  >
                    네트워크-IN
                  </Typography>
                  <Typography textAlign="center" variant="h4" fontWeight={700}>
                    3
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    textAlign="center"
                    variant="h6"
                    color={theme.palette.grey[500]}
                    sx={{ mb: 2 }}
                  >
                    네트워크-OUT
                  </Typography>
                  <Typography textAlign="center" variant="h4" fontWeight={700}>
                    4
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="line"
                series={Dummy.data}
                options={chartOptions}
                height={'200px'}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart type="radialBar" series={[86]} options={chartOptions2} />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="line"
                series={Dummy.data}
                options={chartOptions}
                height={'200px'}
              />
            </Card>
          </Grid>
          {/* 5번 */}
          <Grid item xs={12} md={2}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                textAlign="center"
                variant="h6"
                color={theme.palette.grey[500]}
                sx={{ mb: 2 }}
              >
                네트워크 카드 수
              </Typography>
              <Typography textAlign="center" variant="h4" fontWeight={700}>
                5
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="bar"
                series={Dummy2.data}
                options={chartOptions3}
                height={220}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                textAlign="center"
                variant="h6"
                color={theme.palette.grey[500]}
                sx={{ mb: 2 }}
              >
                마운트 볼륨 수
              </Typography>
              <Typography textAlign="center" variant="h4" fontWeight={700}>
                8
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <ReactApexChart
                type="bar"
                series={Dummy2.data}
                options={chartOptions3}
                height={220}
              />
            </Card>
          </Grid>
        </Grid>
        <Card sx={{ mt: 3 }}>
          <CardHeader title={'로그 메시지'} sx={{ mb: 3 }} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 720 }}>
              <Table>
                <TableHeadCustom headLabel={tableLabels} />

                <TableBody>
                  {Dummy3.map((row, index) => (
                    <ServerDetailTableRow key={index} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Divider />
        </Card>
      </Container>
    </Page>
  );
};

export default ServerDetailContainer;
