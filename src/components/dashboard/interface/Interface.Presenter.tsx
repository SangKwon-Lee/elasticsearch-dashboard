import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import Page from 'src/components/commons/Page';
import { GridColumns } from '@mui/x-data-grid';
import useSettings from 'src/hooks/useSettings';
import { InterfacePresenterProps } from './Interface.Type';
import { Box, Button, Container, useTheme } from '@mui/material';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';

const columns: GridColumns = [
  { field: 'port', headerName: '포트', flex: 1 },
  { field: 'responseTime', headerName: '응답시간', flex: 1, headerClassName: 'response' },
  { field: 'responseTimeStatus', headerName: '이상징후', flex: 1, headerClassName: 'response' },
  { field: 'ingCount', headerName: 'ING', flex: 1, headerClassName: 'ingCount' },
  { field: 'ingCountStatus', headerName: '이상징후', flex: 1, headerClassName: 'ingCount' },
  { field: 'transmitQueue', headerName: '전송큐', flex: 1, headerClassName: 'transmitQueue' },
  {
    field: 'transmitQueueStatus',
    headerName: '이상징후',
    flex: 1,
    headerClassName: 'transmitQueue',
  },
  { field: 'receiveQueue', headerName: '수신큐', flex: 1, headerClassName: 'receiveQueue' },
  { field: 'receiveQueueStatus', headerName: '이상징후', flex: 1, headerClassName: 'receiveQueue' },
  { field: 'closeWaitCount', headerName: 'Close Wait', flex: 1, headerClassName: 'closeWaitCount' },
  {
    field: 'closeWaitCountStatus',
    headerName: '이상징후',
    flex: 1,
    headerClassName: 'closeWaitCount',
  },
];

const InterfacePresenter = ({ interfaceList }: InterfacePresenterProps) => {
  const theme = useTheme();
  const themeStretch = useSettings();
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ['group'],
      },
    },
  });
  const groupingColDef = {
    minWidth: 500,
  };
  const getTreeDataPath = (row) => row.group;

  return (
    <Page title={'기관연계'}>
      <Container maxWidth={themeStretch.themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="기관연계"
          links={[
            { name: 'CPM', href: '/dashboard' },
            { name: '기관연계', href: '/interface' },
          ]}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mb: 2 }} variant="contained" onClick={() => window.location.reload()}>
            새로고침
          </Button>
        </Box>
        <Box
          sx={{
            height: 400,
            width: '100%',
            '& .caution': {
              color: theme.palette.info.main,
            },
            '& .warning': {
              color: theme.palette.warning.light,
            },
            '& .danger': {
              color: theme.palette.warning.main,
            },
            '& .error': {
              color: theme.palette.error.main,
            },
            '& .response': {
              backgroundColor: theme.palette.info.darker,
            },
            '& .ingCount': {
              backgroundColor: theme.palette.success.darker,
            },
            '& .transmitQueue': {
              backgroundColor: theme.palette.primary.darker,
            },
            '& .receiveQueue': {
              backgroundColor: theme.palette.warning.darker,
            },
            '& .closeWaitCount': {
              backgroundColor: theme.palette.grey[700],
            },
          }}
        >
          <DataGridPremium
            treeData
            rows={interfaceList}
            groupingColDef={groupingColDef}
            columns={columns}
            getTreeDataPath={getTreeDataPath}
            apiRef={apiRef}
            rowGroupingColumnMode="single"
            initialState={initialState}
            autoHeight={true}
            defaultGroupingExpansionDepth={-1}
            getCellClassName={(params: any) => {
              if (params.value == null) {
                return '';
              }
              if (String(params.value).includes('치명')) {
                return 'error';
              } else if (String(params.value).includes('위험')) {
                return 'danger';
              } else if (String(params.value).includes('경고')) {
                return 'warning';
              } else if (String(params.value).includes('주의')) {
                return 'caution';
              } else {
                return '';
              }
            }}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default InterfacePresenter;
