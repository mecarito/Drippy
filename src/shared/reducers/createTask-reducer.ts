import { createSlice } from "@reduxjs/toolkit";

const tasks: any[] = [];

const createTaskSlice = createSlice({
  name: "createTask",
  initialState: {
    tasks: tasks,
  },
  reducers: {
    createTask: (state, action: { payload: any }) => {
      state.tasks.push(action.payload);
    },
  },
});

export default createTaskSlice.reducer;
export const { createTask } = createTaskSlice.actions;
