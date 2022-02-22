import {
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";

const DeleteCommentModal = ({ id, onDeleteClick }) => {
  const { setModal } = useContext(ModalContext);

  return (
    <>
      <MDBModalBody>Are you sure you want to delete this comment?</MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={() => setModal(undefined)}>
          Cancel
        </MDBBtn>
        <MDBBtn color="danger" onClick={() => onDeleteClick(id)}>
          Delete
        </MDBBtn>
      </MDBModalFooter>
    </>
  );
};

export default DeleteCommentModal;
