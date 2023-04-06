import { Box, Card, Divider, Stack, Typography } from '@mui/material';
import { ColorRed } from 'src/utils/color';

function IssueDetail() {
  return (
    <>
      <Box
        sx={{
          mt: 2,
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            // md: 'repeat(3, 1fr)',
            // lg: 'repeat(4, 1fr)',
          },
        }}
      >
        <Card sx={{ p: 2 }}>
          <Typography>Impacted Targets</Typography>
          <Divider sx={{ my: 2 }} />
          <Stack divider={<Divider flexItem sx={{ my: 2 }} />}>
            <Box sx={{ pl: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <Typography>Traget:&nbsp;</Typography>
                <Typography>WebServer1 (Nginx)</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography>Impact:&nbsp;</Typography>
                <Typography color={ColorRed}>System Down</Typography>
              </Box>
            </Box>
            <Box sx={{ pl: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <Typography>Traget:&nbsp;</Typography>
                <Typography>WebServer1 (Nginx)</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography>Impact:&nbsp;</Typography>
                <Typography color={ColorRed}>System Down</Typography>
              </Box>
            </Box>
            <Box sx={{ pl: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <Typography>Traget:&nbsp;</Typography>
                <Typography>WebServer1 (Nginx)</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography>Impact:&nbsp;</Typography>
                <Typography color={ColorRed}>System Down</Typography>
              </Box>
            </Box>
          </Stack>
        </Card>
        <Card sx={{ p: 2 }}>
          <Typography>Root Cause</Typography>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', pl: 2, pb: 1 }}>
            <Typography>Issue:&nbsp;</Typography>
            <Typography>Server Crash</Typography>
          </Box>
          <Box sx={{ display: 'flex', pl: 2, pb: 1 }}>
            <Typography>Reason:&nbsp;</Typography>
            <Typography>WebServer1's disk full</Typography>
          </Box>
          <Box sx={{ display: 'flex', pl: 2, pb: 1 }}>
            <Typography>Logs:&nbsp;</Typography>
            <Typography color={ColorRed}>You are running out of disk space onLocal Disk</Typography>
          </Box>
          <Box sx={{ display: 'flex', pl: 2, pb: 1 }}>
            <Typography>File:&nbsp;</Typography>
            <Typography>sysolg</Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default IssueDetail;
