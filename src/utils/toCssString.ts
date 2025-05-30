export const toCssString = (style?: React.CSSProperties): string => {
  if (!style) return '';
  return Object.entries(style)
    .map(([key, value]) => {
      const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${kebab}:${value}`;
    })
    .join(';');
};
