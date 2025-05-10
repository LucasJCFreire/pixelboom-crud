import { Layout } from '@/layout/';
import { Home, NotFound } from '@/pages';
import type { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
