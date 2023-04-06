import { Card, Typography } from '@mui/material';
import dayjs from 'dayjs';
interface TitlieUIProps {
  title?: string;
}

const TitleUI = ({ title }: TitlieUIProps) => (
  <Card sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, p: 2 }}>
    <Typography>{title}</Typography>
    <Typography> {dayjs().format('YYYY.MM.DD HH:mm')}</Typography>
  </Card>
);

export default TitleUI;
