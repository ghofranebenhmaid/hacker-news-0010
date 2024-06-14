/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";
export default {
  content: {
    files: ["./src/**/*.{js,jsx,ts,tsx}"],
    extract,
  },
  theme: {
    extend: {
      fontSize: {
        "--fs-sm": "clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)",
        "fs-base": "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
        "fs-md": " clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
        "fs-lg": "clamp(1.29rem, calc(1.08vi + 1.03vw), 1.73rem)",
        "fs-post": "min(25vw, 402px)",
      },
    },
  },
  plugins: [fluid],
};
