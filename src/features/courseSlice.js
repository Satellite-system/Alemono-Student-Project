import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
//   data: [
//     // {
//     //   id: 1, // Unique identifier for the course
//     //   name: "Introduction to React Native",
//     //   instructor: "John Doe", // Name of the course instructor
//     //   description:
//     //     "Learn the basics of React Native development and build your first mobile app.",
//     //   enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
//     //   thumbnail:
//     //     "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //Link to the course thumbnail
//     //   duration: "8 weeks", // Duration of the course
//     //   schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
//     //   location: "Online",
//     //   prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
//     //   syllabus: [
//     //     {
//     //       week: 1,
//     //       topic: "Introduction to React Native",
//     //       content:
//     //         "Overview of React Native, setting up your development environment.",
//     //     },
//     //     {
//     //       week: 2,
//     //       topic: "Building Your First App",
//     //       content:
//     //         "Creating a simple mobile app using React Native components.",
//     //     },
//     //     // Additional weeks and topics...
//     //   ],
//     //   students: [
//     //     {
//     //       id: 101,
//     //       name: "Alice Johnson",
//     //       email: "alice@example.com",
//     //     },
//     //     {
//     //       id: 102,
//     //       name: "Bob Smith",
//     //       email: "bob@example.com",
//     //     },
//     //     // Additional enrolled students...
//     //   ],
//     // },
//   ],
// };

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCoursesDetails: (state, action) => {
      //   console.log(">>> DATA FOUnd >> ", action.payload);
      if (state.length === 0) {
        action.payload.forEach((doc) => {
          state.push(doc.data());
        });
      }
    },
    // setCourseLikes: state =>{
    //     state.name = null;
    //     state.email = null;
    //     state.photo = null;
    // },
  },
});

export const { setCoursesDetails } = courseSlice.actions;

export default courseSlice.reducer;
