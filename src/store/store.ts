import type { User } from '@/interfaces/user';
import { create } from 'zustand';

type LocationState = {
	currentLocation: string;
	setLocation: (location: string) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
	currentLocation: localStorage.getItem('currentLocation') || 'fa',
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

interface UserStore {
	users: User[];
	addUser: (userData: { name: string; status: string }) => void;
}

export const useUserStore = create<UserStore>((set) => ({
	users: [],
	addUser: ({ name, status }) => {
		const generateRandomId = () => Math.floor(Math.random() * 1000).toString();
		const generateInitials = (name: string) => {
			const parts = name.trim().split(' ');
			return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
		};
		const getCurrentDate = () => new Date().toLocaleDateString('pt-BR');
		const getCurrentTime = () => {
			const now = new Date();
			return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}h`;
		};
		const generateRandomAge = () => Math.floor(Math.random() * 60) + 18;

		const newUser: User = {
			id: generateRandomId(),
			initials: generateInitials(name),
			name,
			age: generateRandomAge(),
			gender: 'Não informado',
			date: getCurrentDate(),
			time: getCurrentTime(),
			duration: '00:00:00',
			status,
		};

		const location = localStorage.getItem('currentLocation') || 'fa';

		const storedData = JSON.parse(localStorage.getItem('usersData') || '{}');

		if (!storedData[location]) {
			storedData[location] = {
				users: [],
				cards: [],
			};
		}

		storedData[location].users.push(newUser);

		localStorage.setItem('usersData', JSON.stringify(storedData));

		set((state) => ({
			users: [...state.users, newUser],
		}));
	},
}));
