import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function ColumnSelectorGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 10,
  });

  return (
    <>
      <h2 className="m-5">Column Visibility</h2>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} showToolbar />
    </div>
    </>
  );
}
