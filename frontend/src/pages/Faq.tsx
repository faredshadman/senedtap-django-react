import Questions from "../components/faq/Questions";
import { AiOutlineLine } from "react-icons/ai";

const Faq = () => {
  return (
    <section className="pt-20 px-5 md:px-16 mb-5">
      <div className="flex items-end text-blue-700 font-semibold space-x-1">
        <AiOutlineLine />
        <span>Sualın var?</span>
      </div>
      <h2 className="text-3xl font-sans font-semibold tracking-wide">
        Tez-tez verilən suallar
      </h2>
      <Questions />
    </section>
  );
};

export default Faq;
