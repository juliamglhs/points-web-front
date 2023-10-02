import { createGlobalStyle } from "styled-components";

const DesignSystem = createGlobalStyle`

:root {
  --0: 0px;
  --025: 2px;
  --050: 4px;
  --075: 6px;
  --100: 8px;
  --150: 12px;
  --200: 16px;
  --250: 20px;
  --300: 24px;
  --400: 32px;
  --500: 40px;
  --600: 48px;
  --800: 64px;
  --1000: 80px;
  --text-default: #0B090D;
  --text-inverted: #FFFFFF;
  --text-muted: #827799;
  --text-bold: #EFEFFF;
  --background-default: #FFFFFF;
  --background-inverted: #0B090D;
  --background-muted: #D7D7E5;
  --background-neutral: #EFEFFF;
  --border-default: #EFEFFF;
  --border-inverted: #1F1B26;
  --border-input: #D7D7E5;
  --border-alpha: rgba(31, 27, 38, 0.2);
  --opacity-neutral-transparent: rgba(239, 239, 255, 0);
  --opacity-neutral-100: rgba(239, 239, 255, 0.1);
  --opacity-neutral-200: rgba(239, 239, 255, 0.2);
  --opacity-neutral-300: rgba(239, 239, 255, 0.3);
  --opacity-neutral-400: rgba(239, 239, 255, 0.4);
  --secundary-500: rgba(239, 239, 255, 0.5);
  --primary-50: #FBE9F4;
  --primary-100: #FFCCEA;
  --primary-200: #FF99D5;
  --primary-300: #FF66C1;
  --primary-400: #FF33AC;
  --primary-500-Default: #FF0097;
  --primary-600: #CC0079;
  --primary-700: #99005B;
  --primary-800: #66003C;
  --primary-900: #33001E;
  --primary-950: #1A000F;
  --secundary-50: #E5F8FF;
  --secundary-100: #CCF0FF;
  --secundary-200: #66D3FF;
  --secundary-300: #66D3FF;
  --secundary-400: #33C4FF;
  --secundary-500-Default: #00B5FF;
  --secundary-600: #0091CC;
  --secundary-700: #006D99;
  --secundary-800: #004866;
  --secundary-900: #002433;
  --secundary-950: #00121A;
  --green: #2ABB7F;
  --red: #E3355E;
  --yellow: #E2B203;
  --orange: #E27303;
  --blue: #1D7AFC;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}
html, body {
  height: 100%;
  width: 100%;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100vw;
}
input, button, textarea, select {
  background-color: var(--background-default);
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
body {
  font-family: 'Inter', 'Lexend', 'Red Hat Display', sans-serif;
  background-color: var(--background-default);
}
`;

export default DesignSystem;
