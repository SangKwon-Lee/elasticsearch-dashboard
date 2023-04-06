import { Box, TextField, Typography } from '@mui/material';
import Page from 'src/components/commons/Page';
import TitleUI from 'src/components/commons/TitleUI';
import ReactApexChart from 'react-apexcharts';
import merge from 'lodash/merge';
import { BaseOptionChart } from 'src/components/chart';
import styled from '@emotion/styled';
import React from 'react';
import { IssueList1 } from 'src/_mock/_mockDataList';
import IssueItemContainer from './IssueItem.Container';

const SORT_BY_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'true', label: 'Open' },
  { value: 'false', label: 'Close' },
];

interface IssuePresenterProps {
  sort: string;
  handleSortBy: (e: any) => void;
}

const IssuePresenter = ({ sort, handleSortBy }: IssuePresenterProps) => {
  const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const chartData = [
    {
      data: [
        { name: 'Close', data: [3, 3, 4, 4, 5, 4, 3, 2, 1] },
        { name: 'Open', data: [0, 0, 0, 0, 0, 0, 2, 1, 1] },
      ],
    },
  ];

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: chartLabels,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val}`,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'bottom',
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        // colors: '#f3f3f3',
      },
    },
    chart: {
      stacked: true,
    },
    style: {
      fontSize: '12px',
      color: 'red',
    },
    animations: {
      enabled: false,
      easing: 'easeinout',
      speed: 5000,
      animateGradually: {
        enabled: false,
        delay: 5000,
      },
      dynamicAnimation: {
        enabled: false,
        speed: 5000,
      },
    },
  });

  const Chart = styled(ReactApexChart)`
    .apexcharts-tooltip {
      background: #f3f3f3;
      color: black;
    }
    .apexcharts {
      transition: none;
    }
  `;

  return (
    <Page title={'발생장애'}>
      <TitleUI title="발생장애" />
      {chartData.map((item, index) => (
        <Box key={index} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item && <Chart type="bar" series={item.data} options={chartOptions} height={300} />}
        </Box>
      ))}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">5 Issue</Typography>
        <TextField
          label={'정렬'}
          name="sort"
          onChange={handleSortBy}
          select
          SelectProps={{ native: true }}
          variant="outlined"
          sx={{ mx: 1 }}
        >
          {SORT_BY_OPTIONS.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>
      <Box
        sx={{
          mt: 2,
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {IssueList1.filter((data) =>
          sort === 'all' ? data : sort === 'true' ? data.isOpen : !data.isOpen
        ).map((data, index) => (
          <IssueItemContainer item={data} key={index} />
        ))}
      </Box>
    </Page>
  );
};
export default React.memo(IssuePresenter);
