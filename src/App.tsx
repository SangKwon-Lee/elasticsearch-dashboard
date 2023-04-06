// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Typography } from '@mui/material';
import ThemeSettings from './components/settings';
import { ToastContainer, toast } from 'react-toastify';
import ScrollToTop from './components/commons/ScrollToTop';
import { ProgressBarStyle } from './components/commons/ProgressBar';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

export default function App() {
  useEffect(() => {
    // notify();
    const socket = io('ws://172.16.106.21:4000/alertToast');
    socket.on('data', (data) => {
      notify(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const route = useNavigate();
  const notify = (data) =>
    toast(CustomToastWithLink(data), {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const CustomToastWithLink = (data) => (
    <Box sx={{ width: 200 }}>
      <Typography onClick={() => route('anomaly')}>{data}</Typography>
    </Box>
  );

  return (
    <>
      <MotionLazyContainer>
        <ThemeProvider>
          <ThemeSettings>
            <ProgressBarStyle />
            <ScrollToTop />
            <Router />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              // pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </ThemeSettings>
        </ThemeProvider>
      </MotionLazyContainer>
    </>
  );
}
