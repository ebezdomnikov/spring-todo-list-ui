import {STATE_NAME} from "../reducers";
import * as Enum from "../constants/enum";
import get from "lodash/get";

export const getRoot = (state: any): any => state[STATE_NAME];
export const getList = (state: any): any => get(getRoot(state), Enum.STATE_ITEMS, []);
export const getEditId = (state: any): string => get(getRoot(state), Enum.STATE_EDIT, null);
export const getSelectedId = (state: any): string => get(getRoot(state), Enum.STATE_SELECTED, null);

export default {
    getRoot,
    getList,
    getEditId,
    getSelectedId,
}