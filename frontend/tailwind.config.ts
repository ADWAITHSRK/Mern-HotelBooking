import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  theme: {
    extend: {
      colors: {
        customBlue: colors.blue[700],  // Corrected syntax (removed space after colon)
        // Add more custom colors like this:
        // customRed: colors.red[600],
      },
    },
  },
  plugins: [],
};

export default config;