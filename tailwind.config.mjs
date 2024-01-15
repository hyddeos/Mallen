/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
				  100: 'var(--color-primary-100)',
				  200: 'var(--color-primary-200)',
				},
				accent: {
				  100: 'var(--color-accent-100)',
				  200: 'var(--color-accent-200)',
				},
				text: {
				  100: 'var(--color-text-100)',
				  200: 'var(--color-text-200)',
				},
				bg: {
				  100: 'var(--color-bg-100)',
				  200: 'var(--color-bg-200)',
				},
			},
		},
	},
	plugins: [],
}
