import { FC } from "react";
import { IDoc } from "../../types";
interface IDocs {
  doc: IDoc;
}
const Doc: FC<IDocs> = ({ doc }) => {
  return (
    <div className="bg-white p-3">
      <h1>{doc.title}</h1>
      <p>
        {doc.body.substring(0, 50 + doc.body.substring(50).indexOf(" "))}...
      </p>
      <div className="flex items-center justify-between">
        <span className="text-blue-600 font-bold text-2xl">{doc.price}</span>
        <button>A</button>
      </div>
    </div>
  );
};

export default Doc;
