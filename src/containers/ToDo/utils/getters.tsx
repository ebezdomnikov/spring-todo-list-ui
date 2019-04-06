import { STATE_NAME } from "../reducers";
import * as Enum from "../constants/enum";
import get from "lodash/get";
import { TaskType } from "../types";

export const getRoot = (state: any): any => state[STATE_NAME];
export const getList = (state: any): Array<TaskType> =>
    Object.values(get(getRoot(state), Enum.STATE_ITEMS, {}));
export const getDoneList = (state: any): Array<TaskType> =>
    getList(state).filter((t: TaskType) => t.done === true);
export const getUnDoneList = (state: any): Array<TaskType> =>
    getList(state).filter((t: TaskType) => t.done === false);
export const hasDoneItems = (state: any): boolean =>
    getDoneList(state).length > 0;
export const hasUnDoneItems = (state: any): boolean =>
    getUnDoneList(state).length > 0;
export const getEditId = (state: any): string =>
    get(getRoot(state), Enum.STATE_EDIT, null);
export const getSelectedId = (state: any): string =>
    get(getRoot(state), Enum.STATE_SELECTED, null);

export default {
    getRoot,
    getList,
    getEditId,
    getSelectedId,
    hasDoneItems,
    hasUnDoneItems,
};
