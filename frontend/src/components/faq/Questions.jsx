import { useState } from "react";
import Question from "../../atoms/faq/Question";
import { questions } from "../../data";

const Questions = () => {
  const [question, setQuestion] = useState(1);
  const handleQuestion = (id) => {
    if (question === id) {
      setQuestion(0);
      return;
    }
    setQuestion(id);
  };
  return (
    <div className="shadow-lg space-y-5 mt-10 p-5 rounded-sm">
      {questions.map((item) => (
        <Question
          lastIndex={questions.length}
          key={item.id}
          item={item}
          question={question}
          handleQuestion={handleQuestion}
        />
      ))}
    </div>
  );
};

export default Questions;
