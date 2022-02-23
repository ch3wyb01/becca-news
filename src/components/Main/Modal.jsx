import { MDBModal, MDBModalDialog, MDBModalContent } from "mdb-react-ui-kit";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const Modal = ({ children }) => {
  const { modal } = useContext(ModalContext);

  return (
    <MDBModal show={modal} staticBackdrop={true}>
      <MDBModalDialog centered>
        <MDBModalContent>{children}</MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default Modal;
