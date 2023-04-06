// @mui
import { styled } from '@mui/material/styles';
import Page from 'src/components/commons/Page';
import { Box, Stack, Container, Typography, TextField, Button } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginContainer() {
  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle></HeaderStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  로그인
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  회원가입은 ***에게 문의 바랍니다
                </Typography>
              </Box>
            </Stack>
            <TextField fullWidth label="아이디를 입력해주세요" />
            <TextField type="password" fullWidth label="비밀번호를 입력해주세요" sx={{ mt: 3 }} />
            {/* <Alert severity="info" sx={{ mb: 3 }}>
              Use email : <strong>demo@minimals.cc</strong> / password :<strong> demo1234</strong>
            </Alert> */}
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              onClick={() => {
                console.log('로그인');
              }}
            >
              로그인
            </Button>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
