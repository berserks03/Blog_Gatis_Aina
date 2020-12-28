const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getRandomDate = (): string => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
    
  const randomDate = new Date(start.getTime() + Math.random() *
      (end.getTime() - start.getTime()));
    
  const year = randomDate.getUTCFullYear();
  const date = randomDate.getDate();
  const month = months[randomDate.getMonth()];
  const dayName = weekDays[randomDate.getDay()];

  const formattedDate: string = `${dayName}, ${date} ${month} ${year}`;

  return formattedDate;
};
