const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDayOfTheWeek = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDay();
  const dayOfTheWeek = daysOfTheWeek[day]
  return dayOfTheWeek
};

export default getDayOfTheWeek