import LoadService from "../services/load-list-service";
import {ACTION_TYPE} from "./types";

export function manageTask({index : number, status: TaskStatus}) {
  return {
    type: ACTION_TYPE.MANAGE_TASK,
    payload: {
      index : number,
      status : TaskStatus
    }
  };
}

export function deleteTask({index : number, status: TaskStatus}) {
  return {
    type: ACTION_TYPE.DELETE_TASK,
    payload: {
      index : number,
      status : TaskStatus
    }
  };
}

export function loadList() {
  return function(dispatch) {
    return LoadService.loadList().then(res => {
      if (res) {
        dispatch({ type: ACTION_TYPE.LOAD_SUCCEED, payload: res });
      } else {
        dispatch({ type: ACTION_TYPE.LOAD_FAILED, payload: null });
      }
    });
  };
}
