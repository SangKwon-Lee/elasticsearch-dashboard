import {
  Tab,
  Card,
  Tabs,
  Table,
  Divider,
  Container,
  TableBody,
  TableContainer,
  Button,
  Box,
} from '@mui/material';
import { emptyRows } from 'src/hooks/useTable';
import Page from 'src/components/commons/Page';
import useSettings from 'src/hooks/useSettings';
import Label from 'src/components/commons/Label';
import Scrollbar from 'src/components/commons/Scrollbar';
import { TransactionPresenterProps } from './Transaction.Type';
import TransactionTableToolbar from './TransactionTableToolbar';
// import LoadingScreen from 'src/components/commons/LoadingScreen';
import { setFilterStatus } from 'src/components/redux/transactionList';
import TransactionPagination from '../../commons/table/TablePagination';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';
import TableHeadCustom from 'src/components/commons/table/TableHeadCustom';
import { TableEmptyRows, TableNoData } from 'src/components/commons/table';
import TransactionTableRow from 'src/components/dashboard/transaction/TransactionTableRow';

const TABLE_HEAD = [
  { id: 'gid', label: 'GUID', align: 'left' },
  { id: 'status', label: '상태' },
  { id: 'type', label: '유형' },
  { id: 'startTimestamp', label: '시작시간' },
  { id: 'endTimestamp', label: '종료시간' },
  { id: 'elapsedTime', label: '처리시간(초)' },
];

const TransactionPresenter = ({
  page,
  dense,
  order,
  onSort,
  orderBy,
  loading,
  perPage,
  pageCount,
  tableData,
  handlePage,
  dispatch,
  dataFiltered,
  handlePerPage,
  onChangeDense,
  filterService,
  filterStatus,
  handleFilterName,
  TransactionListOptions,
}: TransactionPresenterProps) => {
  const themeStretch = useSettings();

  //* 테이블 검색 목록이 없을 때
  const isNotFound =
    (!dataFiltered.length && !!TransactionListOptions.search) ||
    (!dataFiltered.length && !!filterService) ||
    (!dataFiltered.length && !!filterStatus);

  const getLengthByStatus = (status: string) =>
    tableData.filter((item) => item.status === status).length;

  const STATUS_OPTIONS = [
    { value: '전체', label: '전체', count: tableData.length },
    { value: 'OK', label: '정상', count: getLengthByStatus('OK') },
    { value: 'ING', label: '진행', count: getLengthByStatus('ING') },
    { value: 'ERROR', label: '오류', count: getLengthByStatus('ERROR') },
  ];

  return (
    <Page title={'트랜젝션'}>
      {/* {loading && <LoadingScreen />} */}
      <Container maxWidth={themeStretch.themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="트랜젝션"
          links={[
            { name: 'CPM', href: '/dashboard' },
            { name: '트랜젝션', href: '/transaction' },
          ]}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mb: 2 }} variant="contained" onClick={() => window.location.reload()}>
            새로고침
          </Button>
        </Box>
        <Card>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={filterStatus}
            onChange={(event, value) => dispatch(setFilterStatus(value))}
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
                        : tab.value === 'OK'
                        ? 'success'
                        : tab.value === 'ING'
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
          <TransactionTableToolbar
            dispatch={dispatch}
            // time={TransactionListOptions.time}
            handleFilterName={handleFilterName}
            filterName={TransactionListOptions.search}
            filterService={TransactionListOptions.filterService}
          />
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
                      <TransactionTableRow key={row.gid + index} row={row} />
                    ))}
                  <TableEmptyRows
                    height={dense === '좁게' ? 56 : 76}
                    emptyRows={emptyRows(page - 1, perPage, tableData.length)}
                  />
                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
            <Divider sx={{ my: 2 }} />
          </Scrollbar>
          <TransactionPagination
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

export default TransactionPresenter;
