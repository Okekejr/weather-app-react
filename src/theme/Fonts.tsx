import { Global } from "@emotion/react";

export const fonts = {
  heading:
    "'Visby CF Bold', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  body: "'Visby CF Medium', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
};

export const FontFaces = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Visby CF Medium';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url(/assets/fonts/Visby CF Medium.woff) format('woff');
             url(/assets/fonts/Visby CF Medium.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Visby CF Bold';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url(/assets/fonts/Visby CF Bold.woff) format('woff');
             url(/assets/fonts/Visby CF Bold.woff2) format('woff2');
    }
    `}
  />
);
