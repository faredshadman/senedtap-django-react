import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation";
import categoryReducer from "./category";
export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
