import axios from "axios";

class Tabledata {
  constructor() {
    this.table = axios.create({
      baseURL: "http://a271-175-120-29-131.ngrok.io/Api/v1/Api.php",
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
      연락처: worker.workerPhoneNum,
      행동: worker.status,
    }));
  }
}

export default Tabledata;
