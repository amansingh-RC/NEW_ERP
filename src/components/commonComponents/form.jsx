import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SalesOrderForm() {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: "850px",
          borderRadius: "20px",
          p: 4,
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "700", color: "#9c7b16" }}
            >
              Create Sales Order - Jewellery
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3} alignItems="stretch">
          
          <Grid item xs={12} md={6}>

            <TextField
              fullWidth
              label="Order No"
              placeholder="Enter Order Number"
              margin="normal"
            />

            <TextField
              fullWidth
              select
              label="Category"
              margin="normal"
              defaultValue=""
              SelectProps={{
                IconComponent: KeyboardArrowDownIcon,
              }}
            >
              <MenuItem value="Gold">Gold</MenuItem>
              <MenuItem value="Silver">Silver</MenuItem>
              <MenuItem value="Diamond">Diamond</MenuItem>
            </TextField>

            {/* <Grid container spacing={2}> */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  label="Currency"
                  margin="normal"
                  defaultValue=""
                >
                  <MenuItem value="INR">INR</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  label="Order Category"
                  margin="normal"
                  defaultValue=""
                >
                  <MenuItem value="Domestic">Domestic</MenuItem>
                  <MenuItem value="Export">Export</MenuItem>
                </TextField>
              </Grid>
            {/* </Grid> */}

            <Box sx={{ mt: 3, marginTop:"0", }}>
              <TextField
              fullWidth
              label="Billing Address"
              margin="normal"
              multiline
              rows={4}
              placeholder="Enter The Billing Address..."
            />
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Date"
              margin="normal"
              defaultValue=""
            />

            <TextField
              fullWidth
              label="Customer"
              margin="normal"
              defaultValue=""
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Ex Rate"
                  margin="normal"
                  defaultValue=""
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="P.O No"
                  margin="normal"
                  defaultValue=""
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label="Shipment Date"
              margin="normal"
              placeholder="mm/dd/yyyy"
            />

            <TextField
              fullWidth
              label="Remark"
              margin="normal"
              multiline
              rows={4}
              placeholder="Enter special handling instructions..."
            />
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              borderColor:"#856512",
              color:"#000000",
              px: 4,
            }}
          >
            CANCEL
          </Button>

          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              px: 4,
              backgroundColor: "#D3AA4C",
              "&:hover": {
                backgroundColor: "#856512",
              },
            }}
          >
            CREATE ORDER
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
