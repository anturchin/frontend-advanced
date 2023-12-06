import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutAsync } from './pages/aboutPage/About.async';
import { MainAsync } from './pages/mainPage/Main.async';
import './index.scss';

const App = () => {
	return (
		<div className='app'>
			<Link to={'/'}>home</Link>
			<Link to={'/about'}>about</Link>
			<Suspense fallback={<div>loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutAsync />} />
					<Route path={'/'} element={<MainAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
