import { create } from 'zustand';

type LocationState = {
	currentLocation: string;
	setLocation: (location: string) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
	currentLocation: 'fa',
	setLocation: (location) => set({ currentLocation: location }),
}));

type UserHandleStore = {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	setIsOpen: (value: boolean) => void;
};

export const useUserHandleStore = create<UserHandleStore>((set) => ({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false }),
	setIsOpen: (value) => set({ isOpen: value }),
}));
