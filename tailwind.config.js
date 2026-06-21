module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette centralized for the landing. Use utility classes like
        // `bg-brand-600` or `text-brand-700` in components.
        brand: {
          50: '#f0f9ff',
          100: '#e6f6ff',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
    },
  },
  plugins: [],
}
