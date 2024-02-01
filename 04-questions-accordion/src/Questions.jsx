import React from "react";
import Question from "./Question";

const Questions = ({ toggleQuestion, questions, activeId }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            toggleQuestion={toggleQuestion}
            key={question.id}
            {...question}
            activeId={activeId}
          />
        );
      })}
    </section>
  );
};

export default Questions;
