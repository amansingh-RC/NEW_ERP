import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ResponsiveDatePickers() {
  return (
    <>
      <h2 className="m-5">Date Picker</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem>
            <DatePicker defaultValue={dayjs("2026-05-26")} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
