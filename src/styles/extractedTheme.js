/**
 * VERSE Official Design System & Architecture Tokens
 * Source: D:\VERSE\Verse web\Mark down y lineamientos base.docx
 *
 * 1. Brand Foundations & Narrative:
 *    - Mission: Capturar y narrar historias que inspiran conexión e introspección humana.
 *    - Archetype: Sabio, introspectivo y místico.
 *    - Voice: Filosófico, enigmático, sereno y reflexivo.
 *
 * 2. Design Tokens:
 *    - Headings & Accents: TAN Headline / Cinzel Decorative / Playfair Display
 *    - Body & Paragraphs: Poppins
 *    - Background: #021E73 (Noche profunda)
 *    - Structure Blue: #003FF6
 *    - Bioluminescent Cyan: #1ECFF8
 *    - Mystic Purple: #8723A1
 *    - Energetic Orange: #ed622e
 *    - Stellar Yellow: #ffd213
 */

export const VerseTheme = {
  colors: {
    // Official Palette Hex Codes
    background: '#021E73',       // Fondo principal (Noche profunda)
    structureBlue: '#003FF6',    // Azul base / Estructura
    bioluminescentCyan: '#1ECFF8', // Cyan bioluminiscente (Destellos y acentos interactivos)
    mysticPurple: '#8723A1',     // Morado místico (Atmósferas y transiciones)
    energeticOrange: '#ed622e',  // Naranja energéticos (Llamados a la acción y puntos focales)
    stellarYellow: '#ffd213',    // Amarillo estelar (Detalles sutiles)
    darkBlue: '#011245',         // Azul ultra profundo
    navy: '#041656',             // Azul noche intermedio para glass panels

    // Glassmorphism tokens
    glass: {
      bg: 'rgba(4, 22, 86, 0.65)',
      heavyBg: 'rgba(2, 22, 80, 0.88)',
      border: 'rgba(30, 207, 248, 0.15)',
      activeBorder: 'rgba(30, 207, 248, 0.45)',
    }
  },

  typography: {
    headings: ['"TAN Headline"', '"Cinzel Decorative"', 'Playfair Display', 'serif'],
    body: ['Poppins', 'sans-serif'],
  },

  narrative: {
    claim: 'Narrando historias, conectando universos.',
    timeQuestion: '“Si pudieras escribir un mensaje en el tiempo, ¿qué dirías?”',
    ctaPrompt: 'Comencemos a dar forma a tu historia',
  },

  shadows: {
    cyanGlow: '0 0 35px rgba(30, 207, 248, 0.4)',
    orangeGlow: '0 0 35px rgba(237, 98, 46, 0.5)',
    purpleGlow: '0 0 35px rgba(135, 35, 161, 0.4)',
  }
};

export default VerseTheme;
