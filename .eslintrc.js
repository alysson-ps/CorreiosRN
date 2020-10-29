module.exports = {
	env: {
		es2021: true
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"react/jsx-filename-extension": [
			"warn",
			{
				extensions: [".jsx", ".tsx"]
			}
		],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: true
			}
		],
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": [
			"error",
			{ variables: false }
		],
		"import/prefer-default-export": "off",
		"react/state-in-constructor": "off",
		"react/static-property-placement": "off",
		"react/jsx-props-no-spreading": "off",
		"react/prop-types": "off",
		"no-param-reassign": "off",
		"no-console": "off"
	}
};
