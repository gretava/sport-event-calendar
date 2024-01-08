import Modal from 'react-modal';

const EventModal = ({ isOpen, closeModal, eventData }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal">
      <div>
        <h2>Event details</h2>
        {eventData && (
          <div>
            <p>Home team name: {eventData.homeTeam?.name}</p>
            <p>Away team name: {eventData.awayTeam?.name}</p>
            {/*season: '', status: ' */}
            {/* <p>Match date: {eventData.dateVenue}</p>
            <p>Season: {eventData.season}</p> */}
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default EventModal;
