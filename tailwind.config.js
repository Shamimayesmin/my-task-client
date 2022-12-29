/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#4a7887",

					secondary: "#FEF9f6",

					accent: "#1FB2A6",

					neutral: "#000000",

					"base-100": "#ffffff",
          
				},
			},
      
      {
        dark: {
          secondary : "#1F2937",
          "base-100":"#1F2937",
          neutral: "#ffffff",
          "base-200": "#1F2937",
          accent : "#1F2937"
        }
      }
		],
	},
	plugins: [require("daisyui")],
};
