export const API_KEY = "AIzaSyCJnhdjQ4sHOL_TASU6p040glFmU6gQUOs";

export const valueConverter = (value) => {
  if (value === undefined || value === null) return "0";

  const num = Number(value);

  if (isNaN(num)) return "0";

  if (num >= 1000000000) {
    // Billions
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (num >= 1000000) {
    // Millions
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1000) {
    // Thousands
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    // Less than 1000
    return num.toString();
  }
};
