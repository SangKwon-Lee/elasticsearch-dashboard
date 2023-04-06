// import styled from '@emotion/styled';
import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
// import { Typography, useTheme} from '@mui/material';
// const CustomTypographyRow = styled(Typography)`
//   color: black;
//   /* text-align: center; */
//   font-size: 18px;
//   font-weight: 700;
//   margin: auto;
// `;
// const CustomTypographyColumn = styled(Typography)`
//   color: black;
//   text-align: center;
//   font-size: 20px;
//   font-weight: 700;
//   margin: auto;
// `;
export default memo(({ data, isConnectable }: any) => {
  // const theme = useTheme();

  // const CircleRow = styled.div((props: any) => ({
  //   display: 'flex',
  //   width: '30px',
  //   height: '30px',
  //   minWidth: '30px',
  //   minHeight: '30px',
  //   backgroundColor:
  //     props.text === '주의'
  //       ? theme.palette.grey[500]
  //       : props.text === '경고'
  //       ? theme.palette.warning.main
  //       : props.text === '위험'
  //       ? theme.palette.error.light
  //       : theme.palette.error.main,
  //   borderRadius: '50%',
  //   margin: '0px 5px',
  // }));
  // const CircleColumn = styled.div((props: any) => ({
  //   display: 'flex',
  //   width: '40px',
  //   height: '40px',
  //   minWidth: '40px',
  //   minHeight: '40px',
  //   backgroundColor:
  //     props.text === '주의'
  //       ? theme.palette.grey[500]
  //       : props.text === '경고'
  //       ? theme.palette.warning.main
  //       : props.text === '위험'
  //       ? theme.palette.error.light
  //       : theme.palette.error.main,
  //   borderRadius: '50%',
  //   margin: '0px 5px',
  // }));

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
