import type { ReactElement } from 'react';
import { Cards } from './Cards';
import { Title } from './Title';

export function Users(): ReactElement {
	const data = [
		{
			title: 'Usuários',
			value: 294,
		},
		{
			title: 'Tempo de sessão',
			value: '31m 20s',
		},
		{
			title: 'Ativos',
			value: 203,
		},
		{
			title: 'Inativos',
			value: 91,
		},
	];
	return (
		<section className="p-10">
			<Title />
			<Cards data={data} />
		</section>
	);
}
