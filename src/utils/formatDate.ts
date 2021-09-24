export const formatDate = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000);
  return date.toDateString();
};
