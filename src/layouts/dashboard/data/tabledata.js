import axios from "axios";

class Tabledata {
  constructor() {
    this.table = axios.create({
      baseURL: process.env.REACT_APP_SAFE_API_KEY,
    });
  }

  async datatable() {
    const response = await this.table.get("Api.php", {
      params: {
        apicall: "selectWorker",
      },
    });
    return response.data.workers.map((worker) => ({
      작업자: worker.workerName,
      그룹: worker.workerGroup,
      연락처: worker.workerPhoneNum,
      행동: worker.status,
    }));
  }

  async warningtable() {
    const response = await this.table.get("Api.php", {
      params: {
        apicall: "selectDReadWarning",
      },
    });
    return response.data.DReadWarning.map((worker) => ({
      번호: worker.idx,
      작업자: worker.workerName,
      그룹: worker.workerGroup,
      연락처: worker.workerPhoneNum,
      행동: worker.reason,
      시간: worker.dateTime,
    }));
  }
}

export default Tabledata;
