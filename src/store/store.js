import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import courseReducer from "../features/courseSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
