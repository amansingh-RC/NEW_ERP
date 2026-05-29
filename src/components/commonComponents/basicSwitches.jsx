import Switch from "@mui/material/Switch";

const label = { slotProps: { input: { "aria-label": "Switch demo" } } };

export default function BasicSwitches() {
  return (
    <>
      <Switch {...label} defaultChecked sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#262262",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#262262",
          },
        }}/>
      <Switch {...label} sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#D3AA4C",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#D3AA4C",
          },
        }} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </>
  );
}


