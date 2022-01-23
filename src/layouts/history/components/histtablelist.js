import { Card, Table } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import React from "react";

const HistTableList = ({ rows }) => {
  const Hrows = rows;
  const columns = [
    { name: "작업자", align: "center" },
    { name: "그룹", align: "center" },
    { name: "연락처", align: "center" },
    { name: "처리", align: "center" },
    { name: "상태", align: "center" },
    { name: "시간", align: "center" },
  ];
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
