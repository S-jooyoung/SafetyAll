import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

// Soft UI Dashboard React base styles

// Dashboard layout components
import Projects from "layouts/dashboard/components/Projects";
import Map from "./components/map";

// Data

function Dashboard() {
  const [markerPositions, setMarkerPositions] = useState([]);

  const markerPositions1 = [
    [33.452278, 126.567803],
    [33.452671, 126.574792],
    [33.451744, 126.572441],
  ];
  const markerPositions2 = [
    [37.499590490909185, 127.0263723554437],
    [37.499427948430814, 127.02794423197847],
    [37.498553760499505, 127.02882598822454],
    [37.497625593121384, 127.02935713582038],
    [37.49629291770947, 127.02587362608637],
    [37.49754540521486, 127.02546694890695],
    [37.49646391248451, 127.02675574250912],
  ];
  const markerPositions3 = [
    [37.4995904912409185, 127.0263723554437],
    [37.4994279412430814, 127.02794423197847],
    [37.4985537421499505, 127.02882598822454],
    [37.4976255931541384, 127.02935713582038],
    [37.49629291770947, 127.02587362608637],
    [37.49754540521486, 127.02546694890695],
    [37.49646391248451, 127.02675574250912],
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} xl={4} onClick={() => setMarkerPositions(markerPositions1)}>
              <MiniStatisticsCard
                title={{ text: "현재 작업자" }}
                count="582"
                percentage={{ color: "success", text: "+20%" }}
                icon={{ color: "info", component: "paid" }}
              >
                현재작업자
              </MiniStatisticsCard>
            </Grid>
            <Grid item xs={12} sm={4} xl={4} onClick={() => setMarkerPositions(markerPositions2)}>
              <MiniStatisticsCard
                title={{ text: "부상 의심자" }}
                count="2"
                percentage={{ color: "success", text: "+2%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} xl={4} onClick={() => setMarkerPositions(markerPositions3)}>
              <MiniStatisticsCard
                title={{ text: "안전모 착용 주의자" }}
                count="2"
                percentage={{ color: "success", text: "+2%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Map markerPositions={markerPositions} />
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Projects />
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
