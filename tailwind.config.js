module.exports = {
	content: ["./src/**/*.{html,js}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#0FCFEC",
					secondary: "#19D3AE",
					accent: "#3A4256",
					neutral: "#3d4451",
					"base-100": "#ffffff",
					bgGradient: "bg-gradient-to-r from-primary to-secondary",
				},
			},
			"dark",
			"cupcake",
		],
	},

	plugins: [require("daisyui")],
}
