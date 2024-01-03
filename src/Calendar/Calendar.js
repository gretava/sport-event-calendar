import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import styles from './calendar.module.scss';

export default function Calendar() {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-AT', { month: 'long' });
  const year = currentDate.getFullYear();
  // const date = currentDate.getDate();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const firstDayOfMonth = startOfWeek(startOfMonth(currentDate), {
    weekStartsOn: 1,
  });
  const lastDayOfMonth = endOfMonth(currentDate);
  console.log(firstDayOfMonth);

  const allDaysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);
  // console.log(result);

  return (
    <main className={styles.calendarMain}>
      <h2>
        {month} {year}
      </h2>
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map((day) => (
          <div className={styles.dayOfWeek} key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.gridNumberDays}>
        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {allDaysInMonth.map((day, index) => {
          return (
            <div className={styles.gridNumberDay} key={index}>
              {format(day, 'd')}
            </div>
          );
        })}
      </div>
    </main>
  );
}
