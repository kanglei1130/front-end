import LoadService from "../services/load-list-service";
import {ACTION_TYPE} from "./types";
import {generateTask} from "../helpers/data-generator";

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

export function loadTasks(num : number) {
  let tasks = generateTask(num);
  return {
    type: ACTION_TYPE.LOAD_TASKS,
    payload: {
      tasks : tasks
    }
  };
}

export function loadData() {
  return function(dispatch) {
    return LoadService.loadData().then(res => {
      if (res) {
        dispatch({ type: ACTION_TYPE.LOAD_DATA_SUCCEED, payload: res });
      } else {
        dispatch({ type: ACTION_TYPE.LOAD_DATA_FAILED, payload: null });
      }
    });
  };
}

export function loadDataUpdate() {
  return function(dispatch) {
    return LoadService.loadDataUpdate().then(res => {
      if (res) {
        dispatch({ type: ACTION_TYPE.LOAD_DATA_SUCCEED, payload: res });
      } else {
        dispatch({ type: ACTION_TYPE.LOAD_DATA_FAILED, payload: null });
      }
    });
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
