

export const ACTION_TYPE = {
    LOAD_SUCCEED: "LOAD_SUCCEED",
    LOAD_FAILED: "LOAD_FAILED",
    START_TASK: "START_TASK",
    END_TASK: "END_TASK",
    UI_ITEM_SELECTED: "UI_ITEM_SELECTED",
    UI_ITEM_DELETE: "UI_ITEM_DELETE"
};

export interface ListPayloadItem {
    name: string,
    stargazers_count: number,
    html_url: string,
};

export interface ListPayload {
    items: ListPayloadItem[],
};

export interface ListPayloadAction {
    type: string,
    payload: ListPayload,
};
