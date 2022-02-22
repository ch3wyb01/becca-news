import {
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";

const DeleteCommentModal = ({ id }) => {
  const { setModal } = useContext(ModalContext);

  return (
    <>
      <MDBModalBody>Are you sure you want to delete this comment?</MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={() => setModal(undefined)}>
          Cancel
        </MDBBtn>
      </MDBModalFooter>
    </>
  );
};

export default DeleteCommentModal;
