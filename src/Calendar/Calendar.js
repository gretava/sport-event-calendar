import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { useState } from 'react';
import { sportData } from '../sportData';
import styles from './calendar.module.scss';

export default function Calendar() {
  const [eventList, setEventList] = useState(sportData.data);
  const [monthNavigation, setMonthNavigation] = useState(new Date());
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-AT', { month: 'long' });
  const year = currentDate.getFullYear();
  // const date = currentDate.getDate();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const firstDayOfMonth = startOfWeek(startOfMonth(monthNavigation), {
    weekStartsOn: 1,
  });
  const lastDayOfMonth = endOfMonth(monthNavigation);
  console.log(firstDayOfMonth);

  const allDaysInMonth = eachDayOfInterval({
    start: startOfMonth(monthNavigation),
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(startOfMonth(monthNavigation));

  const prevMonth = () => {
    setMonthNavigation(subMonths(monthNavigation, 1));
  };
  const nextMonth = () => {
    setMonthNavigation(addMonths(monthNavigation, 1));
  };

  return (
    <main className={styles.calendarMain}>
      <section className={styles.monthHeader}>
        <button onClick={prevMonth} className={styles.navBtn}>
          Prev
        </button>
        <h2>{format(monthNavigation, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth} className={styles.navBtn}>
          Next
        </button>
      </section>
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map((day) => (
          <div className={styles.dayOfWeek} key={day}>
            {day}
          </div>
        ))}
      </div>
      <section className={styles.gridNumberDays}>
        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {allDaysInMonth.map((day, index) => {
          const formattedDate = format(day, 'yyyy-MM-dd');
          // const eventData = sportData.data.find(
          //   (event) => event.dateVenue === formattedDate,
          const eventsOnDay = eventList.filter(
            (event) => event.dateVenue === formattedDate,
          );
          // console.log('Formatted Date:', formattedDate);
          // console.log(
          //   'All Date Venues:',
          //   sportData.data.map((event) => event.dateVenue),
          // );
          // console.log('Event Data:', eventData);

          return (
            <div className={styles.gridNumberDay} key={index}>
              {format(day, 'd')}
              {eventsOnDay.map((event, eventIndex) => (
                <div key={`event-${eventIndex}`}>
                  <p>
                    Event: {event.homeTeam?.name} vs {event.awayTeam?.name}
                  </p>
                  {/* <p>Time: {event.timeVenueUTC}</p> */}
                </div>
              ))}
            </div>
          );
        })}
      </section>
    </main>
  );
}
