import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

export default function ActionAlerts() {
  return (
    <>
      <Container className="w-5xl">
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="warning" onClose={() => {}}>
            This Alert displays the default close icon.
          </Alert>
          <Alert
            severity="success"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This Alert uses a Button component for its action.
          </Alert>
        </Stack>
      </Container>
    </>
  );
}
