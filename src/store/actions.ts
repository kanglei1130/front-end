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

export function loadWorkers() {
  return function(dispatch) {
    return LoadService.loadWorkers().then(res => {
      if (res) {
        dispatch({ type: ACTION_TYPE.LOAD_WORKERS_SUCCEED, payload: res });
      } else {
        dispatch({ type: ACTION_TYPE.LOAD_WORKERS_FAILED, payload: null });
      }
    });
  };
}

export function loadWorkerLog({index, pid, start}) {
  return function(dispatch) {
    return LoadService.loadWorkerLog({pid, start}).then(res => {
      if (res) {
        let payload = {
          index: index,
          pid: pid,
          start:start,
          result: res.result
        };
        dispatch({ type: ACTION_TYPE.LOAD_LOG_SUCCEED, payload: payload });
      } else {
        dispatch({ type: ACTION_TYPE.LOAD_LOG_FAILED, payload: null });
      }
    });
  };
}
