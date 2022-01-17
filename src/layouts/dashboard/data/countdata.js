import axios from "axios";

class Count {
  constructor() {
    this.count = axios.create({
      baseURL: "http://a271-175-120-29-131.ngrok.io/Api/v1/Api.php",
    });
  }

  async totalCountData() {
    const response = await this.count.get("Api.php", {
      params: {
        apicall: "selectWorker",
      },
    });
    return response.data.workers.length;
  }

  async warningCountData() {
    const response = await this.count.get("Api.php", {
      params: {
        apicall: "selectWorkerWarning",
      },
    });
    return response.data.workersWarning.length;
  }

  async cautionCountData() {
    const response = await this.count.get("Api.php", {
      params: {
        apicall: "selectWorkerCaution",
      },
    });
    return response.data.workersCaution.length;
  }
}

export default Count;
