import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  MenuItem,
  Modal,
  Pagination,
  Table,
  TableBody,
  TableContainer,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import dayjs from 'dayjs';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router';
import Page from 'src/components/commons/Page';
import useSettings from 'src/hooks/useSettings';
import ColorSelectorNode from './ColorSelectNode';
import React, { useEffect, useState } from 'react';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import { TransactionMock } from 'src/_mock/_mockData';
import useTable, { emptyRows } from 'src/hooks/useTable';
import Scrollbar from 'src/components/commons/Scrollbar';
import TransactionModalContainer from './TransactionModal.Container';
import HeaderBreadcrumbs from 'src/components/commons/HeaderBreadcrumbs';
import TransactionRowDetailTableRow from './TransactionRowDetailTableRow';
import { TableEmptyRows, TableHeadCustom } from 'src/components/commons/table';
import { TRANSACTION_INFO_DETAIL, TRANSACTION_INFO_SUMMARY } from './Transaction.Query';
import ReactFlow, { useNodesState, useEdgesState, MiniMap, Controls } from 'react-flow-renderer';
import TransactionDetailTableRow from 'src/components/dashboard/transaction/TransactionDetailTableRow';
import {
  TransactionDetailListTableData,
  TransactionInfoDetailList,
  TransactionModalNodeData,
} from './Transaction.Type';

const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

const PAGE = [10, 25, 50, 100];
const Dense = ['좁게', '넓게'];

const TABLE_HEAD = [
  { id: 'id', label: 'No.' },
  { id: 'timestamp', label: '거래발생일시' },
  { id: 'serviceType', label: '거래업무시스템' },
  { id: 'serviceCode', label: '최초거래코드' },
  { id: 'interfaceId', label: '인터페이스ID' },
  { id: 'interfaceName', label: '인터페이스명' },
  { id: 'interfacePattern', label: '연계유형' },
  { id: 'sourceChannel', label: '소스채널' },
  { id: 'targetChannel', label: '타겟채널' },
  { id: 'serviceNode', label: '노드' },
  { id: 'status', label: '상태' },
  { id: 'bankCode', label: '은행코드' },
  { id: 'errorMessage', label: '에러상세내역' },
];

const TABLE_HEAD_DETAIL = [
  { id: 'id', label: 'No.', align: 'left' },
  { id: 'timestamp', label: '발생일시' },
  { id: 'step', label: '내역발생단계' },
  { id: 'status', label: '처리결과' },
];
const mode = process.env.REACT_APP_MODE;
const startDate = dayjs().add(9, 'hour').subtract(7, 'week').toISOString().slice(0, -5) + '+0900';
const endDate = dayjs().add(9, 'hour').toISOString().slice(0, -5) + '+0900';

