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
    <MDBModalHeader className="justify-content-center">
        <MDBModalTitle className="text-center">Are you sure you want to delete this comment?</MDBModalTitle>
    </MDBModalHeader>
      <MDBModalBody>This action can't be undone.</MDBModalBody>
      <MDBModalFooter>
        <MDBBtn outline color="light" onClick={() => setModal(undefined)}>
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
