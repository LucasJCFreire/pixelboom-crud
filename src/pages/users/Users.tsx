import type { CardItem } from '@/interfaces/user';
import { usersByLocation } from '@/mocks/users';
import { useLocationStore, useUserStore } from '@/store/store';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { Cards } from './Cards';
import { Title } from './Title';
import { DataTable } from './datatable/DataTable';

export function Users(): ReactElement {
	const { currentLocation } = useLocationStore();
	const users = useUserStore((state) => state.users);
	const set = useUserStore.setState;

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('usersData') || '{}');

		if (!storedData[currentLocation]) {
			const initialMockData = usersByLocation[currentLocation] || { users: [] };

			storedData[currentLocation] = initialMockData;
			localStorage.setItem('usersData', JSON.stringify(storedData));
			set({ users: initialMockData.users });
		} else {
			set({ users: storedData[currentLocation].users || [] });
		}
	}, [currentLocation, set]);

	const formatSessionTime = (totalSeconds: number): string => {
		const hours = Math.floor(totalSeconds / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;

		const parts = [];
		if (hours > 0) parts.push(`${hours}h`);
		if (minutes > 0 || hours > 0) parts.push(`${minutes}m`);
		parts.push(`${seconds}s`);

		return parts.join(' ');
	};

	const calculateCardData = (): CardItem[] => {
		const totalUsers = users.length;
		const activeUsers = users.filter((user) => user.status === 'Ativo').length;
		const inactiveUsers = totalUsers - activeUsers;

		const totalSessionTimeInSeconds = users
			.filter((user) => user.status === 'Ativo')
			.reduce((total, user) => {
				const [hours, minutes, seconds] = user.duration
					.split(':')
					.map((time) => Number.parseInt(time, 10));
				return (
					total + (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0)
				);
			}, 0);

		const formattedSessionTime = formatSessionTime(totalSessionTimeInSeconds);

		return [
			{ title: 'Total de Usuários', value: totalUsers },
			{ title: 'Tempo de Sessão', value: formattedSessionTime },
			{ title: 'Usuários Ativos', value: activeUsers },
			{ title: 'Usuários Inativos', value: inactiveUsers },
		];
	};

	return (
		<section className="p-1 sm:p-3 lg:p-10">
			<Title />
			<Cards dataCard={calculateCardData()} />
			<DataTable users={users} />
		</section>
	);
}
