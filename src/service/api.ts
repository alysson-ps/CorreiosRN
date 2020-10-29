const { rastrearEncomendas } = require("correios-brasil"); //eslint-disable-line

const tracking = async code => { //eslint-disable-line
	const result = await rastrearEncomendas([code]);
	return result;
};

export default tracking;