const TransactionDetailContainer = () => {
  const theme = useTheme();

  //* 상세 주소
  const location = useLocation();
  const pathName = location.pathname.replace('/transaction/', '');
  const themeStretch = useSettings();
  const { data } = useQuery(TRANSACTION_INFO_DETAIL, {
    variables: {
      gid: pathName,
      gte: startDate,
      lte: endDate,
    },
  });
  const { data: summary } = useQuery(TRANSACTION_INFO_SUMMARY, {
    variables: {
      gid: pathName,
      gte: startDate,
      lte: endDate,
    },
  });

  const { dense, order, orderBy, selected, onSort, onChangeDense } = useTable({
    defaultOrderBy: 'createDate',
  });

  //* 테이블 데이터
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tableData, setTableData] = useState<TransactionDetailListTableData[]>(
    mode === 'DEV' ? TransactionMock.TransectionDetailListMockup : []
  );

  //* 모달 Open Close
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //* Tooltip Open
  const [openTooltip, setOpenTooltip] = useState(false);
  const [tooltiMsg, setTooltipMsg] = useState('');
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  //* 테이블 페이지네이션
  const [perPage, setPerPage] = useState(25);
  const [pageCount, setPageCount] = useState(10);
  const [page, setPage] = useState(1);

  //* 노드 상세 정보
  const [nodeData, setNodeData] = useState<TransactionModalNodeData | null>(null);
  //* 리스트 클릭시
  const [listDetail, setListDetail] = useState<TransactionInfoDetailList[]>([]);

  //* 데이터 넣기
  useEffect(() => {
    if (mode === 'DEV') {
      setEdges(TransactionMock.TransactionEdges);
      setNodes(TransactionMock.TransactionNode);
    }
    if (data?.transaction_info_detail?.nodes) {
      setNodes(data?.transaction_info_detail?.nodes);
    }
    if (data?.transaction_info_detail?.edges) {
      setEdges(data?.transaction_info_detail?.edges);
    }
    if (data?.transaction_info_detail?.masters) {
      setTableData(data?.transaction_info_detail?.masters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, data]);

  //*노드에 마우스 클릭
  const handleNodesClick = (__: any, data: any) => {
    if (mode === 'DEV') {
      handleOpen();
      setNodeData(TransactionMock.TransactionNodeDataMock);
    }
    if (data?.data.startTimestamp && mode !== 'DEV') {
      handleOpen();
      setNodeData(data.data);
    }
  };
  //* Edge에 마우스 올릴 때
  const handleEdgesMouseOver = (__: any, data: any) => {
    if (data.data?.msg) {
      setOpenTooltip(true);
      setTooltipMsg(data.data.msg);
    }
  };
  //* Edge에 마우스 내릴때 때
  const handleEdgesMouseLeave = () => {
    setOpenTooltip(false);
    setTooltipMsg('');
  };

  //* 리스트 클릭시 함수
  const handleListDetailData = (e: TransactionDetailListTableData) => {
    if (mode === 'DEV') {
      return setListDetail(TransactionMock.TransactionDetailRowMockUp);
    }
    if (e.mstSeq) {
      if (
        data?.transaction_info_detail?.details.filter((data) => data.mstSeq === e.mstSeq)[0].details
      ) {
        setListDetail(
          data?.transaction_info_detail?.details.filter((data) => data.mstSeq === e.mstSeq)[0]
            .details
        );
      } else {
        setListDetail([]);
      }
    } else {
      setListDetail([]);
    }
  };

  //* 테이블 페이지네이션 함수
  const handlePerPage = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };
  //* 페이지 변경 함수
  const handlePage = (__: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  //* 페이지네이션 useEffect
  useEffect(() => {
    if (tableData) {
      let pageList = Math.ceil(tableData.length / perPage);
      if (pageList <= 1) {
        pageList = 1;
      }
      setPageCount(pageList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  return (
    <>
      <Page title={'Transaction'}>
        <Container maxWidth={themeStretch.themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="트랜젝션 상세"
            links={[
              { name: 'CPM', href: '/dashboard' },
              { name: '트랜잭션', href: '/transaction' },
              { name: `GUID-${pathName}`, href: `/transaction/${pathName}` },
            ]}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ mb: 2 }} variant="contained" onClick={() => window.location.reload()}>
              새로고침
            </Button>
          </Box>
          <Card sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', flex: 1 }}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  fontWeight={700}
                  variant="subtitle2"
                  sx={{ mb: 2 }}
                  color={theme.palette.grey[500]}
                >
                  기본정보
                </Typography>
                <Typography>GUID : {pathName}</Typography>
                <Typography>유형 : {summary?.transaction_info_summary?.type}</Typography>
                <Typography>상태 : {summary?.transaction_info_summary?.status}</Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  fontWeight={700}
                  variant="subtitle2"
                  sx={{ mb: 2 }}
                  color={theme.palette.grey[500]}
                >
                  시간정보
                </Typography>
                <Typography>
                  시작시간 :
                  {dayjs(summary?.transaction_info_summary?.startTimestamp).format(
                    'YYYY-MM-DD HH:mm:ss.SSS'
                  )}
                </Typography>
                <Typography>
                  종료시간 :
                  {dayjs(summary?.transaction_info_summary?.endTimestamp).format(
                    'YYYY-MM-DD HH:mm:ss.SSS'
                  )}
                </Typography>
                <Typography>
                  처리시간(초) : {summary && summary?.transaction_info_summary?.elapsedTime / 1000}
                </Typography>
              </Box>
            </Box>
          </Card>
          <Card sx={{ height: 600, mb: 3, backgroundColor: 'white' }}>
            <CardHeader sx={{ color: 'black' }} title="트랜젝션 연관도"></CardHeader>
            <ReactFlow
              fitView
              nodes={nodes}
              edges={edges}
              // defaultZoom={100}
              panOnScroll={false}
              zoomOnScroll={false}
              nodeTypes={nodeTypes}
              preventScrolling={false}
              onNodeClick={handleNodesClick}
              onNodesChange={onNodesChange}
              onEdgeMouseEnter={handleEdgesMouseOver}
              onEdgeMouseLeave={handleEdgesMouseLeave}
            >
              <MiniMap />
              <Controls />
            </ReactFlow>
          </Card>
          <Card sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6">거래마스터</Typography>
            <Divider sx={{ my: 1 }} />
            <Scrollbar>
              <TableContainer sx={{ position: 'relative', flex: 1, minWidth: 1800 }}>
                <Table size={dense === '좁게' ? 'small' : 'medium'}>
                  <TableHeadCustom
                    order={order}
                    onSort={onSort}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={tableData.length}
                    numSelected={selected.length}
                  />
                  <TableBody>
                    {tableData &&
                      tableData
                        .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                        .map((row, index) => (
                          <TransactionDetailTableRow
                            row={row}
                            index={index + 1}
                            key={index}
                            handleListDetailData={handleListDetailData}
                          />
                        ))}
                    <TableEmptyRows
                      height={dense === '좁게' ? 56 : 76}
                      emptyRows={emptyRows(page - 1, perPage, tableData.length)}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
              <Divider sx={{ my: 2 }} />
            </Scrollbar>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField select label="행간격" value={dense} onChange={onChangeDense}>
                {Dense.map((option) => (
                  <MenuItem
                    key={option}
                    value={option}
                    sx={{
                      typography: 'body2',
                      textTransform: 'capitalize',
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <Box sx={{ margin: 'auto' }}>
                <Pagination count={pageCount} onChange={handlePage} shape="rounded" page={page} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 1 }}>페이지 당 행수</Box>
                <TextField select label="수" value={perPage} onChange={handlePerPage}>
                  {PAGE.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={{
                        typography: 'body2',
                        textTransform: 'capitalize',
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Card>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <>
                <TransactionModalContainer nodeData={nodeData} />
              </>
            </Modal>
          </div>
          <Divider sx={{ my: 2 }} />
          {listDetail.length > 0 && (
            <Card sx={{ p: 2, mb: 3, width: '50%' }}>
              <Typography variant="h6">거래상세</Typography>
              <Divider sx={{ my: 1 }} />
              <TableContainer sx={{ position: 'relative' }}>
                <Table size={dense ? 'small' : 'medium'}>
                  <TableHeadCustom
                    order={order}
                    onSort={onSort}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD_DETAIL}
                    rowCount={listDetail.length}
                    numSelected={selected.length}
                  />
                  <TableBody>
                    {listDetail &&
                      listDetail.map((row, index) => (
                        <TransactionRowDetailTableRow
                          row={row}
                          key={index}
                          index={index + 1}
                          handleListDetailData={handleListDetailData}
                        />
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          )}
        </Container>
      </Page>
      <MouseTooltip visible={openTooltip} offsetX={15} offsetY={10}>
        <Typography variant="h6">{tooltiMsg}</Typography>
      </MouseTooltip>
    </>
  );
};

export default TransactionDetailContainer;
