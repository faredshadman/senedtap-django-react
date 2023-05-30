import { createSlice } from "@reduxjs/toolkit";
export type IActiveTab = "Ana səhifə" | "Bütün sənədlər" | "FAQ";

export interface CategoryState {
  selected: number | string | null;
}
const initialState: CategoryState = {
  selected: null,
};
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});
export const { changeSelected } = categorySlice.actions;
export default categorySlice.reducer;
