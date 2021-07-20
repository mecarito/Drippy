import { configureStore } from "@reduxjs/toolkit";
import opentaskdialog from "../shared/reducers/taskdialog-reducer";
import createtastreducer from "../shared/reducers/createTask-reducer";

export default configureStore({
  reducer: {
    openAddTaskDialog: opentaskdialog,
    createtask: createtastreducer,
  },
});
