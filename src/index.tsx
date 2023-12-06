import { render } from 'react-dom';
import { Counter } from './components/counter';

render(
	<>
		<h1>hello from react</h1>
		<Counter />
	</>,
	document.getElementById('root')
);
