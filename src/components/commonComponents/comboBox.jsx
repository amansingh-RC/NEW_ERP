import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "../componentsData/top100Films";

export default function ComboBox() {
  return (
    <>
      <h2 className="m-5">ComboBox</h2>
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300, height: 50, margin: "20px" }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
}
