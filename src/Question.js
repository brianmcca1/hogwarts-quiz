import Form from "react-bootstrap/Form";

const Question = ({question}) => {
  return(
    <>
      <h3>{question.title}</h3>
        {question.answers.map(answer =>
          <Form.Group key={answer.answer}>
              <Form.Check
               type="radio"
               label={answer.answer}
               name={question.title}
               id={answer.answer}
               key={answer.answer} />
          </Form.Group>
        )}
    </>
  );
};

export default Question;