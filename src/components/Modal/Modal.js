import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const ModalImage = ({ url, name, modalOpen, modalClose }) => {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => modalClose()}
      style={{
        overlay: {},
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '50vw',
          padding: '0',
        },
      }}
    >
      <img src={url} alt={name} />
    </ReactModal>
  );
};
