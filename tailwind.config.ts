import svelteUx from 'svelte-ux/plugins/tailwind.cjs';

module.exports = {
	content: ['./src/**/*.{html,svelte}', './node_modules/svelte-ux/**/*.{svelte,js}'],

	// See customization docs: https://svelte-ux.techniq.dev/customization

	ux: {
		themes: {
			light: {
				'color-scheme': 'light',
				primary: 'hsl(209.3976 100% 48.8235%)',
				secondary: 'hsl(200 33.3333% 91.1765%)',
				accent: 'hsl(173.5814 100% 42.1569%)',
				neutral: 'hsl(214.2857 19.6262% 20.9804%)',
				'surface-100': 'hsl(0 0% 100%)',
				'surface-200': 'hsl(213.3333 47.3684% 96.2745%)',
				'surface-300': 'hsl(213.3333 47.3684% 96.2745%)'
			},
			dark: {
				'color-scheme': 'dark',
				primary: 'hsl(216.7401 98.2684% 54.7059%)',
				secondary: 'hsl(238.209 33.6683% 60.9804%)',
				accent: 'hsl(173.5814 100% 42.1569%)',
				neutral: 'hsl(213.3333 17.6471% 20%)',
				'surface-100': 'hsl(212.3077 18.3099% 13.9216%)',
				'surface-200': 'hsl(212.7273 18.0328% 11.9608%)',
				'surface-300': 'hsl(213.3333 17.6471% 10%)'
			}
		}
	},

	plugins: [
		svelteUx // Utiliza el espacio de color HSL () de forma predeterminada. Para usar oklch (), use: svelteUx({ colorSpace: 'oklch' }),
	]
};
