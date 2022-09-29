// method that helps to truncate the text for the overview
export const truncateString = (str = "", num) => {
  if (str?.length <= num) return str;

  return str.slice(0, num) + "...";
};
