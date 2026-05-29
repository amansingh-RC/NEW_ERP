import React from "react";
import Box from "@mui/material/Box";
import Buttons from "../components/commonComponents/buttons";
import ComboBox from "../components/commonComponents/comboBox";
import BasicSwitches from "../components/commonComponents/basicSwitches";
import BasicTextFields from "../components/commonComponents/textField";
import Avatars from "../components/commonComponents/avatars";
import Badges from "../components/commonComponents/Badges";
import Table from "../components/commonComponents/table";
import Alert from "../components/commonComponents/alert";
import Backdrop from "../components/commonComponents/backdrop";
import Card from "../components/commonComponents/cardWithImage";
import CardWithoutImage from "../components/commonComponents/cardwithoutimage";
import BottomNavigation from "../components/commonComponents/bottomNavigation";
import CollapsedBreadcrumbs from "../components/commonComponents/breadcrumbs";
import Drawer from "../components/commonComponents/drawer";
import AccountMenu from "../components/commonComponents/accountMenu";
import BasicMenubar from "../components/commonComponents/basicMenuBar";
import PaginationControlled from "../components/commonComponents/controlledPagination";
import TablePaginationDemo from "../components/commonComponents/tablePagination";
import SpeedDial from "../components/commonComponents/speedDial";
import Stepper from "../components/commonComponents/stepper";
import Tabs from "../components/commonComponents/tabs";
import ColumnVisibility from "../components/commonComponents/columnVisibility";
import BasicUndoRedo from "../components/commonComponents/undoredoTable";
import ResponsiveDatePickers from "../components/commonComponents/datePicker";
import PortfolioSection from "../components/commonComponents/subcomponents/PortfolioSection";
import NestedModel from "../components/commonComponents/nestedModel";
import DateRangePicker from "../components/commonComponents/dateRange";
import Form from "../components/commonComponents/form";
import BarCharts from "../components/commonComponents/barCharts";
import PieActiveArc from "../components/commonComponents/PieActiveArc";
import Skeleton from "../components/commonComponents/skeleton";
import SnackbarVariants from "../components/commonComponents/snackbar/snackbarVarients";
import SnackbarInvertedColors from "../components/commonComponents/snackbar/snackInverted";
import DialogVerticalScroll from "../components/commonComponents/verticalScrollModel";
import AlertDialog from "../components/commonComponents/alertDialog";
import MobileModel from "../components/commonComponents/mobileModal";
import Accordion from "../components/commonComponents/accordion";
import ArchitecturalLedger from "../components/commonComponents/colorPalette/ArchitecturalLedger";

const gridRow = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  gap: 2,
  my: 2,
};

const Home = () => {
  return (
    <Box sx={{ maxWidth: 1140, mx: "auto", px: { xs: 1.5, md: 2 }, py: 2 }}>
      <PortfolioSection title="Architectural Ledger">
        <ArchitecturalLedger />
      </PortfolioSection>

      <Box sx={gridRow}>
        <PortfolioSection title="Buttons" compact>
          <Buttons />
        </PortfolioSection>
        <PortfolioSection title="Basic Switches" compact>
          <BasicSwitches />
        </PortfolioSection>
      </Box>

      <Box sx={gridRow}>
        <PortfolioSection title="ComboBox" compact>
          <ComboBox />
        </PortfolioSection>
        <PortfolioSection title="Basic Text Fields" compact>
          <BasicTextFields />
        </PortfolioSection>
      </Box>

      <Box sx={gridRow}>
        <PortfolioSection title="Avatars" compact>
          <Avatars />
        </PortfolioSection>
        <PortfolioSection title="Badges" compact>
          <Badges />
        </PortfolioSection>
      </Box>

      <Box sx={gridRow}>
        <PortfolioSection title="Skeleton" compact>
          <Skeleton />
        </PortfolioSection>
        <PortfolioSection title="Alert" compact>
          <Alert />
        </PortfolioSection>
      </Box>

      <Box sx={gridRow}>
        <PortfolioSection title="Backdrop" compact>
          <Backdrop />
        </PortfolioSection>
        <PortfolioSection title="Alert Dialog" compact>
          <AlertDialog />
        </PortfolioSection>
      </Box>

      <Box sx={gridRow}>
        <PortfolioSection title="Snackbar Variants" compact>
          <SnackbarVariants />
        </PortfolioSection>
        <PortfolioSection title="Snackbar Inverted Colors" compact>
          <SnackbarInvertedColors />
        </PortfolioSection>
      </Box>

      <Box sx={gridRow}>
        <PortfolioSection title="Dialog Vertical Scroll" compact>
          <DialogVerticalScroll />
        </PortfolioSection>
        <PortfolioSection title="Mobile Modal" compact>
          <MobileModel />
        </PortfolioSection>
      </Box>

      <PortfolioSection title="Accordion">
        <Accordion />
      </PortfolioSection>

      <PortfolioSection title="Table">
        <Table />
      </PortfolioSection>

      <Box sx={gridRow}>
        <PortfolioSection title="Card" compact>
          <Card />
        </PortfolioSection>
        <PortfolioSection title="Card Without Image" compact>
          <CardWithoutImage />
        </PortfolioSection>
      </Box>

      <Box sx={gridRow}>
        <PortfolioSection title="Bottom Navigation" compact>
          <BottomNavigation />
        </PortfolioSection>
        <PortfolioSection title="Breadcrumbs" compact>
          <CollapsedBreadcrumbs />
        </PortfolioSection>
      </Box>

      <Box sx={gridRow}>
        <PortfolioSection title="Account Menu" compact>
          <AccountMenu />
        </PortfolioSection>
        <PortfolioSection title="Speed Dial" compact>
          <SpeedDial />
        </PortfolioSection>
      </Box>

      <PortfolioSection title="Drawer">
        <Drawer />
      </PortfolioSection>

      <PortfolioSection title="Menu Bar">
        <BasicMenubar />
      </PortfolioSection>

      <Box sx={gridRow}>
        <PortfolioSection title="Pagination Controlled" compact>
          <PaginationControlled />
        </PortfolioSection>
        <PortfolioSection title="Table Pagination" compact>
          <TablePaginationDemo />
        </PortfolioSection>
      </Box>

      <PortfolioSection title="Stepper">
        <Stepper />
      </PortfolioSection>

      <PortfolioSection title="Tabs">
        <Tabs />
      </PortfolioSection>

      <PortfolioSection title="Column Visibility">
        <ColumnVisibility />
      </PortfolioSection>

      <PortfolioSection title="Undo / Redo Table">
        <BasicUndoRedo />
      </PortfolioSection>

      <Box sx={gridRow}>
        <PortfolioSection title="Date Picker" compact>
          <ResponsiveDatePickers />
        </PortfolioSection>
        <PortfolioSection title="Date Range Picker" compact>
          <DateRangePicker />
        </PortfolioSection>
      </Box>

      <PortfolioSection title="Nested Modal">
        <NestedModel />
      </PortfolioSection>

      <PortfolioSection title="Form">
        <Form />
      </PortfolioSection>

      <Box sx={gridRow}>
        <PortfolioSection title="Bar Charts" compact>
          <BarCharts />
        </PortfolioSection>
        <PortfolioSection title="Pie Chart" compact>
          <PieActiveArc />
        </PortfolioSection>
      </Box>
    </Box>
  );
};

export default Home;
