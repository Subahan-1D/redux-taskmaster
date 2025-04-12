import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description: "We Need a remove button in our task card.",
      date: "4-12-2025",
      assignedTo: "Subahan Ali",
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length == 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.task.at(-1);
        state.task.push({ id: lastElement.id + 1, ...payload });
      }
    },
    removeTask: (state, { payload }) => {
      state.task.filter((item) => item.id != payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.task.find((item) => item.id == payload.id);
      target.status = payload.status;
    },
  },
});
export const { addTask, updateStatus } = taskSlice.actions;
export default taskSlice.reducer;
