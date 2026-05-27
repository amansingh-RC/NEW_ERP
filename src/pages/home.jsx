import React from "react";
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
// import ImageList from "../components/commonComponents/imageList";
import ColumnVisibility from "../components/commonComponents/columnVisibility";
import BasicUndoRedo from "../components/commonComponents/undoredoTable";
import ServerSideLazyLoadingViewport from "../components/commonComponents/lazyLoadingTable";
import ResponsiveDatePickers from "../components/commonComponents/datePicker";
import PortfolioSection from "../components/commonComponents/subcomponents/PortfolioSection";
import NestedModel from "../components/commonComponents/nestedModel";
import DateRangePicker from "../components/commonComponents/dateRange";
import Form from "../components/commonComponents/form";
import BarCharts from "../components/commonComponents/barCharts";
import PieActiveArc from "../components/commonComponents/PieActiveArc";

const Home = () => {
  return (
    <>
      <PortfolioSection title="Buttons">
        <Buttons />
      </PortfolioSection>

      <PortfolioSection title="ComboBox">
        <ComboBox />
      </PortfolioSection>

      <PortfolioSection title="Basic Switches">
        <BasicSwitches />
      </PortfolioSection>

      <PortfolioSection title="Basic Text Fields">
        <BasicTextFields />
      </PortfolioSection>

      <PortfolioSection title="Avatars">
        <Avatars />
      </PortfolioSection>

      <PortfolioSection title="Badges">
        <Badges />
      </PortfolioSection>

      <PortfolioSection title="Table">
        <Table />
      </PortfolioSection>

      <PortfolioSection title="Alert">
        <Alert />
      </PortfolioSection>

      <PortfolioSection title="Backdrop">
        <Backdrop />
      </PortfolioSection>

      <PortfolioSection title="Card">
        <Card />
      </PortfolioSection>

      <PortfolioSection title="Card Without Image">
        <CardWithoutImage />
      </PortfolioSection>

      <PortfolioSection title="Bottom Navigation">
        <BottomNavigation />
      </PortfolioSection>

      <PortfolioSection title="Breadcrumbs">
        <CollapsedBreadcrumbs />
      </PortfolioSection>

      <PortfolioSection title="Drawer">
        <Drawer />
      </PortfolioSection>

      <PortfolioSection title="Account Menu">
        <AccountMenu />
      </PortfolioSection>

      <PortfolioSection title="Menu Bar">
        <BasicMenubar />
      </PortfolioSection>

      <PortfolioSection title="Pagination Controlled">
        <PaginationControlled />
      </PortfolioSection>

      <PortfolioSection title="Table Pagination">
        <TablePaginationDemo />
      </PortfolioSection>

      <PortfolioSection title="Speed Dial">
        <SpeedDial />
      </PortfolioSection>

      <PortfolioSection title="Stepper">
        <Stepper />
      </PortfolioSection>

      <PortfolioSection title="Tabs">
        <Tabs />
      </PortfolioSection>

      {/* <PortfolioSection title="Image List">
        <ImageList />
      </PortfolioSection> */}

      <PortfolioSection title="Column Visibility">
        <ColumnVisibility />
      </PortfolioSection>

      <PortfolioSection title="Undo/Redo Table">
        <BasicUndoRedo />
      </PortfolioSection>

      <PortfolioSection title="Lazy Loading Table">
        <ServerSideLazyLoadingViewport />
      </PortfolioSection>

      <PortfolioSection title="Date Picker">
        <ResponsiveDatePickers />
      </PortfolioSection>

      <PortfolioSection title="Nested Model">
        <NestedModel />
      </PortfolioSection>

      <PortfolioSection title="Date Range Picker">
        <DateRangePicker />
      </PortfolioSection>

      <PortfolioSection title="Form">
        <Form />
      </PortfolioSection>

      <PortfolioSection title="Bar Charts">
        <BarCharts />
      </PortfolioSection>

      <PortfolioSection title="Pie Chart">
        <PieActiveArc />
      </PortfolioSection>
    </>
  );
};

export default Home;

