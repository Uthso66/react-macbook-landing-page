import { create } from "zustand";

interface MacbookStore {
  color: string;
  scale: number;
  texture: string;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
  reset: () => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
  color: "#2e2c2e",
  scale: 0.08,
  texture: "/videos/feature-1.mp4", // Changed from empty string
  setColor: (color: string) => set({ color }),
  setScale: (scale: number) => set({ scale }),
  setTexture: (texture: string) => set({ texture }),
  reset: () =>
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMacbookStore;
