import { AiOutlineLine, AiOutlineArrowRight } from "react-icons/ai";
import { FC, ReactElement } from "react";
interface IHeader {
  first: string;
  child: ReactElement | ReactElement[];
  third: string;
}
const SectionHeader: FC<IHeader> = ({ first, child, third }) => {
  return (
    <>
      <div className="flex items-end gap-2 text-blue-600">
        <AiOutlineLine />
        {first}
      </div>
      <div className="flex flex-col-reverse gap-2 sm:gap-0 sm:flex-row pt-2 items-baseline sm:items-center font-semibold">
        {child}
        <button className="flex items-center border py-2 px-5 gap-2 border-blue-600 rounded-xl">
          {third}
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};

export default SectionHeader;
