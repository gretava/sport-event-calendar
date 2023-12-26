export default function Calendar() {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();
  // const date = currentDate.getDate();

  // const daysOfWeek = [
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday',
  //   'Sunday',
  // ];

  return (
    <h2>
      {month} {year}
    </h2>
  );
}
