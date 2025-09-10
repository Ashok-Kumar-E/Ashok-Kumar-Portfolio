import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	base: '/Ashok-Kumar-Portfolio/',
	plugins: [react()],
	server: {
		host: true,
		open: true,
	},
});