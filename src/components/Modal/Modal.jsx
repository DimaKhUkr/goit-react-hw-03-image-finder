import { Overlay, ModalImg } from './Modal.styled';

export const Modal = ({ src }) => {
  return;
  <Overlay>
    <ModalImg>
      <img src={src} alt="Рисунок в модалке" />
    </ModalImg>
  </Overlay>;
};
