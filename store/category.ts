import { create } from 'zustand';

interface ICategoryState {
	activeId: number;
	setActiveId: (category: number) => void;
}

export const useCategoryStore = create<ICategoryState>((set) => ({
	activeId: 0,
	setActiveId: (activeId) => set({ activeId }),
}));
