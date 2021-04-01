const nf = new Intl.NumberFormat();

export const comma = (num) => {
	return nf.format(num);
};