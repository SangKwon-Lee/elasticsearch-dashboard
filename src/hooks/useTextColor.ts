import { useTheme } from '@mui/material/styles';
export default function useTextColor(text: any) {
  const theme = useTheme();

  if (text) {
    return theme.palette.error.main;
  } else {
    return theme.palette.text.primary;
  }
}
