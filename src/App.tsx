import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense, useContext, useState } from 'react';
import { AboutAsync } from './pages/aboutPage/About.async';
import { MainAsync } from './pages/mainPage/Main.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';


const App = () => {

	
	const {theme, toggleTheme} = useTheme();
	const bool = true;

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>theme change</button> <br />
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
