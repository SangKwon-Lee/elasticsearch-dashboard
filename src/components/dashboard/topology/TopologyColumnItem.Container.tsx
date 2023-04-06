import styled from '@emotion/styled';
import { Box, Typography, useTheme } from '@mui/material';

const CustomTypography = styled(Typography)`
  color: black;
  text-align: center;
  font-size: 15;
  font-weight: 700;
  margin: auto;
`;

const TopologyColumnItem = ({ data, isNex }: any) => {
  const theme = useTheme();

  const Circle = styled.div((props: any) => ({
    display: 'flex',
    width: '25px',
    minWidth: '25px',
    minHeight: '25px',
    height: '25px',
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

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} textAlign="center" sx={{ mb: 3 }}>
        {data.title}
      </Typography>
      {data && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          {!isNex && (
            <>
              <Circle text="주의">
                <CustomTypography>{data.catution}</CustomTypography>
              </Circle>
              <Circle text="경고">
                <CustomTypography>{data.warning}</CustomTypography>
              </Circle>
              <Circle text="위험">
                <CustomTypography>{data.danger}</CustomTypography>
              </Circle>
              <Circle text="치명">
                <CustomTypography>{data.critical}</CustomTypography>
              </Circle>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default TopologyColumnItem;
