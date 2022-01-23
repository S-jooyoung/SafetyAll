import { useEffect, useState } from "react";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// @mui material components
import { Grid } from "@mui/material";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Data
import Historydata from "./data/historydata";
import HistTableList from "./components/histtablelist";

function History() {
  const [rows, setRows] = useState([]);

  const historydata = new Historydata();

  // total
  useEffect(() => {
    historydata //
      .warnHistory()
      .then((table) => setRows(table));
  }, [rows]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <HistTableList rows={rows} />
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default History;
