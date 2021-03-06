module.exports = {
	extends: ['standard', 'prettier'],
	plugins: ['standard', 'react', 'emotion'],
	rules: {
		'emotion/jsx-import': 'error',
		'emotion/no-vanilla': 'error',
		'emotion/import-from-emotion': 'error',
		'emotion/styled-import': 'error',
		'no-var': 'error', // optional, recommended when using es6+
		'no-unused-vars': 1, // recommended
		'arrow-spacing': ['error', { before: true, after: true }], // recommended
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'comma-dangle': [
			'error',
			{
				objects: 'only-multiline',
				arrays: 'only-multiline',
				imports: 'never',
				exports: 'never',
				functions: 'never',
			},
		],

		// options to emulate prettier setup
		semi: ['error', 'never'],
		'template-curly-spacing': ['error', 'never'],
		'arrow-parens': ['error', 'as-needed'],

		// standard.js
		'space-before-function-paren': ['error', 'never'],

		// standard plugin - options
		'standard/object-curly-even-spacing': ['error', 'either'],
		'standard/array-bracket-even-spacing': ['error', 'either'],
		'standard/computed-property-even-spacing': ['error', 'even'],
		'standard/no-callback-literal': ['error', ['cb', 'callback']],

		// react plugin - options
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'one-var': [2, 'consecutive'],
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 8, // optional, recommended 6+
	},
}
