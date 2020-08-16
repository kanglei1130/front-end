import { combineReducers } from "redux";
import { ACTION_TYPE } from "./types";
import update from "immutability-helper";

export interface Repo {
  name: string,
  stars: number,
  url: string
};
export interface listState {
  total_count: number,
  length: number,
  repos: Repo[]
};

// name, login name of the owner, amount of stars and a link to the public repository page
const initialState : listState = {
  total_count: 0,
  length: 0,
  repos: [],
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_SUCCEED:
      let repos = action.payload.items;
      let len = repos.length;
      let arr : Repo[] = [];
      for (let i = 0; i < len; ++i) {
        let repo : Repo = {
          name: repos[i].name,
          stars: repos[i].stargazers_count,
          url: repos[i].html_url
        };
        arr.push(repo);
      }
      state = {
        total_count: action.payload.total_count,
        length: len,
        repos: arr
      };
      break;
    case ACTION_TYPE.LOAD_FAILED:
      break;
    default:
      break;
  }
  return state;
};

export default combineReducers({
  loader
});