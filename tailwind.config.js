/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verse: {
          bg: '#021E73',        // Fondo principal (Noche profunda)
          blue: '#003FF6',      // Azul base / Estructura
          cyan: '#1ECFF8',      // Cyan bioluminiscente (Destellos y acentos interactivos)
          purple: '#8723A1',    // Morado místico (Atmósferas y transiciones)
          orange: '#ed622e',    // Naranja energéticos (Llamados a la acción y puntos focales)
          yellow: '#ffd213',    // Amarillo estelar (Detalles sutiles)
          darkBlue: '#011245',  // Azul ultra profundo
          navy: '#041656',      // Azul noche intermedio para glass panels
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        headline: ['Poppins', 'sans-serif'],
        decorative: ['"TAN Headline"', '"Cinzel Decorative"', 'serif'],
      },
      animation: {
        blob: "blob 12s infinite",
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.15)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
