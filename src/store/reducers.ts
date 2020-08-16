import { combineReducers } from "redux";
import {ACTION_TYPE, ListPayload, ListPayloadAction} from "./types";
// eslint-disable-next-line
import update from "immutability-helper";

export interface Task {
  name: string,
  stars: number,
  url: string
};
export interface ListState {
  length: number,
  repos: Task[]
};

// name, login name of the owner, amount of stars and a link to the public repository page
const initialState : ListState = {
  length: 0,
  repos: [],
};

const loader = (state = initialState, action : ListPayloadAction) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_SUCCEED:
      let payload : ListPayload = action.payload;
      let repos = payload.items;
      let len = repos.length;
      let arr : Task[] = [];
      for (let i = 0; i < len; ++i) {
        let repo : Task = {
          name: repos[i].name,
          stars: repos[i].stargazers_count,
          url: repos[i].html_url
        };
        arr.push(repo);
      }
      state = {
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
