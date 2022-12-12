const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};
