import katex from 'katex';

export const renderLatex = (text) => {
  if (!text) return '';
  try {
    return katex.renderToString(text, { throwOnError: false, output: 'html' });
  } catch {
    return text;
  }
};
