import type { CardItem, User } from '@/interfaces/user';
import { usersByLocation } from '@/mocks/users';
import { useLocationStore } from '@/store/store';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { Cards } from './Cards';
import { Title } from './Title';
import { DataTable } from './datatable/DataTable';

export function Users(): ReactElement {
	const { currentLocation } = useLocationStore();
	const [data, setData] = useState<{
		cards: CardItem[];
		users: User[];
	}>({ cards: [], users: [] });

	useEffect(() => {
		const storedData = localStorage.getItem('usersData');
		if (!storedData) {
			localStorage.setItem('usersData', JSON.stringify(usersByLocation));
			setData(usersByLocation[currentLocation] || { cards: [], users: [] });
		} else {
			const parsedData = JSON.parse(storedData);
			setData(parsedData[currentLocation] || { cards: [], users: [] });
		}
	}, [currentLocation]);

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
		const totalUsers = data.users.length;
		const activeUsers = data.users.filter(
			(user) => user.status === 'Ativo',
		).length;
		const inactiveUsers = totalUsers - activeUsers;

		const totalSessionTimeInSeconds = data.users
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
			<DataTable users={data.users} />
		</section>
	);
}
