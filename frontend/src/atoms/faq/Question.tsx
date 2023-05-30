import { FC } from "react";
import { IQuestion } from "../../types";
import { FaMinus, FaPlus } from "react-icons/fa";
const Question: FC<IQuestion> = ({
  question,
  handleQuestion,
  item,
  lastIndex,
}) => {
  const answerTernary =
    question === item.id ? "max-h-80 h-full opacity-100" : "max-h-0";
  return (
    <div className="overflow-hidden relative">
      <div className="flex items-start md:items-center pb-4 justify-between">
        <h1 className="font-bold text-blue-900">{item.question}</h1>
        <div
          className="
      text-blue-800 cursor-pointer"
          onClick={() => handleQuestion(item.id)}>
          {question === item.id ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <p
        className={`transition-all duration-300 pb-2 ease-linear ${answerTernary}`}>
        {item.answer}
      </p>
      {lastIndex !== item.id ? (
        <div className="absolute bottom-0 h-0.5 w-full bg-blue-400" />
      ) : null}
    </div>
  );
};

export default Question;
