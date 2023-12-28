import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import styles from './calendar.module.scss';

export default function Calendar() {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();
  // const date = currentDate.getDate();

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  console.log(firstDayOfMonth);

  const allDaysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

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
