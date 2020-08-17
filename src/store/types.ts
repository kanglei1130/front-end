/**
 * Redux Actions
 */

export const ACTION_TYPE = {
    LOAD_SUCCEED: "LOAD_SUCCEED",
    LOAD_FAILED: "LOAD_FAILED",
    START_TASK: "START_TASK",
    END_TASK: "END_TASK",
    MANAGE_TASK: "MANAGE_TASK",
    DELETE_TASK: "DELETE_TASK",
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

export interface TaskManageAction {
    type: string,
    payload: {
        index: number,
        status: TaskStatus
    },
}

export type ActionType = ListPayloadAction | TaskManageAction;

/**
 * Redux States
 */

export enum TaskStatus {
    Idle = "Idle",
    Started = "Running",
    Finished = "Done"
}

export interface Task {
    name: string,
    stars: number,
    url: string,
    status: TaskStatus,
}

export interface ListState {
    length: number,
    repos: Task[],
}

/**
 * Example of NestedObject
 */
export interface NestedObject {
    auth: {
        login: string;
    }
}

// eslint-disable-next-line
let endpoints: NestedObject = {
    auth: {
        login: "http://localhost:3000/auth/login"
    }
};
