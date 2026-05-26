import Switch from "@mui/material/Switch";

const label = { slotProps: { input: { "aria-label": "Switch demo" } } };

export default function BasicSwitches() {
  return (
    <>
      <h2 className="m-5">Basic Switches</h2>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </>
  );
}
