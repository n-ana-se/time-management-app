import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import postcss from './postcss.config.cjs';

const config: UserConfig = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['svelte-hero-icon']
	},
	css: {
		postcss
	}
};

export default config;
