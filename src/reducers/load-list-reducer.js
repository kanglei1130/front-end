import { ACTION_TYPE } from "../actions/action-types";
import update from "immutability-helper";

const kMaxCount = 1000;

// name, login name of the owner, amount of stars and a link to the public repository page
const initialState = {
  total_count: 0,
  length: 0,
  repos: [],
  page: 1,
  ui: {
    selected: [],
    deleted: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_SUCCEED:
      let repos = action.payload.items;
      let len = repos.length;
      let arr = [];
      for (let i = 0; i < len; ++i) {
        let repo = {
          name: repos[i].name,
          owner: repos[i].owner.login,
          stars: repos[i].stargazers_count,
          url: repos[i].html_url
        };
        arr.push(repo);
      }
      state = {
        total_count: Math.min(kMaxCount, action.payload.total_count),
        length: len,
        repos: arr,
        ui: {
          selected: new Array(len).fill(false, 0),
          deleted: new Array(len).fill(false, 0)
        }
      };
      break;
    case ACTION_TYPE.LOAD_FAILED:
      break;
    case ACTION_TYPE.UI_ITEM_SELECTED: {
      let index = action.payload.index;
      let status = action.payload.checked;
      state = update(state, {
        ui: { selected: { [index]: { $set: status } } }
      });
      break;
    }
    case ACTION_TYPE.UI_ITEM_DELETE: {
      let index = action.payload.index;
      let len = state.length - 1;
      state = update(state, {
        length: { $set: len },
        cities: { $splice: [[index, 1]] },
        ui: {
          selected: { $splice: [[index, 1]] },
          deleted: { $splice: [[index, 1]] }
        }
      });
      break;
    }
    default:
      break;
  }
  return state;
};
