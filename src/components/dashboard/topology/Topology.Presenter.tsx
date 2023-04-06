import styled from '@emotion/styled';
import Page from 'src/components/commons/Page';
import useSettings from 'src/hooks/useSettings';
import TopologyRowItem from './TopologyRowItem.Container';
import TopologyColumnItem from './TopologyColumnItem.Container';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';
import { Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';
const CustomTypography = styled(Typography)`
  color: black;
  text-align: center;
  font-size: 15;
  font-weight: 700;
  margin: auto;
`;

const TopologyPresenter = () => {
  const themeStretch = useSettings();
  const theme = useTheme();

  const Circle = styled.div((props: any) => ({
    display: 'flex',
    width: '40px',
    height: '40px',
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

  const mockup = [
    {
      title: 'MCI#11',
      data: [
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: '비대면',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: '이기종',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
      ],
    },
    {
      title: 'MCI#2',
      data: [
        {
          name: '통합단말',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
      ],
    },
    {
      title: 'MCI#3',
      data: [
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
      ],
    },
    {
      title: 'MCI#4',
      data: [
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
        {
          name: 'MCI배치',
          catution: '5',
          warning: '2',
          danger: '3',
          critical: '3',
        },
      ],
    },
  ];

  const mockup2 = [
    {
      title: 'MCI#1',
      catution: '5',
      warning: '2',
      danger: '3',
      critical: '3',
    },
    {
      title: 'MCI#2',
      catution: '5',
      warning: '2',
      danger: '3',
      critical: '3',
    },
    {
      title: 'MCI#3',
      catution: '5',
      warning: '2',
      danger: '3',
      critical: '3',
    },
    {
      title: 'MCI#4',
      catution: '5',
      warning: '2',
      danger: '3',
      critical: '3',
    },
  ];

  const mockup3 = [
    {
      title: 'EAI#1',
      catution: '5',
      warning: '2',
      danger: '3',
      critical: '3',
    },
    {
      title: 'EAI#1',
      catution: '5',
      warning: '2',
      danger: '3',
      critical: '2',
    },
  ];
  const mockup4 = [
    {
      title: 'dopso21',
    },
    {
      title: 'dopso22',
    },
    {
      title: 'dcbso11',
    },
    {
      title: 'dxiso15',
    },
  ];
  const mockup5 = [
    {
      title: 'dopso12',
    },
    {
      title: 'dopso11',
    },
    {
      title: 'dcbso21',
    },
    {
      title: 'ddbso21',
    },
  ];

  return (
    <Page title={'토폴로지'}>
      <Container maxWidth={themeStretch.themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="토폴로지"
          links={[
            { name: 'CPM', href: '/dashboard' },
            { name: '토폴로지', href: '/tolopolgy' },
          ]}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Circle text="주의">
            <CustomTypography>주의</CustomTypography>
          </Circle>
          <Circle text="경고">
            <CustomTypography color="black">경고</CustomTypography>
          </Circle>
          <Circle text="위험">
            <CustomTypography>위험</CustomTypography>
          </Circle>
          <Circle text="치명">
            <CustomTypography>치명</CustomTypography>
          </Circle>
        </Box>

        <Grid container spacing={3} sx={{ mt: 3, minWidth: 1080 }}>
          <Grid item xs={12} md={2.5}>
            <Card sx={{ px: 1, py: 2 }}>
              <Typography textAlign={'center'} variant="h5" fontWeight={700}>
                대내 채널그룹
              </Typography>
              {mockup.map((data, index) => (
                <Card
                  id={data.title}
                  sx={{
                    backgroundColor: theme.palette.background.neutral,
                    my: 2,
                    p: 1,
                    flex: 1,
                  }}
                  key={index}
                >
                  <TopologyRowItem data={data.data} />
                </Card>
              ))}
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              <Grid item xs={8} md={3}>
                <Card sx={{ px: 1, py: 2 }}>
                  <Typography textAlign={'center'} variant="h5" fontWeight={700}>
                    MCI
                  </Typography>
                  {mockup2.map((data, index) => (
                    <Card
                      id={data.title}
                      sx={{
                        backgroundColor: theme.palette.background.neutral,
                        my: 2,
                        pt: 2,
                        pb: 3,
                        heigth: '100%',
                      }}
                      key={index}
                    >
                      <TopologyColumnItem data={data} />
                    </Card>
                  ))}
                </Card>
              </Grid>
              <Grid item xs={8} md={6}>
                <Card sx={{ px: 1, py: 2, height: '100%' }}>
                  <Typography textAlign={'center'} variant="h5" fontWeight={700} sx={{ mb: 1 }}>
                    NexCore (was instance id)
                  </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex" flexDirection="column" sx={{ flex: 1, mr: 1.5 }}>
                      {mockup4.map((data, index) => (
                        <Card
                          sx={{
                            backgroundColor: theme.palette.background.neutral,
                            my: 1.2,
                            pt: 2,
                            pb: 3,
                          }}
                          key={index}
                        >
                          <TopologyColumnItem data={data} isNex={true} />
                        </Card>
                      ))}
                    </Box>
                    <Box display="flex" flexDirection="column" sx={{ flex: 1, ml: 1.5 }}>
                      {mockup5.map((data, index) => (
                        <Card
                          sx={{
                            backgroundColor: theme.palette.background.neutral,
                            my: 1.2,
                            pt: 2,
                            pb: 3,
                          }}
                          key={index}
                        >
                          <TopologyColumnItem isNex={true} data={data} />
                        </Card>
                      ))}
                    </Box>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={8} md={3}>
                <Card sx={{ px: 1, py: 2 }}>
                  <Typography textAlign={'center'} variant="h5" fontWeight={700}>
                    FEP
                  </Typography>
                  {mockup2.map((data, index) => (
                    <Card
                      sx={{
                        backgroundColor: theme.palette.background.neutral,
                        my: 2,
                        pt: 2,
                        pb: 3,
                      }}
                      key={index}
                    >
                      <TopologyColumnItem data={data} />
                    </Card>
                  ))}
                </Card>
              </Grid>

              <Grid item xs={8} md={12}>
                <Card sx={{ px: 1, py: 2 }}>
                  <Typography textAlign={'center'} variant="h5" fontWeight={700}>
                    EAI
                  </Typography>
                  <Box display={'flex'} justifyContent="space-around">
                    {mockup3.map((data, index) => (
                      <Card
                        sx={{
                          backgroundColor: theme.palette.background.neutral,
                          my: 1.2,
                          pt: 2,
                          pb: 3,
                          flex: 0.2,
                        }}
                        key={index}
                      >
                        <TopologyColumnItem data={data} />
                      </Card>
                    ))}
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Card sx={{ px: 1, py: 2 }}>
              <Typography textAlign={'center'} variant="h5" fontWeight={700}>
                대외 채널그룹
              </Typography>
              {mockup.map((data, index) => (
                <Card
                  sx={{ backgroundColor: theme.palette.background.neutral, my: 2, p: 1 }}
                  key={index}
                >
                  <TopologyRowItem data={data.data} />
                </Card>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default TopologyPresenter;

// eslint-disable-next-line no-lone-blocks
{
  /* <Grid item md={0.1}>
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginTop: 14,
  }}
>
  <Box
    sx={{
      width: 150,
      height: 10,
      backgroundColor: theme.palette.primary.main,
    }}
  ></Box>
  <Box
    sx={{
      width: 300,
      height: 10,
      backgroundColor: theme.palette.primary.main,
      marginTop: 15,
      transform: 'rotateZ(60deg) translate(-30px)',
      transformOrigin: 'left',
    }}
  ></Box>
  <Box
    sx={{
      width: 150,
      height: 10,
      backgroundColor: theme.palette.primary.main,
      marginTop: 15,
      transform: 'rotateZ(80deg) translate(-100px)',
      transformOrigin: 'left',
    }}
  ></Box>
  <Box
    sx={{
      width: 150,
      height: 10,
      backgroundColor: theme.palette.primary.main,
      marginTop: 15,
      transform: 'rotateZ(80deg) translate(-20px)',
      transformOrigin: 'left',
    }}
  ></Box>
</Box>
</Grid> */
}
