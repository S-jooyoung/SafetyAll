import axios from "axios";

class Historydata {
  constructor() {
    this.table = axios.create({
      baseURL: process.env.REACT_APP_SAFE_API_KEY,
    });
  }

  async warnHistory() {
    const response = await this.table.get("Api.php", {
      params: {
        apicall: "selectWorkerWarning",
      },
    });
    return response.data.workersWarning.map((worker) => ({
      작업자: worker.workerName,
      그룹: worker.workerGroup,
      연락처: worker.workerPhoneNum,
      처리: worker.status,
      상태: worker.reason,
      보고: worker.result,
      시간: worker.dateTime,
    }));
  }
}

export default Historydata;
