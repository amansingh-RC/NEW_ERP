import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <>
      <h1>Buttons</h1>
      <Stack spacing={2} direction="row" sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "#d3aa4c", borderRadius: "20px", border: "none" }}
        >
          Primary
        </Button>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "#ecc160",
            color: "#fff",
            borderRadius: "20px",
            border: "none",
          }}
        >
          Inverted
        </Button>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "#262262",
            color: "#ffffff",
            borderRadius: "20px",
            border: "none",
          }}
        >
          Secondary
        </Button>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "transparent",
            color: "#000000",
            border: "1px solid #000000",
            borderRadius: "20px",
          }}
        >
          Outlined
        </Button>
      </Stack>
    </>
  );
}
