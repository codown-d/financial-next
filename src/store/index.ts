import create from "zustand";

const useFilterStore = create((set) => ({
  filter: "",
  setFilter: (filter) => set({ filter }),
}));
