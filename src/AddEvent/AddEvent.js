import { useState } from 'react';
import Modal from 'react-modal';
import styles from './addEvent.module.scss';

export default function AddEvent({ onAddEvent, setAddEventOpen }) {
  const [newEvent, setNewEvent] = useState({
    homeTeamName: '',
    awayTeamName: '',
    season: '',
    status: '',
    result: '',
    timeVenueUTC: '',
    dateVenue: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newEventObject = {
      homeTeam: {
        name: newEvent.homeTeamName,
        officialName: newEvent.homeTeamName,
      },
      awayTeam: {
        name: newEvent.awayTeamName,
        officialName: newEvent.awayTeamName,
      },
      season: newEvent.season,
      status: newEvent.status,
      timeVenueUTC: newEvent.timeVenueUTC,
      dateVenue: newEvent.dateVenue,
      result: {
        homeGoals: 0,
        awayGoals: 0,
        winner: null,
      },
    };

    onAddEvent(newEventObject);

    setNewEvent({
      homeTeamName: '',
      awayTeamName: '',
      season: '',
      status: '',
      timeVenueUTC: '',
      dateVenue: '',
    });

    setAddEventOpen(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
    console.log('name', name);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => setAddEventOpen(false)}
      contentLabel="Add Event Modal"
      className={styles.modal}
    >
      <form onSubmit={handleSubmit} className={styles.modalContent}>
        <div className={styles.inputDiv}>
          <h2 className={styles.modalH2}>Enter event details</h2>
          <input
            placeholder="Enter home team name"
            name="homeTeamName"
            value={newEvent.homeTeamName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Enter away team name"
            name="awayTeamName"
            value={newEvent.awayTeamName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Enter season"
            name="season"
            value={newEvent.season}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Enter event status"
            name="status"
            value={newEvent.status}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Enter event time"
            name="timeVenueUTC"
            value={newEvent.timeVenueUTC}
            onChange={handleChange}
            required
          />
          <input
            placeholder="YYYY-MM-DD"
            name="dateVenue"
            value={newEvent.dateVenue}
            onChange={handleChange}
            required
          />
          <div className={styles.modalBtns}>
            <button type="submit" className={styles.addCloseBtn}>
              Add
            </button>
            <button
              type="button"
              onClick={() => setAddEventOpen(false)}
              className={styles.addCloseBtn}
            >
              Back to Calendar
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
