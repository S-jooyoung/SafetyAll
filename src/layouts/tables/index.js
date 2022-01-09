// @mui material components
import { Grid, Icon } from "@mui/material";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Data
import reportsBarChartData from "./data/reportsBarChartData";
import gradientLineChartData from "./data/gradientLineChartData";

function Tables() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <ReportsBarChart
              title="월별 현황"
              description={
                <>
                  (<strong>+23%</strong>) 지난 달
                </>
              }
              chart={chart}
              items={items}
            />
          </Grid>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="일별 현황"
              description={
                <SuiBox display="flex" alignItems="center">
                  <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon className="font-bold">arrow_upward</Icon>
                  </SuiBox>
                  <SuiTypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <SuiTypography variant="button" color="text" fontWeight="regular">
                      in 2022
                    </SuiTypography>
                  </SuiTypography>
                </SuiBox>
              }
              height="20.25rem"
              chart={gradientLineChartData}
            />
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
