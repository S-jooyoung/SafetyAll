import { useEffect, useState } from "react";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// @mui material components
import { Grid } from "@mui/material";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Data
import Historydata from "./data/historydata";

function History() {
  const [hrows, setHrows] = useState([]);

  const columns = [
    { name: "작업자", align: "center" },
    { name: "그룹", align: "center" },
    { name: "연락처", align: "center" },
    { name: "처리", align: "center" },
    { name: "상태", align: "center" },
    { name: "시간", align: "center" },
  ];

  const historydata = new Historydata();

  useEffect(() => {
    const timer = setTimeout(() => {
      historydata //
        .warnHistory()
        .then((history) => setHrows(history));
    }, 2000);
    return () => clearTimeout(timer);
  }, [hrows]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Table columns={columns} rows={hrows} />
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default History;
