
module.exports = {
	presets: [
		['@babel/preset-env', {useBuiltIns: 'entry'}]
	],
	plugins: [
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-optional-chaining',
		['@babel/plugin-transform-runtime', {
			regenerator: true
		}]
	]
};
