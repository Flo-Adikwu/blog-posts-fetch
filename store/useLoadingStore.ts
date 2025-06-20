import { create } from "zustand";

type LoadingStore = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
};

// Zustand store to manage global loading state across the app
export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));
