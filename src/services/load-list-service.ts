import axios from "axios";
import {loadDataUpdate} from "../store/actions";

const kListURL =
  "https://api.github.com/search/repositories?q=bazel";
const kDataURL = "http://127.0.0.1:5000/";

const HTTP_STATUS = {
  OK: 200
};

const axiosConfig = {
  timeout: 10000
};

export default class LoadService {
  static loadDataUpdate() {
    let url = kDataURL + "data-update";
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

  static loadData() {
    let url = kDataURL + "data";
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
