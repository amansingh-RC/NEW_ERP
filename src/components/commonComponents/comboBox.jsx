import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "../componentsData/top100Films";

export default function ComboBox() {
  return (
    <>
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300, height: 50, margin: "20px" }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
}
