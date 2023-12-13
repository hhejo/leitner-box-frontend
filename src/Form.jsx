import { useState } from "react";

function Form({ onSubmit }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({ question, answer });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="question">질문</label>
          <textarea
            id="question"
            name="question"
            required
            rows="4"
            cols="40"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </p>
        <p>
          <label htmlFor="answer">답변</label>
          <textarea
            id="answer"
            name="answer"
            required
            rows="4"
            cols="40"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </p>
        <button onClick={submitHandler}>카드 생성하기</button>
      </form>
    </>
  );
}

export default Form;
