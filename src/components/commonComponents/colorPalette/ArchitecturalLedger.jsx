import {
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import HubIcon from "@mui/icons-material/Hub";
import LinkIcon from "@mui/icons-material/Link";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const colorCards = [
  {
    name: "Primary",
    hex: "#D3AA4C",
    bg: "#D3AA4C",
    textColor: "#fff",
    swatches: ["#6b4f1e", "#9b7230", "#c49840", "#d3aa4c", "#dfc278", "#ead9a8", "#f5efd8"],
  },
  {
    name: "Secondary",
    hex: "#262262",
    bg: "#262262",
    textColor: "#fff",
    swatches: ["#0a091d", "#141240", "#1c1858", "#262262", "#403a9e", "#8880cf", "#c4c0e8"],
  },
  {
    name: "Tertiary",
    hex: "#ECC160",
    bg: "#ECC160",
    textColor: "#5a4410",
    swatches: ["#7a6010", "#a88820", "#c8a038", "#ecc160", "#f0d080", "#f5e4a8", "#faf3d8"],
  },
  {
    name: "Neutral",
    hex: "#F8FAFC",
    bg: "#ffffff",
    textColor: "#333",
    swatches: ["#111111", "#444444", "#777777", "#aaaaaa", "#cccccc", "#e8e8e8", "#f8fafc"],
  },
];

function ColorCard({ name, hex, bg, textColor, swatches }) {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #e0e0e0",
        mb: 1.5,
      }}
    >
      <Box
        sx={{
          bgcolor: bg,
          px: 1.5,
          py: 0.75,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: textColor, fontSize: 12, fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography sx={{ color: textColor, fontSize: 10, opacity: 0.85 }}>
          {hex}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", height: 26 }}>
        {swatches.map((color, i) => (
          <Box key={i} sx={{ flex: 1, bgcolor: color }} />
        ))}
      </Box>
    </Box>
  );
}

const cellSx = {
  bgcolor: "#F5F5F5",
  borderRadius: "12px",
  p: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function ArchitecturalLedger() {
  return (
    <Box
      sx={{
        border: "2.5px solid #7c6ad6",
        borderRadius: "20px",
        p: 2,
        bgcolor: "#ebebeb",
        maxWidth: 860,
        mx: "auto",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Box
          sx={{
            width: 22,
            height: 22,
            bgcolor: "#262262",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LinkIcon sx={{ color: "#fff", fontSize: 13 }} />
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#333" }}>
          Architectural Ledger
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ display: "flex", gap: 1.5 }}>
        {/* Left: Color palette */}
        <Box sx={{ width: 165, flexShrink: 0 }}>
          {colorCards.map((card) => (
            <ColorCard key={card.name} {...card} />
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 1.5,
          }}
        >
          <Box sx={{ ...cellSx, flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 0.5 }}>
              <Typography sx={{ fontSize: 11, color: "#888" }}>Headline</Typography>
              <Typography sx={{ fontSize: 11, color: "#888" }}>Manrope</Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 72,
                fontWeight: 400,
                color: "#333",
                lineHeight: 1,
              }}
            >
              Aa
            </Typography>
          </Box>

          <Box sx={{ ...cellSx, flexDirection: "column", gap: 1 }}>
            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  bgcolor: "#D3AA4C",
                  color: "#fff",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: 12,
                  px: 2,
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#c49840", boxShadow: "none" },
                }}
              >
                Primary
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#444",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: 12,
                  px: 2,
                  borderColor: "#bbb",
                  bgcolor: "#fff",
                }}
              >
                Secondary
              </Button>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  bgcolor: "#262262",
                  color: "#fff",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: 12,
                  px: 2,
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#1c1858", boxShadow: "none" },
                }}
              >
                Inverted
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#444",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: 12,
                  px: 2,
                  borderColor: "#bbb",
                  bgcolor: "#fff",
                }}
              >
                Outlined
              </Button>
            </Stack>
          </Box>

          <Box sx={cellSx}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#e4e4e4",
                borderRadius: "20px",
                px: 1.5,
                py: 0.4,
                width: "100%",
                maxWidth: 160,
              }}
            >
              <SearchIcon sx={{ color: "#888", fontSize: 16, mr: 0.5 }} />
              <InputBase
                placeholder="Search"
                sx={{ fontSize: 12, color: "#555", flex: 1 }}
              />
            </Box>
          </Box>

          <Box sx={{ ...cellSx, flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 0.5 }}>
              <Typography sx={{ fontSize: 11, color: "#888" }}>Body</Typography>
              <Typography sx={{ fontSize: 11, color: "#888" }}>Manrope</Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 52,
                fontWeight: 400,
                color: "#555",
                lineHeight: 1,
              }}
            >
              Aa
            </Typography>
          </Box>

          <Box sx={{ ...cellSx, flexDirection: "column", gap: 1.5, px: 2 }}>
            <Box sx={{ height: 3.5, bgcolor: "#D3AA4C", borderRadius: 2, width: "100%" }} />
            <Box sx={{ height: 3.5, bgcolor: "#262262", borderRadius: 2, width: "100%" }} />
          </Box>

          <Box sx={{ ...cellSx, gap: 1 }}>
            <IconButton sx={{ bgcolor: "#e4e4e4", width: 38, height: 38 }}>
              <HomeIcon sx={{ fontSize: 19, color: "#D3AA4C" }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#e4e4e4", width: 38, height: 38 }}>
              <SearchIcon sx={{ fontSize: 19, color: "#777" }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#e4e4e4", width: 38, height: 38 }}>
              <PersonIcon sx={{ fontSize: 19, color: "#777" }} />
            </IconButton>
          </Box>

          <Box sx={{ ...cellSx, flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 0.5 }}>
              <Typography sx={{ fontSize: 11, color: "#888" }}>Label</Typography>
              <Typography sx={{ fontSize: 11, color: "#888" }}>Inter</Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 38,
                fontWeight: 400,
                color: "#777",
                lineHeight: 1,
              }}
            >
              Aa
            </Typography>
          </Box>

          <Box sx={{ ...cellSx, gap: 1.5 }}>
            <IconButton
              sx={{
                bgcolor: "#D3AA4C",
                width: 42,
                height: 42,
                "&:hover": { bgcolor: "#c49840" },
              }}
            >
              <EditIcon sx={{ color: "#fff", fontSize: 19 }} />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              startIcon={<EditIcon sx={{ fontSize: 14 }} />}
              sx={{
                bgcolor: "#ECC160",
                color: "#5a4410",
                borderRadius: "20px",
                textTransform: "none",
                fontSize: 12,
                px: 2,
                boxShadow: "none",
                "&:hover": { bgcolor: "#d4ad50", boxShadow: "none" },
              }}
            >
              Label
            </Button>
          </Box>

          <Box sx={{ ...cellSx, gap: 1 }}>
            <IconButton sx={{ bgcolor: "#4a5340", width: 38, height: 38, "&:hover": { bgcolor: "#3a4230" } }}>
              <EditIcon sx={{ color: "#fff", fontSize: 17 }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#262262", width: 38, height: 38, "&:hover": { bgcolor: "#1c1858" } }}>
              <HubIcon sx={{ color: "#fff", fontSize: 17 }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#D3AA4C", width: 38, height: 38, "&:hover": { bgcolor: "#c49840" } }}>
              <LocalOfferIcon sx={{ color: "#fff", fontSize: 17 }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#c62828", width: 38, height: 38, "&:hover": { bgcolor: "#a81c1c" } }}>
              <DeleteIcon sx={{ color: "#fff", fontSize: 17 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
