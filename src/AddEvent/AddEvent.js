import { useState } from 'react';

export default function AddEvent({ onAddEvent, setAddEventOpen }) {
  const [newEvent, setNewEvent] = useState({
    homeTeamName: '',
    awayTeamName: '',
    season: '',
    status: '',
    dateVenue: '',
  });
  // const [homeTeamName, setHomeTeamName] = useState('');
  // const [awayTeamName, setAwayTeamName] = useState('');
  // const [season, setSeason] = useState('');
  // const [status, setStatus] = useState('');
  // const [dateVenue, setDateVenue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('event', newEvent);

    onAddEvent(newEvent);
    setNewEvent({
      homeTeamName: '',
      awayTeamName: '',
      season: '',
      status: '',
      dateVenue: '',
    });
    console.log('You clicked submit.');
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
    <form onSubmit={handleSubmit}>
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
        placeholder="Enter date"
        name="dateVenue"
        value={newEvent.dateVenue}
        onChange={handleChange}
        required
      />

      <button type="submit">Add</button>
      <button type="button" onClick={() => setAddEventOpen(false)}>
        Cancel
      </button>
    </form>
  );
}
