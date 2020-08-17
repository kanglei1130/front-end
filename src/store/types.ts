/**
 * Redux Actions
 */

export const ACTION_TYPE = {
    LOAD_SUCCEED : "LOAD_SUCCEED",
    LOAD_FAILED : "LOAD_FAILED",
    START_TASK : "START_TASK",
    END_TASK : "END_TASK",
    MANAGE_TASK : "MANAGE_TASK",
    DELETE_TASK : "DELETE_TASK",
    LOAD_TASKS : "LOAD_TASKS",
    LOAD_WORKERS_SUCCEED : "LOAD_WORKERS_SUCCEED",
    LOAD_WORKERS_FAILED : "LOAD_WORKERS_SUCCEED",
    LOAD_LOG_SUCCEED : "LOAD_LOG_SUCCEED",
    LOAD_LOG_FAILED: "LOAD_LOG_FAILED"
}

export interface WorkerLog {
    index: number,
    pid: number,
    start: number,
}
export interface Worker {
    name: string,
    pid: number,
    logLineCount: number,
    logPreview: string[],
    logs: string[],
}

export interface WorkersLogAction {
    type: string,
    payload: {
        index: number,
        pid: number,
        start: number,
        result : {
            logs: string[]
        }
    }
}

export interface WorkersPayloadAction {
    type: string,
    payload: {
        result : {
            workers: Worker[]
        }
    }
}

export interface ListPayloadItem {
    name: string,
    stargazers_count: number,
    html_url: string,
}

export interface ListPayload {
    items: ListPayloadItem[],
}

export interface ListPayloadAction {
    type: string,
    payload: ListPayload,
}

export interface TaskPayloadAction {
    type: string,
    payload: {
        tasks: Task[]
    },
}

export interface TaskManageAction {
    type: string,
    payload: {
        index: number,
        status: TaskStatus
    },
}

export type ActionType = WorkersLogAction | WorkersPayloadAction;

/**
 * Redux States
 */

export enum TaskStatus {
    Idle = "Idle",
    Started = "Running",
    Finished = "Done"
}

export interface Task {
    id: string,
    owner: string,
    timer: number, // in seconds
    status: TaskStatus,
}

export interface TaskListState {
    tasks: Task[],
}

export interface WorkersState {
    workers: Worker[],
}
