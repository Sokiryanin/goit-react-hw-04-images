import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const ModalImage = ({ url, name, modalOpen, modalClose }) => {
  return (
    <ReactModal isOpen={modalOpen} onRequestClose={() => modalClose()}>
      <img src={url} alt={name} />
    </ReactModal>
  );
};
