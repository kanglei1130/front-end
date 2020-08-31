/**
 * Redux Actions
 */

export const ACTION_TYPE = {
    LOAD_DATA_SUCCEED : "LOAD_DATA_SUCCEED",
    LOAD_DATA_FAILED : "LOAD_DATA_FAILED",
    LOAD_SUCCEED : "LOAD_SUCCEED",
    LOAD_FAILED : "LOAD_FAILED",
    START_TASK : "START_TASK",
    END_TASK : "END_TASK",
    MANAGE_TASK : "MANAGE_TASK",
    DELETE_TASK : "DELETE_TASK",
    LOAD_TASKS : "LOAD_TASKS",
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

export type ActionType = ListPayloadAction | TaskManageAction | TaskPayloadAction;

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
    data: string
}
