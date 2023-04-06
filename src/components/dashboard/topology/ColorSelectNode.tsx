import { merge } from 'lodash';
import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Handle } from 'react-flow-renderer';
import ReactApexChart from 'react-apexcharts';
import { BaseOptionChart } from 'src/components/chart';
import { Typography, Card, useTheme, Box } from '@mui/material';
const CustomTypographyRow = styled(Typography)`
  color: black;
  /* text-align: center; */
  font-size: 18px;
  font-weight: 700;
  margin: auto;
`;
const CustomTypographyColumn = styled(Typography)`
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: auto;
`;
export default memo(({ data, isConnectable }: any) => {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    chart: { animations: { enabled: false }, sparkline: { enabled: true }, width: '100%' },
    stroke: { width: 3 },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName: any) => Number(seriesName).toFixed(3),
        title: {
          formatter: () => '',
        },
      },
      theme: theme.palette.mode,
    },
  });

  const CircleRow = styled.div((props: any) => ({
    display: 'flex',
    width: '30px',
    height: '30px',
    minWidth: '30px',
    minHeight: '30px',
    backgroundColor:
      props.text === '주의'
        ? theme.palette.grey[500]
        : props.text === '경고'
        ? theme.palette.warning.main
        : props.text === '위험'
        ? theme.palette.error.light
        : theme.palette.error.main,
    borderRadius: '50%',
    margin: '0px 5px',
  }));
  const CircleColumn = styled.div((props: any) => ({
    display: 'flex',
    width: '40px',
    height: '40px',
    minWidth: '40px',
    minHeight: '40px',
    backgroundColor:
      props.text === '주의'
        ? theme.palette.grey[500]
        : props.text === '경고'
        ? theme.palette.warning.main
        : props.text === '위험'
        ? theme.palette.error.light
        : theme.palette.error.main,
    borderRadius: '50%',
    margin: '0px 5px',
  }));

  return (
    <>
      <Handle
        type="source"
        //@ts-ignore
        position="left"
        id="1"
        style={{ background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        //@ts-ignore
        position="left"
        id="2"
        style={{ background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        //@ts-ignore
        position="top"
        id="5"
        style={{ background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        //@ts-ignore
        position="top"
        id="6"
        style={{ background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flex: 1,
          width: '300px',
        }}
      >
        <Typography
          color="white"
          textAlign={'center'}
          variant="h3"
          sx={{ wordBreak: 'keep-all' }}
          fontWeight={700}
        >
          {data?.title}
        </Typography>
        {data?.type === 'column' ? (
          <Card
            sx={{
              width: '100%',
              flex: 1,
              px: 1,
              py: 3,
            }}
          >
            <Typography
              color="white"
              textAlign={'center'}
              sx={{ wordBreak: 'keep-all', mb: 3 }}
              fontWeight={700}
              variant="h4"
            >
              {data?.label}
            </Typography>
            {data?.data.length > 0 &&
              data?.data.map((data, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ display: 'flex' }}>
                    <CircleColumn text="주의">
                      <CustomTypographyColumn>{data.catution}</CustomTypographyColumn>
                    </CircleColumn>
                    <CircleColumn text="경고">
                      <CustomTypographyColumn>{data.warning}</CustomTypographyColumn>
                    </CircleColumn>
                    <CircleColumn text="위험">
                      <CustomTypographyColumn>{data.danger}</CustomTypographyColumn>
                    </CircleColumn>
                    <CircleColumn text="치명">
                      <CustomTypographyColumn>{data.critical}</CustomTypographyColumn>
                    </CircleColumn>
                  </Box>
                </Box>
              ))}
          </Card>
        ) : data?.type === 'chart' ? (
          <Card
            sx={{
              width: '100%',
              flex: 1,
              px: 1,
              py: 3,
            }}
          >
            <Typography
              color="white"
              textAlign={'center'}
              sx={{ wordBreak: 'keep-all', mb: 3 }}
              fontWeight={700}
              variant="h4"
            >
              {data?.label}
            </Typography>
            <ReactApexChart
              type="line"
              series={[{ data: [23, 42, 67, 24, 77, 44, 32] }]}
              options={chartOptions}
              height={50}
            />
          </Card>
        ) : (
          <Card
            sx={{
              width: '100%',
              flex: 1,
              px: 2,
              // backgroundColor: 'transparent',
            }}
          >
            <Typography
              color="white"
              textAlign={'center'}
              sx={{ wordBreak: 'keep-all' }}
              fontWeight={700}
            >
              {data?.label}
            </Typography>
            {data?.data.length > 0 &&
              data?.data.map((data, index) => (
                <Box sx={{ width: '100%' }}>
                  <Box
                    key={index}
                    sx={{
                      my: 2.5,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <Typography color="white" variant="h5" fontWeight={700}>
                      {data.name}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                      <CircleRow text="주의">
                        <CustomTypographyRow>{data.catution}</CustomTypographyRow>
                      </CircleRow>
                      <CircleRow text="경고">
                        <CustomTypographyRow>{data.warning}</CustomTypographyRow>
                      </CircleRow>
                      <CircleRow text="위험">
                        <CustomTypographyRow>{data.danger}</CustomTypographyRow>
                      </CircleRow>
                      <CircleRow text="치명">
                        <CustomTypographyRow>{data.critical}</CustomTypographyRow>
                      </CircleRow>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Card>
        )}
      </div>
      <Handle
        type="source"
        //@ts-ignore
        position="right"
        id="3"
        style={{ background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        //@ts-ignore
        position="right"
        id="4"
        style={{ background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        //@ts-ignore
        position="bottom"
        id="7"
        style={{ background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        //@ts-ignore
        position="bottom"
        id="8"
        style={{ background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
