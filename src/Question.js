import Form from "react-bootstrap/Form";

const Question = ({question}) => {

  return(
    <div className="question">
      <h3 className="questionTitle">{question.title}</h3>
        {question.answers.map(answer =>
          <Form.Group key={answer.answer} className="answer">
              <Form.Check
               type="radio"
               label={answer.answer}
               name={question.title}
               id={answer.answer}
               key={answer.answer} />
          </Form.Group>
        )}
    </div>
  );
};

export default Question;