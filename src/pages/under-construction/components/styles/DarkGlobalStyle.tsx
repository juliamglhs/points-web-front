import { createGlobalStyle } from "styled-components";

const DarkGlobalStyle = createGlobalStyle`

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
  --text-default: #FFFFFF;
  --text-inverted: #0B090D;
  --text-muted: #625873;
  --text-bold: #FFFFFF;
  --background-default: #0B090D;
  --background-inverted: #FFFFFF;
  --background-muted: #352E40;
  --background-neutral: #1F1B26;
  --border-default: #312A3C;
  --border-inverted: #EFEFFF;
  --border-input: #3B3347;
  --border-alpha: rgba(239, 239, 255, 0.2);
  --opacity-neutral-transparent: rgba(71, 64, 83, 0);
  --opacity-neutral-100: rgba(71, 64, 83, 0.1);
  --opacity-neutral-200: rgba(71, 64, 83, 0.2);
  --opacity-neutral-300: rgba(71, 64, 83, 0.3);
  --opacity-neutral-400: rgba(71, 64, 83, 0.4);
  --secundary-500: rgba(71, 64, 83, 0.5);
  --primary-50: #16040E;
  --primary-100: #2B081D;
  --primary-200: #570F3A;
  --primary-300: #821756;
  --primary-400: #AD1F73;
  --primary-500-Default: #D92690;
  --primary-600: #E052A6;
  --primary-700: #E87DBC;
  --primary-800: #F0A8D3;
  --primary-900: #F7D4E9;
  --primary-950: #FBE9F4;
  --secundary-50: #041016;
  --secundary-100: #08212B;
  --secundary-200: #176382;
  --secundary-300: #176382;
  --secundary-400: #1F84AD;
  --secundary-500-Default: #26A5D9;
  --secundary-600: #52B7E0;
  --secundary-700: #7DC9E8;
  --secundary-800: #A8DBF0;
  --secundary-900: #D4EDF7;
  --secundary-950: #E9F6FB;
  --green: #4BCE97;
  --red: #EF4870;
  --yellow: #F5CD47;
  --orange: #F59E47;
  --blue: #579DFF;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}
body {
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

export default DarkGlobalStyle;