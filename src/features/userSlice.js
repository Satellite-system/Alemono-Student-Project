import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   id: 101,
//   name: "Alice Johnson",
//   email: "alice@example.com",
//   course: [
//     {
//       id: "k32e7QGfhoDxiMMTYCe6", //id
//       name: "Introduction to React Native", //name
//       thumbnail:
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //thumbnail
//       instructor: "John Doe", //instructor
//       due_date: "10 March 2024", //due_date:
//       progress_bar: 10, //progress_bar
//       completed: false,
//     },
//   ],
// };

const initialState = {
  data: "",
  course: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDetails: (state, action) => {
      // console.log("Inside SLice >> ", action.payload);
      state.data = "";
      state.course = [];
      state.data = action.payload.data;

      action.payload.course.forEach((res) => {
        state.course.push({...res.data(), _id: res.id});
      });
    },
    toggleCourseCompletion: (state, action) => {
      // console.log("Inside SLice ", action.payload);
      // console.log("Before >>> ", state.course[0]);
      state.course.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, completed: !item.completed };
        }
        // console.log("::::: ", item);
        // return item;
      });

      // console.log("After >>> ", state.course[0]);
    },
  },
});

export const { getUserDetails, toggleCourseCompletion } = userSlice.actions;

export default userSlice.reducer;
