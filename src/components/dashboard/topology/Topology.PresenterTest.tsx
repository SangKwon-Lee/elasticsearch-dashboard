import { useEffect } from 'react';
import GroupNode from './GroupNode';
import styled from '@emotion/styled';
import Page from 'src/components/commons/Page';
import useSettings from 'src/hooks/useSettings';
import ColorSelectorNode from './ColorSelectNode';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';
import { Box, Card, Container, Typography, useTheme } from '@mui/material';
import { TopologyEdgesMock, TopologyNodeMock } from 'src/_mock/TopologyMock';
import ReactFlow, { useEdgesState, useNodesState } from 'react-flow-renderer';
const mode = process.env.REACT_APP_MODE;
const CustomTypography = styled(Typography)`
  color: black;
  text-align: center;
  font-size: 15;
  font-weight: 700;
  margin: auto;
`;
const nodeTypes = {
  selectorNode: ColorSelectorNode,
  groupNode: GroupNode,
};

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

  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
  const [edges, setEdges] = useEdgesState<any>([]);

  //* 데이터 넣기
  useEffect(() => {
    if (mode === 'DEV') {
      setEdges(TopologyEdgesMock);
      setNodes(TopologyNodeMock);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Card sx={{ height: 600, mt: 3, backgroundColor: 'transparent' }}>
          <ReactFlow
            fitView
            nodes={nodes}
            edges={edges}
            defaultZoom={400}
            panOnScroll={false}
            zoomOnScroll={false}
            nodeTypes={nodeTypes}
            preventScrolling={false}
            onNodesChange={onNodesChange}
          />
        </Card>
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
