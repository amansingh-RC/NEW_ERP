import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from '@mui/icons-material/Mail';

export default function BadgeMax() {
  return (
    <>
      <h2 className="m-5">Badges</h2>
      <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
        <Badge color="secondary" badgeContent={99}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={100}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999}>
          <MailIcon />
        </Badge>
      </Stack>
    </>
  );
}
