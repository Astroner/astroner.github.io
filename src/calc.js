const wal = [
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1,-1,-1,-1,-1],
	[1, 1,-1,-1, 1, 1,-1,-1],
	[1, 1,-1,-1,-1,-1, 1, 1],
	[1,-1, 1,-1, 1,-1, 1,-1],
	[1,-1, 1,-1,-1, 1,-1, 1],
	[1,-1,-1, 1, 1,-1,-1, 1],
	[1,-1,-1, 1,-1, 1, 1,-1]
]

const part = 1 / 8;

const c = (i, Func1, Func2) => {
	const origin = wal[i];
	return origin.reduce((prev, cur, i) => {
		const floor = part * i;
		const ceil = floor + part;
		const operator = ((i + 1) / 8 <= .5) ? Func1 : Func2;
		return prev + (cur * (operator(ceil) - operator(floor)))		
	}, 0)
}

const arr = new Array(6).fill(0);

export default (F1, F2) => arr.map((_, i) => c(i, F1, F2))