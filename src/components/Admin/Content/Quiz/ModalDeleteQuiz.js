import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";

const ModalDeleteQuiz = (props) => {
  const { show, setShow, dataDelete } = props;
  const handleClose = () => setShow(false);

  const handleDeleteQuiz = async () => {
    let res = await deleteQuiz(dataDelete.id);
    console.log("delete quiz", res);
    if (res.EC === 0) {
      toast.success(res.EM);
      handleClose();
      await props.fetchDataListQuiz();
    }
  };
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Modal delete Quiz with id: {dataDelete.id}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure delete Quiz!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleDeleteQuiz();
              }}
            >
              Delete Quiz
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};
export default ModalDeleteQuiz;
