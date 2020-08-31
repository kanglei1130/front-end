import { combineReducers } from "redux";
import {
  ACTION_TYPE,
  ActionType,
  ListPayload, ListPayloadAction,
  Task, TaskListState, TaskManageAction, TaskPayloadAction,
  TaskStatus
} from "./types";
import update from "immutability-helper";

const initialState : TaskListState = {
  tasks: [],
  data: "",
};

const loader = (state = initialState, action : ActionType) : TaskListState => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_TASKS: {
      let act = action as TaskPayloadAction;
      state = {
        tasks: act.payload.tasks,
        data: "",
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
      state = update(state, {
        tasks: {$set: arr}
      });
      break;
    }
    case ACTION_TYPE.LOAD_FAILED:
      break;
    case ACTION_TYPE.MANAGE_TASK: {
      let act = action as TaskManageAction;
      let index: number = act.payload.index;
      let status : TaskStatus = act.payload.status;
      state = update(state, {
        tasks: {
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
    default:
      break;
  }
  return state;
};

export default combineReducers({
  loader
});
