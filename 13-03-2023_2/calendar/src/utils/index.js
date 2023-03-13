export const getDaysCurrentMonth = () => {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth() + 1;
  let daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();
  return daysInCurrentMonth;
};

export const getMonthLiteral = new Date().toLocaleString("default", {
  month: "long",
});

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
