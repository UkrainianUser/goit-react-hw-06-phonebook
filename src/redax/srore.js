import { configureStore } from "@reduxjs/toolkit";

const appStore = {
	contacts: [],
  filter: ""
}

export const store = configureStore({
  reducer: '',
});