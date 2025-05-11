import { create } from 'zustand';

type LocationState = {
	currentLocation: string;
	setLocation: (location: string) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
	currentLocation: 'fa',
	setLocation: (location) => set({ currentLocation: location }),
}));
