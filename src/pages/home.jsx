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
import Card from "../components/commonComponents/cardWithComponents";
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
import ImageList from "../components/commonComponents/imageList";
// import NestedModal from "../components/commonComponents/nestedModal";
import ColumnVisibility from "../components/commonComponents/columnVisibility";
import BasicUndoRedo from "../components/commonComponents/undoredoTable";
import ServerSideLazyLoadingViewport from "../components/commonComponents/lazyLoadingTable";
import ResponsiveDatePickers from "../components/commonComponents/datePicker";
// import ResponsiveDateRangePickers from "../components/commonComponents/dateRange";


const Home = () => {
  return (
    <>
      <Buttons />
      <ComboBox />
      <BasicSwitches />
      <BasicTextFields />
      <Avatars />
      <Badges />
      <Table />
      <Alert />
      <Backdrop />
      <Card />
      <CardWithoutImage />
      <BottomNavigation />
      <CollapsedBreadcrumbs />
      <Drawer />
      <AccountMenu />
      <BasicMenubar />
      <PaginationControlled />
      <TablePaginationDemo />
      <SpeedDial />
      <Stepper />
      <Tabs />
      <ImageList />
      {/* <NestedModal /> */}
        <ColumnVisibility />
        <BasicUndoRedo />
        <ServerSideLazyLoadingViewport />
        <ResponsiveDatePickers />
        {/* <ResponsiveDateRangePickers /> */}
    </>
  );
};

export default Home;
