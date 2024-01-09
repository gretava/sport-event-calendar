import Modal from 'react-modal';
import styles from './eventModal.module.scss';

const EventModal = ({ isOpen, closeModal, eventData }) => {
  // const capitalizeFirstLetter = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className={styles.modal}
    >
      <div className={styles.modalContent}>
        <h2 className={styles.modalH2}>Event details</h2>
        {eventData && (
          <div className={styles.infoDiv}>
            <p>
              <span>Home team name:</span> {eventData.homeTeam?.name}
            </p>
            <p>
              <span>Away team name:</span> {eventData.awayTeam?.name}
            </p>
            <p>
              <span>Match date:</span> {eventData.dateVenue}
            </p>
            <p>
              <span>Match time:</span> {eventData.timeVenueUTC}
            </p>
            <p>
              <span>Season:</span> {eventData.season}
            </p>
            <p>
              <span>Winner:</span> {eventData.result?.winner}
            </p>
            <p>
              <span>Result:</span>
            </p>
            <div>Home goals: {eventData.result?.homeGoals}</div>
            <div>Away goals: {eventData.result?.awayGoals}</div>
            <p>
              <span>Status:</span> {eventData.status}
            </p>
          </div>
        )}
        <button onClick={closeModal} className={styles.closeBtn}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default EventModal;
