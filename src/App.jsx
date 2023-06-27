import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Dashboard, tasksLoader } from './pages/Dashboard.jsx';
import { Profile } from './pages/Profile.jsx';
import { Create, createAction } from './pages/Create.jsx';
import { RootLayout } from './layouts/RootLayout.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={ '/' } element={ <RootLayout /> }>
			<Route index element={ <Dashboard /> } loader={ tasksLoader } />
			<Route path={ '/create' } element={ <Create /> } action={ createAction } />
			<Route path={ '/profile' } element={ <Profile /> } />
		</Route>,
	),
);

const App = () => {
	
	return (
		<RouterProvider router={ router } />
	);
};

export default App;
