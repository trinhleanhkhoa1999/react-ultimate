import { useState, useEffect, useRef } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { toast } from "react-toastify";
import { postCreateNewQuiz } from "../../../../services/apiService";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import { getDataForQuiz } from "../../../../services/apiService";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  const [listQuiz, setListQuiz] = useState({});
  const [isShowHideQuiz, setIsShowHideQuiz] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  const handeleDeleteQuiz = (deleteQuiz) => {
    setIsShowHideQuiz(true);
    setDataDelete(deleteQuiz);
    console.log(dataDelete);
  };

  useEffect(() => {
    fetchDataListQuiz();
  }, []);
  const fetchDataListQuiz = async () => {
    let res = await getDataForQuiz();
    console.log(res);
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
  };

  const handleChangeFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  const handleSubmitQuiz = async () => {
    //validate
    if (!name || !description) {
      toast.error(" check name/description !");
    }
    let res = await postCreateNewQuiz(description, name, type?.value, image);
    console.log("res: ", res);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setType("");
      setImage(null);
      inputRef.current.value = null;
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            <div className="title">Manage Quizzes</div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new Quiz</legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                  <label>Description</label>
                </div>
                <div className="my-3">
                  <Select
                    defaultValue={type}
                    onChange={setType}
                    options={options}
                    placeholder="Quiz type...."
                  />
                </div>
                <div className="more-actions form-group">
                  <label className="mb-1">Upload Image</label>
                  <input
                    type="file"
                    ref={inputRef}
                    className="form-control"
                    onChange={(event) => {
                      handleChangeFile(event);
                    }}
                  ></input>
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      handleSubmitQuiz();
                    }}
                  >
                    {" "}
                    Save
                  </button>
                </div>
              </fieldset>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="list-detail mt-5">
        <h4>List Quiz: </h4>
        <TableQuiz
          listQuiz={listQuiz}
          handeleDeleteQuiz={handeleDeleteQuiz}
          fetchDataListQuiz={fetchDataListQuiz}
        />
      </div>
      <ModalDeleteQuiz
        show={isShowHideQuiz}
        setShow={setIsShowHideQuiz}
        dataDelete={dataDelete}
      />
    </div>
  );
};
export default ManageQuiz;
