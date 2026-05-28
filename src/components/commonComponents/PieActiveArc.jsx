import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "../componentsData/webUsageStats";

export default function PieActiveArc() {
  return (
    <>
      <h2 className="mb-2">Pie Chart</h2>
      <PieChart
        series={[
          {
            data: desktopOS,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter,
          },
        ]}
        height={200}
        width={200}
      />
    </>
  );
}
