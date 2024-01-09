import { useState } from 'react';

export default function AddEvent({ onAddEvent, setAddEventOpen }) {
  const [newEvent, setNewEvent] = useState({
    homeTeamName: '',
    awayTeamName: '',
    season: '',
    status: '',
    result: '',
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
      // season: parseInt(newEvent.season, 10),
      season: newEvent.season,
      status: newEvent.status,
      // timeVenueUTC: '',
      dateVenue: newEvent.dateVenue,
      // stadium: null,
      result: {
        homeGoals: 0,
        awayGoals: 0,
        winner: null,
      },
    };

    // Pass the newEventObject to the onAddEvent function
    onAddEvent(newEventObject);

    setNewEvent({
      homeTeamName: '',
      awayTeamName: '',
      season: '',
      status: '',
      dateVenue: '',
    });

    // Close the AddEvent form
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
