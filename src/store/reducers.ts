import { combineReducers } from "redux";
import {
  ACTION_TYPE,
  ActionType,
  ListPayload, ListPayloadAction,
  ListState,
  Task, TaskManageAction,
  TaskStatus
} from "./types";
// eslint-disable-next-line
import update from "immutability-helper";

// name, login name of the owner, amount of stars and a link to the public repository page
const initialState : ListState = {
  length: 0,
  repos: [],
};

const loader = (state = initialState, action : ActionType) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_SUCCEED:
      let act = action as ListPayloadAction;
      let payload : ListPayload = act.payload;
      let repos = payload.items;
      let len = repos.length;
      let arr : Task[] = [];
      for (let i = 0; i < len; ++i) {
        let repo : Task = {
          name: repos[i].name,
          stars: repos[i].stargazers_count,
          url: repos[i].html_url,
          status: TaskStatus.Idle,
        };
        arr.push(repo);
      }
      state = {
        length: len,
        repos: arr,
      };
      break;
    case ACTION_TYPE.LOAD_FAILED:
      break;
    case ACTION_TYPE.MANAGE_TASK: {
      let act = action as TaskManageAction;
      let index: number = act.payload.index;
      let status : TaskStatus = act.payload.status;
      state = update(state, {
        repos: {
          [index]:
            {status :
                {$set: status}
            }
        }
      });
      break;
    }
    case ACTION_TYPE.DELETE_TASK : {
      let act = action as TaskManageAction;
      let index: number = act.payload.index;
      state = update(state, {
        repos: { $splice: [[index, 1]] },
      });
      break;
    }
    default:
      break;
  }
  return state;
};

export default combineReducers({
  loader
});
