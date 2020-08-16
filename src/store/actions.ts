import LoadService from "../services/load-list-service";
import {ACTION_TYPE} from "./types";

interface TaskManagePayload {
  index: number;
  checked: boolean;
};

export function startTask(payload : TaskManagePayload) {
  return {
    type: ACTION_TYPE.UI_ITEM_SELECTED,
    payload: payload
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
