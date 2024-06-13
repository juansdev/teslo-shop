import {create} from "zustand";

interface IUIState {
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUIStore = create<IUIState>((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({isSideMenuOpen: true}),
  closeSideMenu: () => set({isSideMenuOpen: false}),
}));