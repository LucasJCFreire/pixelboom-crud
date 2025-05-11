import { Layout } from '@/components/layout';
import { Dashboard, Documents, NotFound, Settings, Users } from '@/pages';
import type { ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppSidebar } from './components/layout/sidebar/AppSidebar';
import { SidebarProvider } from './components/ui/sidebar';

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<SidebarProvider
				style={{ '--sidebar-width': '240px' } as React.CSSProperties}
			>
				<AppSidebar />
				<Routes>
					<Route path="/" element={<Navigate to="/fa/usuarios" replace />} />
					<Route path="/:filial" element={<Layout />}>
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="usuarios" element={<Users />} />
						<Route path="documentos" element={<Documents />} />
					</Route>

					<Route path="/" element={<Layout />}>
						<Route path="configuracoes" element={<Settings />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</SidebarProvider>
		</BrowserRouter>
	);
}
