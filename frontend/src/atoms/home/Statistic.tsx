import { FC } from "react";
import { IStatistic } from "../../types";
import { GrDocumentText } from "react-icons/gr";

const Statistic: FC<IStatistic> = ({ count, title }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <GrDocumentText className="text-2xl" />
      <h2 className="text-2xl font-bold">{count}</h2>
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default Statistic;
