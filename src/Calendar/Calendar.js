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
import Modal from 'react-modal';
import AddEvent from '../AddEvent/AddEvent';
import EventModal from '../DetailPage/EventModal';
import { sportData } from '../sportData';
import styles from './calendar.module.scss';

export default function Calendar() {
  const [eventList, setEventList] = useState(sportData.data);
  const [monthNavigation, setMonthNavigation] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState(null);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-AT', { month: 'long' });
  const year = currentDate.getFullYear();

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

  const handleDateClickAndShowEvents = (day) => {
    const formattedDate = format(day, 'yyyy-MM-dd');
    const eventsOnDay = eventList.filter(
      (event) => event.dateVenue === formattedDate,
    );
    if (eventsOnDay.length > 0) {
      setModalIsOpen(true);
      setSelectedEventData(eventsOnDay[0]);
    }
  };

  const handleAddEvent = (newEvent) => {
    setEventList((prevEventList) => [...prevEventList, newEvent]);
  };

  const handleOpenAddEvent = () => {
    setAddEventOpen(true);
  };

  return (
    <main className={styles.calendarMain}>
      <section className={styles.monthMainHeader}>
        <button
          onClick={() => handleOpenAddEvent()}
          className={styles.addEventBtn}
        >
          Add Event
        </button>
        <h2 className={styles.calendarH2}>
          {format(monthNavigation, 'MMMM yyyy')}
        </h2>
        <div className={styles.monthNavBtn}>
          <button onClick={prevMonth} className={styles.navBtns}>
            Prev
          </button>
          <button onClick={nextMonth} className={styles.navBtns}>
            Next
          </button>
        </div>
      </section>
      <section className={styles.weekAdnDays}>
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
          {allDaysInMonth.map((day, index) => (
            <div
              key={index}
              onClick={() => handleDateClickAndShowEvents(day)}
              className={styles.gridNumberDay}
            >
              {format(day, 'd')}
              <div className={styles.gridNumberDayIndicator}>
                {eventList.map((event, eventIndex) => {
                  const formattedDate = format(day, 'yyyy-MM-dd');
                  if (event.dateVenue === formattedDate) {
                    return (
                      <div key={`event-${eventIndex}`}>
                        <div className={styles.eventIndicatorsContainer}>
                          <div className={styles.eventIndicator}>•</div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <EventModal
        isOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        eventData={selectedEventData}
      />
      {addEventOpen && (
        <AddEvent
          onAddEvent={handleAddEvent}
          setAddEventOpen={setAddEventOpen}
          eventList={eventList}
          setEventList={setEventList}
        />
      )}
    </main>
  );
}
