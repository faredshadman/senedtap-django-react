// ts
import { FC } from "react";
import { AppDispatch } from "../../store";
import { ICategory } from "../../types";
import { GrDocumentText } from "react-icons/gr";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// store
import { changeSelected } from "../../store/category";
import { useDispatch } from "react-redux";

const Category: FC<ICategory> = ({ name, body }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleCategory = (category: number | string) => {
    dispatch(changeSelected(category));
    navigate("/docs");
  };
  return (
    <div className="bg-slate-100 relative p-10 rounded-lg">
      <div className="flex flex-col items-center">
        <GrDocumentText className="text-4xl text-blue-600" />
        <h1 className="text-center text-xl">{name}</h1>
      </div>
      <p className="text-sm pt-5 text-center">{body}</p>
      <BsArrowRightCircleFill
        onClick={() => handleCategory(name)}
        className="absolute text-blue-800 text-4xl left-1/2 -translate-x-1/2 -bottom-4"
      />
    </div>
  );
};

export default Category;
