import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { Handle } from 'react-flow-renderer';

const dataLabel = ['MCI', 'FEP', 'EAI', 'Nexcode'];
export default memo(({ data, isConnectable }: any) => {
  return (
    <>
      <Handle
        type="source"
        //@ts-ignore
        position="left"
        id="1"
        style={{ top: 'auto', bottom: 5, background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        //@ts-ignore
        position="left"
        id="2"
        style={{ top: 10, bottom: 'auto', background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        //@ts-ignore
        position="right"
        id="5"
        style={{ top: 'auto', bottom: 30, background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          color="black"
          sx={{ wordBreak: 'keep-all' }}
          fontSize={dataLabel.filter((item) => item === data?.label).length > 0 ? 10 : 9}
          fontWeight={700}
        >
          {data?.label}
        </Typography>
        <Typography color="black" fontSize={8}>
          {data?.secondLabel}
        </Typography>
        <Typography color="black" fontSize={9}>
          {data.elapsedTime && data?.elapsedTime / 1000 + '초'}
        </Typography>
      </div>
      <Handle
        type="source"
        //@ts-ignore
        position="right"
        id="3"
        style={{ top: 10, bottom: 'auto', background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        //@ts-ignore
        position="right"
        id="4"
        style={{ bottom: 5, top: 'auto', background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        //@ts-ignore
        position="left"
        id="6"
        style={{ bottom: 30, top: 'auto', background: 'transparent', border: 'none' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
