import { Overlay, Modal } from './Modal.styled';

export const Modal = ({ src }) => {
  return;
  <Overlay>
    <Modal>
      <img src={src} alt="Рисунок в модалке" />
    </Modal>
  </Overlay>;
};
