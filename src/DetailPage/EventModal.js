import Modal from 'react-modal';

const EventModal = ({ isOpen, closeModal, eventData }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal">
      <div>
        <h2>Event details</h2>
        {eventData && (
          <div>
            <p>Date: {eventData.dateVenue}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default EventModal;
