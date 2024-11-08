import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			// Allow JSX in .js files as well
			jsxRuntime: 'automatic', // Enables React JSX runtime (optional)
			jsxImportSource: 'react', // Optional: specifies where JSX runtime comes from
		}),
	],
});
