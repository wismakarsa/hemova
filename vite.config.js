import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	esbuild: {
		supported: {
		  'top-level-await': true //browsers can handle top-level-await features
		},
	},
	plugins: [
		sveltekit(),
	]
});
