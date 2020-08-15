import axios from "axios";

const kListURL =
  "https://api.github.com/search/repositories?q=anyscale";

const HTTP_STATUS = {
  OK: 200
};

const axiosConfig = {
  crossDomain: true
};

export default class LoadService {
  static loadList({ page, per_page }) {
    let url = kListURL + "&page=" + page + "&per_page=" + per_page;
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
}
