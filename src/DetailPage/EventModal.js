import Modal from 'react-modal';

const EventModal = ({ isOpen, closeModal, eventData }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal">
      <div>
        <h2>Event details</h2>
        {eventData && (
          <div>
            <p>Home team name: {eventData.homeTeam?.officialName}</p>
            <p>Away team name: {eventData.awayTeam?.officialName}</p>
            <p>Match date: {eventData.dateVenue}</p>
            <p>Season: {eventData.season}</p>
            <p>Winner: {eventData.result.winner}</p>
            <p>
              Result
              <div>Home goals: {eventData.result.homeGoals}</div>
              <div>Away goals: {eventData.result.awayGoals}</div>
            </p>
            <p>Status: {eventData.status}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default EventModal;
