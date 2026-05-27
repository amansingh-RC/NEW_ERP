import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function PortfolioSection({ title, children }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 1100,
          mx: "auto",
          my: 2,
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.12)",
          background:"#ffffff",
        }}
      >
        {title ? (
          <Box sx={{ px: { xs: 2, md: 3 }, py: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, letterSpacing: 0.2, color: "common.white" }}
            >
              {title}
            </Typography>
          </Box>
        ) : null}

        <Box
          sx={{
            px: { xs: 1.5, md: 3 },
            pb: { xs: 2, md: 3 },
            
            gap: 2,
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}

