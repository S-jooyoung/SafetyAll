import { Card, Table } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import React from "react";

const HistTableList = ({ rows }) => {
  const Hrows = rows;

  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiTypography variant="h6" gutterBottom>
          히스토리
        </SuiTypography>
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
        <Table columns={columns} rows={Hrows} />
      </SuiBox>
    </Card>
  );
};

export default HistTableList;
