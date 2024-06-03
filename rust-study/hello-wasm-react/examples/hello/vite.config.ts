/*
 * @Author: yangyuan
 * @Description: jsx
 * @Date: 2024-06-03 16:47:28
 * @LastEditTime: 2024-06-03 17:33:06
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({jsxImportSource: ''}), wasm()],
})
