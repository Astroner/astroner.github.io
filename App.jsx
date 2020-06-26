import React from 'react';

import './App.css';

import calc from './calc'

const Data = [
	{
		label: "S9(t)",
		value: [
			t => -1 * Math.pow(t, 2) + t,
			t => -1 * Math.pow(t, 2) + 2 * t
		]
	},
	{
		label: "S3(t)",
		value: [
			t => 4 * Math.pow(t, 3) / 3,
			t => 4 * Math.pow(t - 1, 3) / 3
		]
	},
	{
		label: "S2(t)",
		value: [
			t => Math.pow(t, 2),
			t => Math.pow(t, 2) - t
		]
	},
	{
		label: "S7(t)",
		value: [
			t => (-16 * Math.pow(t - .25, 3) / 3) + t,
			t => (-16 * Math.pow(t - .75, 3) / 3) + t
		]
	}
]

export default props => {
	return (
		<div className = {"root"}>
			<header>Мат. Метода</header>
			<div className = {"container"}>
				{Data.map((item) => (
					<div key = {item.label} className = {"item"}>
						<h2>{item.label}</h2>
						{calc(item.value[0], item.value[0]).map((num, i) => (
							<div key = {i}>
								c{i} = {num < 0.000001 ? 0 : num.toFixed(3)}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}