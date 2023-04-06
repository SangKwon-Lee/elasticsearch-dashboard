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
import Page from 'src/components/commons/Page';
import useSettings from 'src/hooks/useSettings';
import { emptyRows } from 'src/hooks/useTable';
import { NetworkProps } from './Network.Type';
import NetworkTableRow from './NetworkTableRow';
import Label from 'src/components/commons/Label';
import NetworkTableToolbar from './NetworkTableToolbar';
import Scrollbar from 'src/components/commons/Scrollbar';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';
import TablePagination from 'src/components/commons/table/TablePagination';
import { TableHeadCustom, TableEmptyRows, TableNoData } from 'src/components/commons/table';

const TABLE_HEAD = [
  { id: 'serviceType', label: '타입', align: 'left' },
  { id: 'serviceNodeName', label: '노드' },
  { id: 'group', label: '그룹' },
  { id: 'channelId', label: '채널' },
  { id: 'port', label: '포트' },
  { id: 'sourceLinks', label: '소스' },
  { id: 'destLinks', label: '타겟' },
  { id: 'numberOfCLoseWait', label: 'CLOSE_WAIT' },
  { id: 'transmitQueue', label: '송신 큐' },
  { id: 'receiveQueue', label: '수신 큐' },
];

const NetworkPresenter = ({
  page,
  dense,
  order,
  onSort,
  perPage,
  orderBy,
  filterName,
  filterType,
  handlePage,
  pageCount,
  tableData,
  filterStatus,
  dataFiltered,
  onChangeDense,
  handlePerPage,
  tableDataOption,
  handleFilterType,
  handleFilterName,
  handleFilterStatus,
}: NetworkProps) => {
  const themeStretch = useSettings();

  //* 테이블 검색 목록이 없을 때
  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterStatus) ||
    (!dataFiltered.length && !!filterType);

  const getLengthByStatus = (node: string) =>
    tableData.filter((item) => item.serviceType === node).length;

  const STATUS_OPTIONS = [
    { value: '전체', label: '전체', count: tableData.length },
    { value: 'MCI', label: 'MCI', count: getLengthByStatus('MCI') },
    { value: 'FEP', label: 'FEP', count: getLengthByStatus('FEP') },
    { value: 'EAI', label: 'EAI', count: getLengthByStatus('EAI') },
  ];

  return (
    <Page title={'네트워크'}>
      <Container maxWidth={themeStretch.themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="네트워크"
          links={[
            { name: 'CPM', href: '/dashboard' },
            { name: '네트워크', href: '/network' },
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
            onChange={(event, value) => handleFilterStatus(value)}
            sx={{ px: 2, bgcolor: 'background.neutral' }}
          >
            {STATUS_OPTIONS.length > 0 &&
              STATUS_OPTIONS.map((tab) => (
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
                          : tab.value === 'MCI'
                          ? 'success'
                          : tab.value === 'FEP'
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
          <NetworkTableToolbar
            filterName={filterName}
            filterType={filterType}
            tableDataOption={tableDataOption}
            handleFilterType={handleFilterType}
            handleFilterName={handleFilterName}
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
                      <NetworkTableRow key={index} row={row} />
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
          <TablePagination
            page={page}
            dense={dense}
            isDense={true}
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

export default NetworkPresenter;
