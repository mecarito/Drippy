import { createSlice } from "@reduxjs/toolkit";

const opendialogSlice = createSlice({
  name: "addtaskdialog",
  initialState: {
    value: false,
  },
  reducers: {
    openAddTaskDialog: (state) => {
      state.value = true;
    },
    closeAddTaskDialog: (state) => {
      state.value = false;
    },
  },
});

export default opendialogSlice.reducer;
export const { openAddTaskDialog, closeAddTaskDialog } =
  opendialogSlice.actions;
