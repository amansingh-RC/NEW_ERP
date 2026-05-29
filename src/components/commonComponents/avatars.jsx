import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function LetterAvatars() {
  return (
    <>
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: '#ecc160' }}>N</Avatar>
      <Avatar sx={{ bgcolor: '#262262' }}>OP</Avatar>
    </Stack>
    </>
  );
}
