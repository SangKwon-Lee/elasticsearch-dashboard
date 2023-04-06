import {
  Divider,
  Card,
  Typography,
  Box,
  useTheme,
  TableContainer,
  Table,
  TableBody,
  Button,
} from '@mui/material';
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import useTable from 'src/hooks/useTable';
import { useLocation } from 'react-router';
import Scrollbar from 'src/components/commons/Scrollbar';
import { TableHeadCustom } from 'src/components/commons/table';
import TransactionModalTableRow from './TransactionModalTableRow';
import { TransactionModalContainerNodeData } from './Transaction.Type';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '52%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  width: '100%',
  maxWidth: 800,
  border: 'none',
  borderRadius: '8px',
  outline: 'none',
};

const TABLE_HEAD = [
  { id: 'index', label: 'No.', align: 'left' },
  { id: 'timestamp', label: '처리일시' },
  { id: 'step', label: '내역발생단계' },
  { id: 'status', label: '처리결과' },
];

const TransactionModalContainer = ({ nodeData }: TransactionModalContainerNodeData) => {
  const theme = useTheme();
  //* 상세 주소
  const location = useLocation();
  const pathName = location.pathname.replace('/transaction/', '');
  const { order, orderBy, selected, onSort } = useTable({
    defaultOrderBy: 'createDate',
  });

  const RowTitleBox = styled(Box)`
    width: 140px;
    height: 35px;
    background-color: ${theme.palette.background.neutral};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  `;

  const RowContentsBox = styled(Box)`
    width: 160px;
    padding-left: 8px;
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 12px;
  `;

  const RowContentsBox2 = styled(Box)`
    width: 460px;
    padding-left: 8px;
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 12px;
  `;

  const RowContentsBox3 = styled(Box)`
    width: 100%;
    padding-left: 8px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  `;

  const date = dayjs(nodeData?.startTimestamp);
  const portNum = nodeData?.label === 'MCI' ? '9034' : nodeData?.label === 'FEP' ? '9035' : '9036';
  const isBtn =
    nodeData?.label.includes('MCI') ||
    nodeData?.label.includes('FEP') ||
    nodeData?.label.includes('EAI');

  return (
    <Card sx={style}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6" textAlign="center">
          거래상세
        </Typography>
        {isBtn ? (
          <Button
            sx={{ position: 'absolute', right: 0, mr: 2 }}
            variant="contained"
            onClick={() =>
              window.open(
                `http://d${nodeData?.label.toLowerCase()}.fsb.or.kr:${portNum}/IMLG/IMLG0101_01_FSB.html?from_date=${date.format(
                  'YYYY-MM-DD'
                )}&from_hour=${date.format('HH')}&from_minute=${date.format(
                  'mm'
                )}&to_date=${date.format('YYYY-MM-DD')}&to_hour=${date
                  .add(1, 'hour')
                  .format('HH')}&to_minute=${date.format('mm')}&trn_unqno=${pathName}`
              )
            }
          >
            {nodeData?.label} 시스템 바로가기
          </Button>
        ) : (
          <></>
        )}
      </Box>
      <Divider sx={{ my: 2 }} />
      {nodeData?.serviceType === 'framework' ? (
        <Box sx={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <RowTitleBox>거래일자</RowTitleBox>
            <RowContentsBox>{dayjs(nodeData?.startTimestamp).format('YYYY-MM-DD')}</RowContentsBox>
            <RowTitleBox>서비스구분</RowTitleBox>
            <RowContentsBox>{nodeData?.serviceName}</RowContentsBox>
            <RowTitleBox>처리상태</RowTitleBox>
            <RowContentsBox>{nodeData?.status}</RowContentsBox>
          </Box>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <RowTitleBox>시작시간</RowTitleBox>
            <RowContentsBox>
              {dayjs(nodeData?.startTimestamp).format('YYYY-MM-DD HH:mm:ss.SSS')}
            </RowContentsBox>
            <RowTitleBox>종료시간</RowTitleBox>
            <RowContentsBox>
              {dayjs(nodeData?.endTimestamp).format('YYYY-MM-DD HH:mm:ss.SSS')}
            </RowContentsBox>
            <RowTitleBox>소요시간</RowTitleBox>
            <RowContentsBox>{nodeData && Number(nodeData?.elapsedTime) / 1000}</RowContentsBox>
          </Box>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <RowTitleBox>WAS 인스턴스 ID</RowTitleBox>
            <RowContentsBox>{nodeData?.node}</RowContentsBox>
            <RowTitleBox>저축은행</RowTitleBox>
            <RowContentsBox>
              {nodeData?.bankCode}
              {[nodeData?.bankName]}
            </RowContentsBox>
            <RowTitleBox>사용자 정보</RowTitleBox>
            <RowContentsBox>{nodeData?.userNo}</RowContentsBox>
          </Box>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <RowTitleBox>최초전송채널</RowTitleBox>
            <RowContentsBox>{nodeData?.firstSendChannelCode}</RowContentsBox>
            <RowTitleBox>전송채널</RowTitleBox>
            <RowContentsBox>{nodeData?.beforeSendChannelCode}</RowContentsBox>
            <RowTitleBox>최초거래코드</RowTitleBox>
            <RowContentsBox>{nodeData?.serviceCode}</RowContentsBox>
          </Box>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <RowTitleBox>메시지 내용</RowTitleBox>
            <RowContentsBox3>{nodeData?.message}</RowContentsBox3>
          </Box>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <RowTitleBox>에러 메시지 내용</RowTitleBox>
            <RowContentsBox3>{nodeData?.errorMessage}</RowContentsBox3>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', flex: 1 }}>
              <RowTitleBox>거래일자</RowTitleBox>
              <RowContentsBox>
                {dayjs(nodeData?.startTimestamp).format('YYYY-MM-DD')}
              </RowContentsBox>
              <RowTitleBox>노드번호</RowTitleBox>
              <RowContentsBox>{nodeData?.node}</RowContentsBox>
              <RowTitleBox>처리상태</RowTitleBox>
              <RowContentsBox>{nodeData?.status}</RowContentsBox>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
              <RowTitleBox>시작시간</RowTitleBox>
              <RowContentsBox>
                {dayjs(nodeData?.startTimestamp).format('YYYY-MM-DD HH:mm:ss.SSS')}
              </RowContentsBox>
              <RowTitleBox>종료시간</RowTitleBox>
              <RowContentsBox>
                {dayjs(nodeData?.endTimestamp).format('YYYY-MM-DD HH:mm:ss.SSS')}
              </RowContentsBox>
              <RowTitleBox>소요시간</RowTitleBox>
              <RowContentsBox>{nodeData && Number(nodeData?.elapsedTime) / 1000}</RowContentsBox>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
              <RowTitleBox>인터페이스</RowTitleBox>
              <RowContentsBox2>
                {nodeData?.interfaceId}[{nodeData?.interfaceName}]
              </RowContentsBox2>
              <RowTitleBox>연계유형</RowTitleBox>
              <RowContentsBox>{nodeData?.interfacePattern}</RowContentsBox>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
              <RowTitleBox>저축은행</RowTitleBox>
              <RowContentsBox2>
                {nodeData?.bankCode}[{nodeData?.bankName}]
              </RowContentsBox2>
              <RowTitleBox>부점</RowTitleBox>
              <RowContentsBox>{nodeData?.branchCode}</RowContentsBox>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
              <RowTitleBox>소스채널</RowTitleBox>
              <RowContentsBox>{nodeData?.sourceChannel}</RowContentsBox>
              <RowTitleBox>소스채널 IP</RowTitleBox>
              <RowContentsBox>{nodeData?.sourceIpPort}</RowContentsBox>
              <RowTitleBox>플로우 ID</RowTitleBox>
              <RowContentsBox>{nodeData?.flowId}</RowContentsBox>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
              <RowTitleBox>타겟채널</RowTitleBox>
              <RowContentsBox>{nodeData?.targetChannel}</RowContentsBox>
              <RowTitleBox>타겟채널Ip</RowTitleBox>
              <RowContentsBox>{nodeData?.targetIpPort}</RowContentsBox>
              <RowTitleBox>실행유형</RowTitleBox>
              <RowContentsBox>{}</RowContentsBox>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
              <RowTitleBox>거래대표SEQ</RowTitleBox>
              <RowContentsBox2 sx={{ wordBreak: 'break-word' }}>{nodeData?.mstSeq}</RowContentsBox2>
              <RowTitleBox>최초거래코드</RowTitleBox>
              <RowContentsBox>{nodeData?.serviceCode}</RowContentsBox>
            </Box>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Scrollbar>
            {nodeData?.details && (
              <TableContainer sx={{ position: 'relative' }}>
                <Table size={'small'}>
                  <TableHeadCustom
                    order={order}
                    onSort={onSort}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={nodeData?.details.length}
                    numSelected={selected.length}
                  />
                  <TableBody>
                    {nodeData?.details &&
                      nodeData?.details.map((row, index) => (
                        <TransactionModalTableRow key={index} row={row} index={index + 1} />
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Scrollbar>
        </>
      )}
    </Card>
  );
};

export default TransactionModalContainer;
