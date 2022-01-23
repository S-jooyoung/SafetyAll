import React from "react";

// Soft UI Dashboard React components

import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";
import { Card, Icon } from "@mui/material";
import SuiBox from "components/SuiBox";

const Tablelist = (props) => {
  const { columns, rows } = props;

  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiBox>
          <SuiTypography variant="h6" gutterBottom>
            작업자 테이블
          </SuiTypography>
          <SuiBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong> 실시간..</strong>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <SuiBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </SuiBox>
    </Card>
  );
};

export default Tablelist;
