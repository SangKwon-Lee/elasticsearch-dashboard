import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Tab,
  Table,
  TableBody,
  TableContainer,
  Tabs,
  useTheme,
} from '@mui/material';
import dayjs from 'dayjs';
import { merge } from 'lodash';
import styled from '@emotion/styled';
import { Scatter } from 'react-chartjs-2';
import ReactApexChart from 'react-apexcharts';
import Page from 'src/components/commons/Page';
import { emptyRows } from 'src/hooks/useTable';
import useSettings from 'src/hooks/useSettings';
import AnomalyTableRow from './AnomalyTableRow';
import Label from 'src/components/commons/Label';
import { BaseOptionChart } from 'src/components/chart';
import { AnomalyPresenterProps } from './Anomaly.Type';
import AnomalyTableToolbar from './AnomalyTableToolbar';
import Scrollbar from 'src/components/commons/Scrollbar';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';
import TablePagination from 'src/components/commons/table/TablePagination';
import { TableHeadCustom, TableEmptyRows, TableNoData } from 'src/components/commons/table';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

const TABLE_HEAD = [
  { id: 'severity', label: '이상레벨', align: 'left' },
  { id: 'kind', label: '이상종류' },
  { id: 'message', label: '내용' },
  { id: 'timestamp', label: '발생일' },
  { id: 'score', label: '이상점수' },
];

const AnomalyPresenter = ({
  page,
  dense,
  order,
  onSort,
  perPage,
  orderBy,
  filterName,
  filterType,
  pageCount,
  tableData,
  handlePage,
  donutChart,
  lineChart,
  scatterChart,
  filterStatus,
  dataFiltered,
  onChangeDense,
  handlePerPage,
  handleFilterId,
  tableDataOption,
  handleFilterType,
  handleFilterName,
  handleFilterStatus,
}: AnomalyPresenterProps) => {
  const themeStretch = useSettings();
  const theme = useTheme();

  //* 테이블 검색 목록이 없을 때
  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterStatus) ||
    (!dataFiltered.length && !!filterType);

  const getLengthByStatus = (status: string) =>
    tableData.filter((item) => item.severity === status).length;

  const STATUS_OPTIONS = [
    { value: '전체', label: '전체', count: tableData.length },
    { value: '주의', label: '주의', count: getLengthByStatus('주의') },
    { value: '경고', label: '경고', count: getLengthByStatus('경고') },
    { value: '위험', label: '위험', count: getLengthByStatus('위험') },
    { value: '치명', label: '치명', count: getLengthByStatus('치명') },
  ];

  const CustomChart = styled(ReactApexChart)`
    .apexcharts-tooltip {
      color: #000000 !important;
    }
  `;

  const donutChartOption = merge(BaseOptionChart(), {
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      showForSingleSeries: true,
      showForNullSeries: true,
      showForZeroSeries: true,
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.light,
      theme.palette.warning.main,
      theme.palette.error.dark,
    ],
    series: donutChart?.data,
    stroke: {
      width: 4,
      colors: [theme.palette.background.paper],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: false,
              show: true,
              fontSize: 19,
              color: theme.palette.text.primary,
              label: '합계',
            },
            value: {
              fontSize: 22,
              show: true,
            },
          },
        },
      },
    },
    labels: donutChart?.label,
    tooltip: {
      theme: theme.palette.mode,
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      },
      style: {
        colors: ['black'],
        fontSize: 17,
      },
      dropShadow: {
        enabled: true,
      },
    },
    chart: {
      animations: {
        enabled: false,
      },
    },
  });

  const lineChartOption = merge(BaseOptionChart(), {
    xaxis: {
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
      tooltip: {
        enabled: false,
      },
      tickAmount: 10,
      type: 'datetime',
      dateTimeUTC: true,
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
    },
    legend: {
      show: true,
      position: 'right',
    },
    tooltip: {
      theme: theme.palette.mode,
      x: {
        show: true,
        formatter: function (val) {
          return dayjs(val).format('YYYY-MM-DD HH:mm:ss.SSS');
        },
      },
    },
    chart: {
      animations: {
        enabled: false,
      },
    },
  });

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        ticks: {
          callback: function (label) {
            return dayjs(label).format('HH:mm');
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (data) {
            return `(x:${dayjs(data.raw.x).format('HH:mm')}, y:${data.raw.y})`;
          },
        },
      },
    },
    onClick: function (e, a) {
      if (a.length > 0) {
        handleFilterId(a[0].element.$context.raw.id);
      } else {
        handleFilterId('');
      }
    },
  };

  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  return (
    <Page title={'이상징후'}>
      <Container maxWidth={themeStretch.themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="이상징후"
          links={[
            { name: 'CPM', href: '/dashboard' },
            { name: '이상징후', href: '/anomaly' },
          ]}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mb: 2 }} variant="contained" onClick={() => window.location.reload()}>
            새로고침
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ minWidth: 300 }}>
            {donutChart && (
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  minWidth: 300,
                }}
              >
                <CustomChart
                  width={'100%'}
                  minWidth={500}
                  minHeight={500}
                  height={'100%'}
                  type="donut"
                  options={donutChartOption}
                  series={donutChartOption.series}
                />
              </Card>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            {lineChart && (
              <Card sx={{ height: '100%', p: 2 }}>
                <ReactApexChart type="line" series={lineChart?.data} options={lineChartOption} />
              </Card>
            )}
          </Grid>
          <Grid item xs={12} md={5}>
            {scatterChart?.data.length > 0 && (
              <Card sx={{ height: '100%', p: 2 }}>
                <Scatter
                  options={options}
                  data={{
                    datasets: scatterChart?.data,
                  }}
                />
              </Card>
            )}
          </Grid>
        </Grid>
        <Card sx={{ mt: 3, pb: 2 }}>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={filterStatus}
            onChange={(event, value) => handleFilterStatus(value)}
            sx={{ px: 2, bgcolor: 'background.neutral' }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                label={tab.label}
                value={tab.value}
                icon={
                  <Label
                    color={
                      tab.value === '전체'
                        ? 'info'
                        : tab.value === '주의'
                        ? 'primary'
                        : tab.value === '경고'
                        ? 'success'
                        : tab.value === '위험'
                        ? 'warning'
                        : 'error'
                    }
                  >
                    {tab.count}
                  </Label>
                }
              />
            ))}
          </Tabs>
          <Divider sx={{ mb: 1 }} />
          <AnomalyTableToolbar
            filterName={filterName}
            filterType={filterType}
            handleFilterId={handleFilterId}
            tableDataOption={tableDataOption}
            handleFilterType={handleFilterType}
            handleFilterName={handleFilterName}
          />
          <Scrollbar>
            <TableContainer sx={{ position: 'relative' }}>
              <Table size={'medium'}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  onSort={onSort}
                />
                <TableBody>
                  {dataFiltered
                    .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                    .map((row, index) => (
                      <AnomalyTableRow key={index} row={row} />
                    ))}
                  <TableEmptyRows
                    height={76}
                    emptyRows={emptyRows(page - 1, perPage, tableData.length)}
                  />
                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
            <Divider sx={{ my: 2 }} />
          </Scrollbar>
          <TablePagination
            page={page}
            dense={dense}
            isDense={false}
            perPage={perPage}
            pageCount={pageCount}
            handlePage={handlePage}
            handlePerPage={handlePerPage}
            onChangeDense={onChangeDense}
          />
        </Card>
      </Container>
    </Page>
  );
};

export default AnomalyPresenter;
