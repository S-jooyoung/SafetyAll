import axios from "axios";

class Position {
  constructor() {
    this.position = axios.create({
      baseURL: "http://a271-175-120-29-131.ngrok.io/Api/v1/Api.php",
    });
  }

  async totalPosition() {
    const response = await this.position.get("Api.php", {
      params: {
        apicall: "selectWorker",
      },
    });

    return response.data.workers.map((worker) => [worker.latitude, worker.longitude]);
  }

  async warningPosition() {
    try {
      const response = await this.position.get("Api.php", {
        params: {
          apicall: "selectWorkerWarning",
        },
      });

      return response.data.workers.map((worker) => [worker.latitude, worker.longitude]);
    } catch (e) {
      return [];
    }
  }

  async cautionPosition() {
    try {
      const response = await this.position.get("Api.php", {
        params: {
          apicall: "selectWorkerCaution",
        },
      });
      return response.data.workers.map((worker) => [worker.latitude, worker.longitude]);
    } catch (e) {
      return [];
    }
  }
}

export default Position;
