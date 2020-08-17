import { combineReducers } from "redux";
import {
  ACTION_TYPE,
  ActionType, WorkersLogAction,
  WorkersPayloadAction,
  WorkersState
} from "./types";
import update from "immutability-helper";

const initialState : WorkersState = {
  workers: [],
};

const loader = (state = initialState, action : ActionType) : WorkersState => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_LOG_SUCCEED: {
      let index = 0;
      let act = action as WorkersLogAction;
      state = update(state, {
        workers: {
          [index]:
            {logs :
                {$set: act.payload.result.logs}
            }
        }
      });
      break;
    }
    case ACTION_TYPE.LOAD_WORKERS_SUCCEED: {
      let act = action as WorkersPayloadAction;
      state = {
        workers: act.payload.result.workers,
      };
      break;
    }
    /*
    case ACTION_TYPE.LOAD_TASKS: {
      let act = action as TaskPayloadAction;
      state = {
        tasks: act.payload.tasks,
      };
      break;
    }
    case ACTION_TYPE.LOAD_SUCCEED: {
      let act = action as ListPayloadAction;
      let payload: ListPayload = act.payload;
      let repos = payload.items;
      let arr: Task[] = [];
      for (let i = 0; i < repos.length; ++i) {
        let repo: Task = {
          id: repos[i].name,
          timer: repos[i].stargazers_count,
          owner: repos[i].html_url,
          status: TaskStatus.Idle,
        };
        arr.push(repo);
      }
      state = {
        tasks: arr,
      };
      break;
    }
    case ACTION_TYPE.LOAD_FAILED:
      break;
    case ACTION_TYPE.MANAGE_TASK: {
      let act = action as TaskManageAction;
      let index: number = act.payload.index;
      let status : TaskStatus = act.payload.status;
      state = update(state, {
        workers: {
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
        tasks: { $splice: [[index, 1]] },
      });
      break;
    }
    */
    default:
      break;
  }
  return state;
};

export default combineReducers({
  loader
});
