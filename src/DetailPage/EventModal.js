import Modal from 'react-modal';

const EventModal = ({ isOpen, closeModal, eventData }) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal" />

      <h2>Event details</h2>
      {eventData && (
        <div>
          <p>Date: {eventData.dateVenue}</p>
        </div>
      )}
      <button onClick={closeModal}>Close</button>
    </>
  );
};

export default Modal;
