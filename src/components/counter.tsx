import { useState } from 'react';
import './counter.scss';

export const Counter = () => {

	const [count, setCount] = useState(0);

	const inc = () => {
		setCount(count + 1);
	}
	
	const dec = () => {
		setCount(count - 1);
	}

	return (
		<div>
			<h2>{count}</h2>
			<button onClick={inc}>click-inc</button>
			<button onClick={dec}>click-dec</button>
		</div>
	);
};
