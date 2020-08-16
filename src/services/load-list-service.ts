import axios from "axios";

const kListURL =
  "https://api.github.com/search/repositories?q=anyscale";

const HTTP_STATUS = {
  OK: 200
};

const axiosConfig = {
  timeout: 10000
};

export default class LoadService {
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
