import { AdminLayout } from '@/components/layout/AdminLayout';
import { Dashboard, Documents, NotFound, Settings, Users } from '@/pages';
import type { ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/fa/usuarios" replace />} />
				<Route path="/:filial" element={<AdminLayout />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="usuarios" element={<Users />} />
					<Route path="documentos" element={<Documents />} />
				</Route>

				<Route path="/" element={<AdminLayout />}>
					<Route path="configuracoes" element={<Settings />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
