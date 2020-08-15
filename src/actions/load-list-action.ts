import LoadService from "../services/load-list-service";
import { ACTION_TYPE } from "./action-types";

export function loadList({ page, per_page }) {
  return function(dispatch) {
    return LoadService.loadList({ page, per_page }).then(res => {
      if (res) {
        dispatch({ type: ACTION_TYPE.LOAD_SUCCEED, payload: res });
      } else {
        dispatch({ type: ACTION_TYPE.LOAD_FAILED, payload: null });
      }
    });
  };
}

export function setItemSelected({ index, checked }) {
  let payload = { index, checked };
  return {
    type: ACTION_TYPE.UI_ITEM_SELECTED,
    payload: payload
  };
}

export function deleteItem({ index }) {
  let payload = { index };
  return {
    type: ACTION_TYPE.UI_ITEM_DELETE,
    payload: payload
  };
}
