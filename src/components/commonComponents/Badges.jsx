import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export default function BadgeMax() {
  return (
    <>
      <h2 className="m-5">Badges</h2>
      <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
        <Badge color="secondary" badgeContent={99} sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#262262",
              color: "white",
            },
          }}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={100} sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#262262",
              color: "white",
            },
          }}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999} sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#262262",
              color: "white",
            },
          }}>
          <MailIcon />
        </Badge>
      </Stack>
    </>
  );
}
