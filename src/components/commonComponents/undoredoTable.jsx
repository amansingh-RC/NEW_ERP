import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Stack, Typography, Tooltip } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

const rowsData = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  desk: `D-${3000 + i}`,
  commodity: ["Gold", "Silver", "Diamond", "Platinum"][
    Math.floor(Math.random() * 4)
  ],

  trader: ["Aman", "Rahul", "Karan", "Priya"][Math.floor(Math.random() * 4)],

  quantity: Math.floor(Math.random() * 100000),

  price: Math.floor(Math.random() * 100000),
}));

const columns = [
  {
    field: "desk",
    headerName: "Desk",
    width: 130,
    editable: true,
  },

  {
    field: "commodity",
    headerName: "Commodity",
    width: 180,
    editable: true,
  },

  {
    field: "trader",
    headerName: "Trader",
    width: 180,
    editable: true,
  },

  {
    field: "quantity",
    headerName: "Quantity",
    width: 180,
    editable: true,
    type: "number",
  },

  {
    field: "price",
    headerName: "Price",
    width: 180,
    editable: true,
    type: "number",
  },
];

export default function AdvancedTable() {
  const [rows, setRows] = React.useState(rowsData);
  const [history, setHistory] = React.useState([rowsData]);
  const [historyIndex, setHistoryIndex] = React.useState(0);
  const processRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) =>
      row.id === newRow.id ? newRow : row,
    );
    setRows(updatedRows);
    const updatedHistory = history.slice(0, historyIndex + 1);
    updatedHistory.push(updatedRows);
    setHistory(updatedHistory);
    setHistoryIndex(updatedHistory.length - 1);
    return newRow;
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prev = historyIndex - 1;

      setRows(history[prev]);

      setHistoryIndex(prev);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const next = historyIndex + 1;
      setRows(history[next]);
      setHistoryIndex(next);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="p" mb={2}>
        Undo/Redo Table
      </Typography>

      <Stack direction="row" spacing={1} mb={2}>
        <Tooltip title="Undo">
          <IconButton onClick={handleUndo}>
            <UndoIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Redo">
          <IconButton onClick={handleRedo}>
            <RedoIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      <Box
        sx={{
          height: 700,
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          processRowUpdate={processRowUpdate}
          disableRowSelectionOnClick
          pageSizeOptions={[10, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
          showToolbar
          slots={{
            toolbar: GridToolbar,
          }}  
          sx={{
            borderRadius: 2,

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f5f5",
              fontSize: 16,
              fontWeight: 700,
            },

            "& .MuiDataGrid-row": {
              minHeight: "60px !important",
            },
          }}
        />
      </Box>
    </Box>
  );
}
