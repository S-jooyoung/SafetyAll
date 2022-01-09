/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

export default {
  chart: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: {
      label: "Sales",
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500, 300, 120, 140],
    },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "작업자",
      progress: { content: "31K", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "부상의심",
      progress: { content: "2M", percentage: 90 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "착용주의",
      progress: { content: "43", percentage: 50 },
    },
  ],
};
