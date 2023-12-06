import { useState } from 'react';
import classes from './counter.module.scss';

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
			<button className={classes.btn} onClick={inc}>click-inc</button>
			<button className={classes.btn} onClick={dec}>click-dec</button>
		</div>
	);
};
