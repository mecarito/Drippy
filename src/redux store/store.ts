import { configureStore } from "@reduxjs/toolkit";
import addtaskreducer from "../shared/reducers/taskdialog-reducer";

export default configureStore({
  reducer: {
    openAddTaskDialog: addtaskreducer,
  },
});
