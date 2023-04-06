import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Tab,
  Table,
  TableBody,
  TableContainer,
  Tabs,
} from '@mui/material';
import { ServerProps } from './Server.Type';
import ServerTableRow from './ServerTableRow';
import Page from 'src/components/commons/Page';
import { emptyRows } from 'src/hooks/useTable';
import useSettings from 'src/hooks/useSettings';
import Label from 'src/components/commons/Label';
import ServerTableToolbar from './ServerTableToolbar';
import Scrollbar from 'src/components/commons/Scrollbar';
import LoadingScreen from 'src/components/commons/LoadingScreen';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';
import TablePagination from 'src/components/commons/table/TablePagination';
import { TableEmptyRows, TableHeadCustom, TableNoData } from 'src/components/commons/table';

const TABLE_HEAD = [
  { id: 'name', label: '서버명', align: 'left' },
  { id: 'status', label: '상태' },
  { id: 'cpuUsage', label: 'CPU 사용량' },
  { id: 'memoryUsage', label: '메모리 사용량' },
  { id: 'diskUsage', label: '디스크 사용량', align: 'right' },
  { id: 'networkIn', label: '네트워크 인', align: 'right' },
  { id: 'networkOut', label: '네트워크 아웃', align: 'right' },
];

const ServerPresenter = ({
  page,
  dense,
  order,
  onSort,
  perPage,
  orderBy,
  filterName,
  handlePage,
  pageCount,
  tableData,
  filterStatus,
  dataFiltered,
  onChangeDense,
  handlePerPage,
  handleFilterName,
  onChangeFilterStatus,
}: ServerProps) => {
  const themeStretch = useSettings();
  //* 테이블 검색 목록이 없을 때
  const isNotFound =
    (!dataFiltered.length && !!filterName) || (!dataFiltered.length && !!filterStatus);

  const getLengthByStatus = (status: string) =>
    tableData.filter((item) => item.status === status).length;

  const TABS_OPTIONS = [
    { value: '전체', label: '전체', count: tableData.length },
    { value: '정상', label: '정상', count: getLengthByStatus('정상') },
    { value: '오류', label: '오류', count: getLengthByStatus('오류') },
  ];

  return (
    <Page title="서버">
      <Container maxWidth={themeStretch.themeStretch ? false : 'lg'}>
        {tableData.length === 0 && <LoadingScreen />}
        <HeaderBreadcrumbs
          heading="서버"
          links={[
            { name: 'CPM', href: '/dashboard' },
            { name: '서버', href: '/server' },
          ]}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mb: 2 }} variant="contained" onClick={() => window.location.reload()}>
            새로고침
          </Button>
        </Box>
        <Card sx={{ pb: 2 }}>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={filterStatus}
            onChange={onChangeFilterStatus}
            sx={{ px: 2, bgcolor: 'background.neutral' }}
          >
            {TABS_OPTIONS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                label={tab.label}
                value={tab.value}
                icon={
                  <Label
                    color={
                      tab.value === '전체' ? 'info' : tab.value === '정상' ? 'success' : 'error'
                    }
                  >
                    {tab.count}
                  </Label>
                }
              />
            ))}
          </Tabs>
          <Divider />
          <ServerTableToolbar filterName={filterName} onFilterName={handleFilterName} />
          <Scrollbar>
            <TableContainer sx={{ position: 'relative' }}>
              <Table size={dense === '좁게' ? 'small' : 'medium'}>
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
                      <ServerTableRow key={index} row={row} />
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

export default ServerPresenter;
