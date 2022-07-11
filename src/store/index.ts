import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import links, {
  fetchLinks,
  getAllLinks,
  getLinksStatus,
  getLinksError,
  getTotalClicks,
  getVisitorCount,
  getLinksCount,
  createLink,
  updateLink,
  deleteLink,
} from "./features/links/linksSlice";

const reducer = combineReducers({ links });
const store = configureStore({ reducer });

// export type { EmployeeState }

export {
  fetchLinks,
  getAllLinks,
  getLinksStatus,
  getLinksError,
  getTotalClicks,
  getVisitorCount,
  getLinksCount,
  createLink,
  updateLink,
  deleteLink,
};

export default store;
