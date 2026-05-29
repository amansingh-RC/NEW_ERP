import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function PortfolioSection({ title, children, compact }) {
  return (
    <Box sx={{ width: "100%", ...(compact && { height: "100%" }) }}>
      <Paper
        elevation={0}
        sx={{
          ...(compact
            ? { height: "100%", display: "flex", flexDirection: "column" }
            : { maxWidth: 1100, mx: "auto", my: 2 }),
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.15)",
          background: "#ffffff",
          overflow: "hidden",
        }}
      >
        {title ? (
          <Box
            sx={{
              px: { xs: 2, md: 3 },
              py: 1.5,
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              background: "linear-gradient(90deg, #fafafa 0%, #f5f5f5 100%)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                letterSpacing: 0.5,
                color: "#444",
                fontSize: 12,
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>
          </Box>
        ) : null}

        <Box
          sx={{
            px: { xs: 1.5, md: 3 },
            pb: { xs: 2, md: 3 },
            pt: { xs: 1.5, md: 2 },
            ...(compact && { flex: 1 }),
            gap: 2,
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}
