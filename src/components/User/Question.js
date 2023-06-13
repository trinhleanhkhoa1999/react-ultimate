import _ from "lodash";
const Question = (props) => {
  const { data, index } = props;
  //   console.log(data);
  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleHandleCheckBox = (event, aId, qId) => {
    console.log("data: ", aId, qId);
    props.handleCheckBox(aId, qId);
  };
  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img src={`data:image/jpeg;base64, ${data.image}`} />
        </div>
      ) : (
        <div className="q-image"></div>
      )}
      <div className="question">
        Question {index + 1}: {data.questionDescription} ?
      </div>
      <div className="answer">
        {data &&
          data.answers &&
          data.answers.length > 0 &&
          data.answers.map((item, index) => {
            return (
              <div key={`answers ${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={item.isSelected}
                    onChange={(event) =>
                      handleHandleCheckBox(event, item.id, data.questionId)
                    }
                  />
                  <label className="form-check-label">{item.description}</label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Question;
