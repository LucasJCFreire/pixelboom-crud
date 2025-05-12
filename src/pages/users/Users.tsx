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
	}>(usersByLocation[currentLocation] || { cards: [], users: [] });

	useEffect(() => {
		setData(usersByLocation[currentLocation] || { cards: [], users: [] });
	}, [currentLocation]);

	return (
		<section className="p-1 sm:p-3 lg:p-10">
			<Title />
			<Cards dataCard={data.cards} />
			<DataTable users={data.users} />
		</section>
	);
}
