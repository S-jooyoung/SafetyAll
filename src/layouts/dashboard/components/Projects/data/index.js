// Soft UI Dashboard React components
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";
// Images

import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  return {
    columns: [
      { name: "작업자", align: "center" },
      { name: "소속", align: "c" },
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
        소속: [logoAtlassian, "현대건설"],
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
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
        소속: [logoAtlassian, "현대건설"],
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
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
        소속: [logoSlack, "동아건설"],
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
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
        소속: [logoSpotify, "한화건설"],
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
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
        소속: [logoJira, "롯데건설"],
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
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
        소속: [logoInvesion, "삼성건설"],
        행동: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            정상
          </SuiTypography>
        ),
        상태: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
      },
    ],
  };
}
