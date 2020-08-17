import axios from "axios";

const kListURL =
  "https://api.github.com/search/repositories?q=anyscale";

const kRoot = "http://54.244.57.138:8000";
const kGetWorkers = kRoot + "/api/worker-summary";

const kGetWorkerLog = kRoot + "/api/worker-logs?";

const HTTP_STATUS = {
  OK: 200
};

const axiosConfig = {
  timeout: 10000
};

export default class LoadService {
  static loadWorkerLog({pid, start}) {
    let url = kGetWorkerLog + "pid=" + pid.toString() + "&" + "start=" + start.toString();
    return axios
      .get(url, axiosConfig)
      .then(res => {
        if (res.status === HTTP_STATUS.OK) {
          return res.data;
        } else {
          console.error(res);
          return null;
        }
      })
      .catch(err => {
        console.error(err);
        return err;
      });
  }

  static loadWorkers() {
    return axios
      .get(kGetWorkers, axiosConfig)
      .then(res => {
        if (res.status === HTTP_STATUS.OK) {
          return res.data;
        } else {
          console.error(res);
          return null;
        }
      })
      .catch(err => {
        console.error(err);
        return err;
      });
  }

  static loadList() {
    return axios
      .get(kListURL, axiosConfig)
      .then(res => {
        if (res.status === HTTP_STATUS.OK) {
          return res.data;
        } else {
          console.error(res);
          return null;
        }
      })
      .catch(err => {
        console.error(err);
        return err;
      });
  }
}
