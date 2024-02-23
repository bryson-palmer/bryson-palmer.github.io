import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),
    VitePWA({
      manifest: {
        name: 'bryson-palmer.github.io',
        short_name: 'bryson palmer',
        description: 'Bryson Palmer: frontend developer portfolio',
        start_url: './',
        display: 'standalone',
        lang: 'en',
        scope: './',
        background_color: '#18191a',
        theme_color: '#18191a',
        icons:[
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/apple-touch-icon.png",
            type: "image/png"
          },
          {
            src: "/favicon-16x16.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/favicon-32x32.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
      },
      registerType: 'autoUpdate'
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  }
})
