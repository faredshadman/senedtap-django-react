import { createSlice } from "@reduxjs/toolkit";
export type IActiveTab = "Ana səhifə" | "Bütün sənədlər" | "FAQ";

export interface NavigationState {
  isOpen: boolean;
  activeTab: IActiveTab;
}
const initialState: NavigationState = {
  isOpen: false,
  activeTab: "Ana səhifə",
};
export const navigationSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});
export const { toggleMenu, closeMenu, setActiveTab } = navigationSlice.actions;
export default navigationSlice.reducer;
