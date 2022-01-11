// Soft UI Dashboard React components
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";

export default function Tabledata() {
  return {
    columns: [
      { name: "작업자", align: "center" },
      { name: "소속", align: "center" },
      { name: "연락처", align: "center" },
      { name: "행동", align: "center" },
      { name: "상태", align: "center" },
    ],

    rows: [
      {
        작업자: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            신주영
          </SuiTypography>
        ),
        소속: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            현대건설
          </SuiTypography>
        ),
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            주의
          </SuiTypography>
        ),
        연락처: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            01023397372
          </SuiTypography>
        ),
        상태: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
      },
      {
        작업자: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            배지왕
          </SuiTypography>
        ),
        소속: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            동아건설
          </SuiTypography>
        ),
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
          </SuiTypography>
        ),
        연락처: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            01023397372
          </SuiTypography>
        ),
        상태: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
      },
      {
        작업자: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            서영준
          </SuiTypography>
        ),
        소속: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            동아건설
          </SuiTypography>
        ),
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            주의
          </SuiTypography>
        ),
        연락처: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            01023397372
          </SuiTypography>
        ),
        상태: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
      },
      {
        작업자: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            백동채
          </SuiTypography>
        ),
        소속: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            한화건설
          </SuiTypography>
        ),
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
          </SuiTypography>
        ),
        연락처: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            01023397372
          </SuiTypography>
        ),
        상태: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
      },
      {
        작업자: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            김인표
          </SuiTypography>
        ),
        소속: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            롯데건설
          </SuiTypography>
        ),
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
          </SuiTypography>
        ),
        연락처: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            01023397372
          </SuiTypography>
        ),
        상태: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
      },
      {
        작업자: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            견종빈
          </SuiTypography>
        ),
        소속: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            삼성건설
          </SuiTypography>
        ),
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
          </SuiTypography>
        ),
        연락처: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            01023397372
          </SuiTypography>
        ),
        상태: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
      },
    ],
  };
}
