import { render } from 'react-dom';
import { Counter } from './components/counter';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
