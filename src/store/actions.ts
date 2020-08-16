import LoadService from "../services/load-list-service";
import {ACTION_TYPE} from "./types";

export function startTask(index : number) {
  return {
    type: ACTION_TYPE.START_TASK,
    payload: index
  };
}

export function endTask(index : number) {
  return {
    type: ACTION_TYPE.END_TASK,
    payload: index
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
