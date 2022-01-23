import axios from "axios";

class Count {
  constructor() {
    this.count = axios.create({
      baseURL: process.env.REACT_APP_SAFE_API_KEY,
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
        apicall: "selectDReadWarning",
      },
    });
    return response.data.DReadWarning.length;
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
